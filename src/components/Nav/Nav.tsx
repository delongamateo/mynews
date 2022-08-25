import { FC } from 'react'
import "./Nav.scss"
import SearchBar from "../SearchBar/SearchBar"

const Nav = () => {
  return (
    <div className='nav'>
      <div className='navWrap'>
        <p className='my'>My<span className="news">News</span></p>
        <SearchBar />
      </div>

    </div>
  )
}

export default Nav