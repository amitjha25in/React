import React from 'react';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

function App() {
  return (
    <>
      <BookContextProvider>
        <Navigation />
        <div class="container">
          <div className="row">
            <div className="col-lg-3 my-4">
              <NewBookForm />
            </div>
            <div class="col-lg-9 my-4">
              <Navbar />
              <BookList />
            </div>

          </div>
        </div>

      </BookContextProvider>
    </>
  );
}

export default App;