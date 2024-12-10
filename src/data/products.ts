import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    price: 799,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    category: 'Running',
    description: 'The Nike Air Max 270 delivers a plush ride for everyday wear'
  },
  {
    id: '2',
    name: 'Adidas Ultraboost',
    price: 699,
    image: 'https://img.freepik.com/free-photo/men-shoes_1203-8652.jpg?semt=ais_hybrid',
    category: 'Running',
    description: 'Energy-returning Boost cushioning for maximum comfort'
  },
  {
    id: '3',
    name: 'Puma RS-X',
    price: 499,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    category: 'Lifestyle',
    description: 'Retro-inspired chunky sneakers with modern comfort'
  },
  {
    id: '4',
    name: 'Nike Jordan 1',
    price: 799,
    image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634',
    category: 'Basketball',
    description: 'Iconic design that started it all'
  }
];