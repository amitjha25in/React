import React from 'react';
import Navigation from './components/Navigation';
import ProductContextProvider from './contexts/ProductContext';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <ProductContextProvider>
        <Navigation />
        <Hero />
        <div className="container">
          <div className="row">
            <div className="col-lg-3 my-4">
              test
            </div>
            <div className="col-lg-9 my-4">
              test
            </div>

          </div>
        </div>

      </ProductContextProvider>
    </>
  );
}

export default App;