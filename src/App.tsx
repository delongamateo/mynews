import './App.scss';
import Banner from './components/Banner/Banner';
import Nav from "./components/Nav/Nav"
import Categories from "./components/Categories/Categories"
import Category from "./components/Category/Category"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MyNewsProvider from "./Context/MyNewsContext"

const App = () => {
  
  return (
    <Router>
      <MyNewsProvider>
        <div className="App">
          <Banner />
          <div className="AppContainer">
            <Nav />
            <div className='newsContainer'>
              <Categories />
              <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/:category" element={<Category />} />
              </Routes>
            </div>
          </div>
        </div>
      </MyNewsProvider>
    </Router>
  );
}

export default App;
