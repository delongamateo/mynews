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
import ArticleDetail from './components/ArticleDetail/ArticleDetail';

const App = () => {

  return (
    <Router>
      <MyNewsProvider>
        <div className="App">
          <Banner />
          <div className="AppContainer">
            <Nav />
            <div className='newsContainer'>
              <div className='desktopCategories'>
                <Categories />
              </div>
              <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/:category" element={<Category />} />
                <Route path="/:category/:article" element={<ArticleDetail />} />
              </Routes>
            </div>
          </div>
        </div>
      </MyNewsProvider>
    </Router>
  );
}

export default App;
