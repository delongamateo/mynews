import React from 'react'
import { FaHome, FaNewspaper, FaBriefcase, FaHeartbeat, FaSyringe, FaBasketballBall, FaLaptopCode } from 'react-icons/fa';
import CategoryButton from "./CategoryButton/CategoryButton"
import "./Categories.scss"

const categoriesList = [
    {
        name: "Home",
        icon: <FaHome />
    },
    {
        name: "General",
        icon: <FaNewspaper />
    },
    {
        name: "Business",
        icon: <FaBriefcase />
    },
    {
        name: "Health",
        icon: <FaHeartbeat />
    },
    {
        name: "Science",
        icon: <FaSyringe />
    },
    {
        name: "Sports",
        icon: <FaBasketballBall />
    },
    {
        name: "Technology",
        icon: <FaLaptopCode />
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
