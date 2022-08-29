import { useContext } from 'react'
import "./SearchBar.scss"
import { FaSearch } from 'react-icons/fa';
import { MyNewsContext } from "../../Context/MyNewsContext"

const SearchBar = () => {
  const myNewsContext = useContext(MyNewsContext)
  const { handleSearch } = myNewsContext
  return (
    <div className="searchBar">
      <FaSearch className="searchIcon" />
      <input type="text" placeholder='Search news' className='searchInput' onChange={(e) => handleSearch(e.target.value)} />
      <button onClick={() => console.log("search")} className="searchButton">SEARCH</button>
    </div>
  )
}

export default SearchBar;