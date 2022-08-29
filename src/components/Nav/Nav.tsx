import { FC, useContext } from 'react'
import "./Nav.scss"
import MobileMenu from "./MobileMenu/MobileMenu"
import SearchBar from "../SearchBar/SearchBar"
import { GrMenu } from "react-icons/gr"
import { MyNewsContext } from "../../Context/MyNewsContext"

const Nav = () => {
  const myNewsContext = useContext(MyNewsContext)
  const {setDisplayMenu} = myNewsContext
  
  return (
    <div className='nav'>
      <div className='navWrap'>
        <div className="logoContainer">
          <p className='my'>My<span className="news">News</span></p>
          <button onClick={() => setDisplayMenu("flex")} className='hamburgerMenu'><GrMenu /></button>
        </div>
        <SearchBar />
      </div>
      <MobileMenu />
    </div>
  )
}

export default Nav