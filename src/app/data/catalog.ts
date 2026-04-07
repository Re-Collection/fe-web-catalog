import manualCatalogOverrides from './manualCatalogOverrides';

const imageModules = import.meta.glob<string>(
  '/src/assets/Productos/**/*.{jpg,jpeg,png,webp}',
  { import: 'default' }
);

const imageUrlCache = new Map<string, Promise<string>>();

export const resolveCatalogImage = (imagePath: string) => {
  const loader = imageModules[imagePath];
  if (!loader) {
    return Promise.resolve(imagePath);
  }

  if (!imageUrlCache.has(imagePath)) {
    imageUrlCache.set(
      imagePath,
      loader().then((src) => src as string)
    );
  }

  return imageUrlCache.get(imagePath)!;
};

export interface CatalogProduct {
  nombre: string;
  subcategoria: string;
  carpetaImagenes: string;
  imagenes: string[];
  precio: number;
  precioViejo?: number;
  descripcion?: string;
  detalle?: string;
}

export interface CatalogCategory {
  categoria: string;
  productos: CatalogProduct[];
}

interface ProductAccumulator {
  categoria: string;
  subcategoria: string;
  carpetaImagenes: string;
  nombre: string;
  imagenes: { src: string; order: number }[];
  precio: number;
  precioViejo?: number;
  descripcion?: string;
  detalle?: string;
}

const manualOverrideMap = new Map(
  manualCatalogOverrides.map((override) => [override.folderKey, override])
);

const normalizeSegment = (segment: string) =>
  segment
    .replace(/^[_-]+/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const toTitleCase = (value: string) =>
  normalizeSegment(value).replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );

const applyWordCase = (original: string, replacement: string) => {
  if (!original) return replacement;
  if (original === original.toUpperCase()) return replacement.toUpperCase();
  if (original[0] === original[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
};

const irregularSingularMap: Record<string, string> = {
  cargadores: 'cargador',
  encendedores: 'encendedor',
  pantalones: 'pantalon',
  lentes: 'lente',
};

const singularizeWord = (word: string) => {
  if (!word) return word;
  const lower = word.toLowerCase();

  if (irregularSingularMap[lower]) {
    return applyWordCase(word, irregularSingularMap[lower]);
  }

  if (/ces$/i.test(word)) {
    return word.replace(/ces$/i, 'z');
  }
  if (/ores$/i.test(word)) {
    return word.replace(/ores$/i, 'or');
  }
  if (/([b-df-hj-np-tv-z])es$/i.test(word)) {
    return word.replace(/es$/i, '');
  }
  if (/([aeiou])s$/i.test(word) && !/(?:[aeiou])es$/i.test(word)) {
    return word.replace(/s$/i, '');
  }
  if (/es$/i.test(word)) {
    return word.replace(/es$/i, 'e');
  }
  return word;
};

const singularizePhrase = (phrase: string) => {
  const parts = phrase.split(' ');
  if (!parts.length) return phrase;
  const last = parts.pop() ?? '';
  const singular = singularizeWord(last);
  return [...parts, singular].filter(Boolean).join(' ');
};

const priceFromName = (name: string) => {
  const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const base = 80 + (hash % 320);
  return Math.round(base * 100) / 100;
};

const detailFromName = (name: string, category: string) =>
  `Descubre ${name} dentro de la categoría ${category}.`;

const orderFromFileName = (fileName: string) => {
  const match = fileName.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
};

const productMap = new Map<string, ProductAccumulator>();

Object.keys(imageModules).forEach((fullPath) => {
  const normalizedPath = fullPath.replace(/\\/g, '/');
  const relative = normalizedPath.split('/src/assets/Productos/')[1];
  if (!relative) return;

  const segments = relative.split('/');
  if (segments.length < 4) return;

  const [rawCategory, rawSubcategory, rawProduct, ...rest] = segments;
  const fileName = rest.join('/');
  if (!fileName) return;

  const folderKey = [rawCategory, rawSubcategory, rawProduct].join('/');
  const categoria = toTitleCase(rawCategory);
  const subcategoriaPlural = toTitleCase(rawSubcategory);
  const subcategoria = singularizePhrase(subcategoriaPlural);
  const producto = toTitleCase(rawProduct);
  const baseName = `${subcategoria} ${producto}`.trim();
  const carpetaImagenes = folderKey;

  if (!productMap.has(folderKey)) {
    const override = manualOverrideMap.get(folderKey);
    const nombre = override?.nombre ?? baseName;
    const precioBase = priceFromName(nombre);
    const precio = override?.precio ?? precioBase;
    const precioViejoBase = Math.round(precio * 1.18 * 100) / 100;
    const precioViejo = override?.precioViejo ?? precioViejoBase;
    const descripcion = override?.descripcion ?? detailFromName(nombre, categoria);
    const detalle = override?.detalle ?? '';
    productMap.set(folderKey, {
      categoria,
      subcategoria,
      carpetaImagenes,
      nombre,
      imagenes: [],
      precio,
      precioViejo,
      descripcion,
      detalle,
    });
  }

  const accumulator = productMap.get(folderKey)!;
  accumulator.imagenes.push({ src: normalizedPath, order: orderFromFileName(fileName) });
});

const categoriesMap = new Map<string, CatalogCategory>();

productMap.forEach((accumulator) => {
  const { categoria } = accumulator;
  if (!categoriesMap.has(categoria)) {
    categoriesMap.set(categoria, { categoria, productos: [] });
  }

  const categoryEntry = categoriesMap.get(categoria)!;
  const imagenesOrdenadas = accumulator.imagenes
    .sort((a, b) => (a.order === b.order ? a.src.localeCompare(b.src) : a.order - b.order))
    .map((image) => image.src);

  categoryEntry.productos.push({
    nombre: accumulator.nombre,
    subcategoria: accumulator.subcategoria,
    carpetaImagenes: accumulator.carpetaImagenes,
    imagenes: imagenesOrdenadas,
    precio: accumulator.precio,
    precioViejo: accumulator.precioViejo,
    descripcion: accumulator.descripcion,
    detalle: accumulator.detalle,
  });
});

const catalog: CatalogCategory[] = Array.from(categoriesMap.values())
  .map((category) => ({
    categoria: category.categoria,
    productos: category.productos.sort((a, b) => a.nombre.localeCompare(b.nombre)),
  }))
  .sort((a, b) => a.categoria.localeCompare(b.categoria));

export const catalogEditableSnapshot = Array.from(productMap.values())
  .map((product) => ({
    folderKey: product.carpetaImagenes,
    categoria: product.categoria,
    nombre: product.nombre,
    precio: product.precio,
    precioViejo: product.precioViejo,
  }))
  .sort((a, b) => a.nombre.localeCompare(b.nombre));

export default catalog;
