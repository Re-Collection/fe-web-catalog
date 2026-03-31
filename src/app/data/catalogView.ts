import catalog from './catalog';
import type { Product } from '../components/ProductCard';

export interface CatalogSection {
  title: string;
  sectionId: string;
  products: Product[];
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/[\u0300-\u036f]/g, '');

const sectionIdFromTitle = (title: string) => `section-${slugify(title)}`;
const slugFromFolder = (category: string, folder: string) => slugify(`${category}-${folder}`);

const buildCatalogViewModel = () => {
  let idCounter = 1;

  const sections: CatalogSection[] = catalog
    .map((category) => {
      const sectionId = sectionIdFromTitle(category.categoria);

      const products: Product[] = category.productos
        .filter((producto) => producto.imagenes.length > 0)
        .map((producto) => {
          const images = producto.imagenes;
          const mainImage = images[0];
          const slug = slugFromFolder(category.categoria, producto.carpetaImagenes);

          return {
            id: idCounter++,
            name: producto.nombre,
            price: producto.precio,
            oldPrice: producto.precioViejo,
            detail: producto.detalle,
            description: producto.descripcion,
            category: category.categoria,
            subcategory: producto.subcategoria,
            image: mainImage,
            images,
            imageFolder: producto.carpetaImagenes,
            slug,
          };
        });

      return {
        title: category.categoria,
        sectionId,
        products,
      };
    })
    .filter((section) => section.products.length > 0);

  const allProducts = sections.flatMap((section) => section.products);

  return { sections, allProducts };
};

const catalogView = buildCatalogViewModel();

export const catalogSections = catalogView.sections;
export const allProducts = catalogView.allProducts;

export const findProductBySlug = (slug: string) =>
  allProducts.find((product) => product.slug === slug);
