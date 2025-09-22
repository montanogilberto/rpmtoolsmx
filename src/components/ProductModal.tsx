import React from 'react';
import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    features: string[];
    image: string;
    alt: string;
  } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-metallic-gray-dark rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-metallic-gray">
          <h2 className="text-2xl font-bold text-steel-gray-light">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-steel-gray-light hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="metallic-card p-4">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-64 object-contain mx-auto"
              />
            </div>

            {/* Information */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-precision-red mb-2">Descripción</h3>
                <p className="text-steel-gray-light leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-precision-red mb-2">Características</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-steel-gray-light">
                      <span className="text-precision-red mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
