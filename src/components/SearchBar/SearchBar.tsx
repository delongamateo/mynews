import React from 'react'
import "./SearchBar.scss"
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <FaSearch className="searchIcon" />
      <input type="text" placeholder='Search news' className='searchInput' />
      <button className="searchButton">SEARCH</button>
    </div>
  )
}

export default SearchBar