import React from 'react';
import Navbar from './NavBar/NavBar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Hello, World!</h1>
      </div>
    </div>
  );
}

export default App;


