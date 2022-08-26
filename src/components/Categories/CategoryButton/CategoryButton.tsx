import { FC, useContext } from 'react'
import "./CategoryButton.scss"
import { Category } from "../../../types/types"
import {MyNewsContext, MyNewsInterface} from "../../../Context/MyNewsContext"

type CategoryButtonProps = {
    category: Category
}

const CategoryButton: FC<CategoryButtonProps> = ({ category }) => {
    const { name, value, icon } = category;
    const myNewsContext = useContext(MyNewsContext)
    const {selectedCategory, fetchArticles} = myNewsContext as MyNewsInterface;

    return (
        <button className={selectedCategory === value ? "categoryButton selected" : "categoryButton"} onClick={() => fetchArticles(value)}>
            <span className='icon'>{icon}</span>
            <p>{name}</p>
        </button>

    )
}

export default CategoryButton