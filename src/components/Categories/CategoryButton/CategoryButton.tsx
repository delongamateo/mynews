import React, { FC } from 'react'
import "./CategoryButton.scss"

type CategoryButtonProps = {
    category: {
        name: string;
        icon: JSX.Element;
    }
}

const CategoryButton: FC<CategoryButtonProps> = ({ category }) => {
    return (
        <button className='categoryButton'>
            <span className='icon'>{category.icon}</span>
            <p>{category.name}</p>
        </button>

    )
}

export default CategoryButton