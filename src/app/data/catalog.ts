const imageModules = import.meta.glob<string>(
  '/src/assets/Productos/**/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
);

export interface CatalogProduct {
  nombre: string;
  subcategoria: string;
  carpetaImagenes: string;
  imagenes: string[];
  precio: number;
  precioViejo?: number;
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
  detalle?: string;
}

const priceOverrides: Record<string, { precio: number; precioViejo?: number }> = {
  // 'Categoria/Subcategoria/Producto': { precio: 199.9, precioViejo: 249.9 },
};

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

const singularizeWord = (word: string) => {
  if (!word) return word;
  if (/ces$/i.test(word)) {
    return word.replace(/ces$/i, 'z');
  }
  if (/([aeiou])s$/i.test(word)) {
    return word.replace(/s$/i, '');
  }
  if (/es$/i.test(word)) {
    return word.replace(/es$/i, '');
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

Object.entries(imageModules).forEach(([fullPath, src]) => {
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
  const nombre = `${subcategoria} ${producto}`.trim();
  const carpetaImagenes = folderKey;

  if (!productMap.has(folderKey)) {
    const override = priceOverrides[folderKey];
    const precio = override?.precio ?? priceFromName(nombre);
    productMap.set(folderKey, {
      categoria,
      subcategoria,
      carpetaImagenes,
      nombre,
      imagenes: [],
      precio,
      precioViejo: override?.precioViejo ?? Math.round(precio * 1.18 * 100) / 100,
      detalle: detailFromName(nombre, categoria),
    });
  }

  const accumulator = productMap.get(folderKey)!;
  accumulator.imagenes.push({ src: src as string, order: orderFromFileName(fileName) });
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
    detalle: accumulator.detalle,
  });
});

const catalog: CatalogCategory[] = Array.from(categoriesMap.values())
  .map((category) => ({
    categoria: category.categoria,
    productos: category.productos.sort((a, b) => a.nombre.localeCompare(b.nombre)),
  }))
  .sort((a, b) => a.categoria.localeCompare(b.categoria));

export default catalog;
