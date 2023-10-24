import React from 'react';
import Navbar from './NavBar/NavBar';
import Example from './SideBar/SideBar';
import Cards from './Cards/Cards';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Example />
      <Cards />
    </div>
  );
}

export default App;


