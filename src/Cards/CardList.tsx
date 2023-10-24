import React from 'react';
import ProductCard from './Cards';
import { Product } from './ProductData';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.key} className="col-lg-4 mb-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
