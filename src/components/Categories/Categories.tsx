import { FC } from 'react'
import { FaHome, FaNewspaper, FaBriefcase, FaHeartbeat, FaSyringe, FaBasketballBall, FaLaptopCode } from 'react-icons/fa';
import { MdFavorite } from "react-icons/md"
import CategoryButton from "./CategoryButton/CategoryButton"
import "./Categories.scss"
import { Category } from '../../types/types';

const categoriesList: Category[] = [
    {
        name: "Home",
        icon: <FaHome />,
        value: "home"
    },
    {
        name: "General",
        icon: <FaNewspaper />,
        value: "world"
    },
    {
        name: "Business",
        icon: <FaBriefcase />,
        value: "business"
    },
    {
        name: "Health",
        icon: <FaHeartbeat />,
        value: "health"
    },
    {
        name: "Science",
        icon: <FaSyringe />,
        value: "science"
    },
    {
        name: "Sports",
        icon: <FaBasketballBall />,
        value: "sports"
    },
    {
        name: "Technology",
        icon: <FaLaptopCode />,
        value: "technology"
    },
    {
        name: "Favorites",
        icon: <MdFavorite />,
        value: "favorites"
    },

]

const Categories = () => {
    return (
        <div className='categories'>
            {categoriesList.map((category) => (
                <CategoryButton category={category} />
            ))}
        </div>
    )
}

export default Categories
