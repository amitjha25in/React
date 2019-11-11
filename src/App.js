import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import SingleList from './components/SingleList';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Header />
        <div class="col-lg-4 my-4">
          <Form />
        </div>
        <div class="col-lg-8 my-4">
          <SingleList />
        </div>
      </div>
    </div>
  );
}

export default App;
