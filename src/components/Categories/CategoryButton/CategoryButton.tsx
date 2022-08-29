import { FC, useContext } from 'react'
import "./CategoryButton.scss"
import { useNavigate } from "react-router-dom"
import { Category } from "../../../types/types"
import { MyNewsContext } from "../../../Context/MyNewsContext"

type CategoryButtonProps = {
    category: Category
}

const CategoryButton: FC<CategoryButtonProps> = ({ category }) => {
    const { name, value, icon } = category;
    const myNewsContext = useContext(MyNewsContext)
    const { selectedCategory, fetchArticles, handleMobileMenu } = myNewsContext;

    const navigate = useNavigate()

    const fetchCategory = () => {
        fetchArticles(value)
        navigate(`/${value !== "home" ? value : ""}`)
        handleMobileMenu("none")
    }

    return (
        <button className={selectedCategory === value ? "categoryButton selected" : "categoryButton"} onClick={() => fetchCategory()}>
            <span className='icon'>{icon}</span>
            <p>{name}</p>
        </button>

    )
}

export default CategoryButton