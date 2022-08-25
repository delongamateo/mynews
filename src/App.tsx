import React from 'react';
import './App.scss';
import Banner from './components/Banner/Banner';
import Nav from "./components/Nav/Nav"
import Categories from "./components/Categories/Categories"
import Category from "./components/Category/Category"

const App = () => {
  return (
    <div className="App">
      <Banner />
      <div className="AppContainer">
        <Nav />
        <div className='newsContainer'>
          <Categories />
          <Category />
        </div>
      </div>
    </div>
  );
}

export default App;
