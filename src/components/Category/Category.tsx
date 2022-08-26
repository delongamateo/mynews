import { useContext, useEffect } from 'react'
import "./Category.scss"
import ArticleCard from "../ArticleCard/ArticleCard"
import LatestNews from '../LatestNews/LatestNews'
import { MyNewsContext, MyNewsInterface } from "../../Context/MyNewsContext"
import { useParams } from "react-router-dom"

const Category = () => {
    const myNewsContext = useContext(MyNewsContext)
    const { articles, favoriteArticles } = myNewsContext as MyNewsInterface

    const { category } = useParams()

    return (
        <div className='category'>
            <p className="categoryTitle">News</p>
            <div className='articlesContainer'>
                {(category !== "favorites" ? articles : favoriteArticles)?.map((article) => (
                    <ArticleCard article={article} />
                ))}
                <LatestNews />
            </div>
        </div>
    )
}

export default Category