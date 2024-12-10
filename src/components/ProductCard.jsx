import React from 'react';
import { MessageCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
  const whatsappLink = `https://wa.me/919365455185?text=Hi, I'm interested in ${product.name}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="mt-1 text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
