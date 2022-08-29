import { FC, useContext} from 'react'
import "./MobileMenu.scss"
import SearchBar from "../../SearchBar/SearchBar"
import Categories from '../../Categories/Categories'
import { GrClose } from "react-icons/gr"
import { MyNewsContext } from "../../../Context/MyNewsContext"

const MobileMenu = () => {
    const myNewsContext = useContext(MyNewsContext)
    const {setDisplayMenu, displayMenu} = myNewsContext

    return (
        <div style={{ display: displayMenu }} className="mobileMenu">
            <div className="mobileMenuWrap">
                <button className="closeMenu" onClick={() => setDisplayMenu("none")}><GrClose /></button>
                <p className='my'>My<span className="news">News</span></p>
                <SearchBar />
                <Categories />
            </div>
        </div>
    )
}

export default MobileMenu