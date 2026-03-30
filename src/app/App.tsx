import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedSection } from './components/FeaturedSection';
import { CategorySection } from './components/CategorySection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { Product } from './components/ProductCard';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Product Data
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Black Turtleneck',
      price: 129,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1772474521525-c022114367ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMGNsb3RoaW5nJTIwZmFzaGlvbnxlbnwxfHx8fDE3NzQ4NDI0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Elevate your wardrobe with this premium turtleneck crafted from the finest materials.',
    },
    {
      id: 2,
      name: 'Noise-Cancelling Headphones',
      price: 349,
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1773625545091-e7b18fe46130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0Nzg1NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Immerse yourself in crystal-clear audio with industry-leading noise cancellation.',
    },
    {
      id: 3,
      name: 'Minimalist Luxury Watch',
      price: 599,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1758887953059-ca6f8e454207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2F0Y2glMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzQ4NDI0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Timeless design meets precision engineering in this stunning timepiece.',
    },
    {
      id: 4,
      name: 'MacBook Pro 16"',
      price: 2499,
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0ODQyNDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Unleash your creativity with the most powerful MacBook Pro ever.',
    },
    {
      id: 5,
      name: 'Designer Sunglasses',
      price: 299,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1759933253608-ba60cfb8dcf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXMlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzQ4NDI0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Protect your eyes in style with these premium designer sunglasses.',
    },
    {
      id: 6,
      name: 'Luxury Sneakers',
      price: 449,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1765875485100-1afe930265ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc3NDc3OTA3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Step into comfort and style with these handcrafted luxury sneakers.',
    },
    {
      id: 7,
      name: 'Wireless Earbuds Pro',
      price: 249,
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDg0MjQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Experience true wireless freedom with superior sound quality.',
    },
    {
      id: 8,
      name: 'Premium Leather Backpack',
      price: 399,
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1768225681745-dff410f60448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmFja3BhY2slMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzc0ODQyNDkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Carry your essentials in this beautifully crafted leather backpack.',
    },
    {
      id: 9,
      name: 'Smart Watch Ultra',
      price: 799,
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzc0ODI1OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Track your health and stay connected with advanced smartwatch technology.',
    },
    {
      id: 10,
      name: 'Essential White T-Shirt',
      price: 79,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1485920784995-d65789b1c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2hpdGUlMjB0c2hpcnR8ZW58MXx8fHwxNzc0NzY0MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A wardrobe essential crafted from premium organic cotton.',
    },
    {
      id: 11,
      name: 'Leather Jacket',
      price: 899,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwamFja2V0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NzQ3NDU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Classic style meets modern craftsmanship in this timeless leather jacket.',
    },
    {
      id: 12,
      name: 'Smartphone Pro',
      price: 1199,
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1760900051041-90417b9c110e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ3NjQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Experience cutting-edge mobile technology with flagship performance.',
    },
  ];

  // Filter products by category
  const clothingProducts = products.filter((p) => p.category === 'Clothing');
  const techProducts = products.filter((p) => p.category === 'Tech');
  const accessoriesProducts = products.filter((p) => p.category === 'Accessories');
  const lifestyleProducts = products.filter((p) => p.category === 'Lifestyle');

  return (
    <div className="min-h-screen bg-black">
      <Navigation cartItemCount={3} />
      
      <main>
        <Hero />
        
        <FeaturedSection products={products} onViewDetails={handleViewDetails} />
        
        <CategorySection
          title="Clothing"
          products={clothingProducts}
          onViewDetails={handleViewDetails}
        />
        
        <CategorySection
          title="Tech"
          products={techProducts}
          onViewDetails={handleViewDetails}
        />
        
        {accessoriesProducts.length > 0 && (
          <CategorySection
            title="Accessories"
            products={accessoriesProducts}
            onViewDetails={handleViewDetails}
          />
        )}
        
        {lifestyleProducts.length > 0 && (
          <CategorySection
            title="Lifestyle"
            products={lifestyleProducts}
            onViewDetails={handleViewDetails}
          />
        )}
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
