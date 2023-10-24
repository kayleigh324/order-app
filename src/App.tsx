import React from 'react';
import Navbar from './NavBar/NavBar';
import Example from './SideBar/SideBar';
import Cards from './Cards/Cards';
import ProductList from './Cards/CardList';
import productData, { Product } from './Cards/ProductData';


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Example />
      <div className="container mt-4">
      <ProductList products={productData as Product[]} />
    </div>

    </div>
  );
}

export default App;


