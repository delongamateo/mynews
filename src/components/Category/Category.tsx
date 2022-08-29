import { useContext, useState, useEffect } from 'react'
import "./Category.scss"
import ArticleCard from "../ArticleCard/ArticleCard"
import LatestNews from '../LatestNews/LatestNews'
import { MyNewsContext } from "../../Context/MyNewsContext"
import { useParams } from "react-router-dom"

const Category = () => {
    const myNewsContext = useContext(MyNewsContext)
    const { articles, favoriteArticles, displayMobileMenu } = myNewsContext
    const [type, setType] = useState<string>("Featured")

    const { category } = useParams()

    return (
        <div className='category' style={{ display: displayMobileMenu === "flex" ? "none" : "flex" }}>
            <p className="categoryTitle">News</p>
            <div className='seTypeButtonsContainer'>
                <button onClick={() => setType("Featured")} className={`setType ${type === "Featured" ? "selectedType" : ""}`}>Featured</button>
                <button onClick={() => setType("Latest")} className={`setType ${type === "Latest" ? "selectedType" : ""}`}>Latest</button>
            </div>
            <div className='articlesContainerDesktop'>
                {(category !== "favorites" ? articles : favoriteArticles)?.map((article, i) => (
                    <ArticleCard article={article} key={i} />
                ))}
                <LatestNews />
            </div>
            <div className='articlesContainerMobile'>
                <div className={`articleCardsContainer ${type === "Latest" ? "hideType" : ""}`}>
                    {(category !== "favorites" ? articles : favoriteArticles)?.map((article, i) => (
                        <ArticleCard article={article} key={i} />
                    ))}
                </div>
                <div className={`${type === "Featured" ? "hideType" : ""}`}>
                    <LatestNews />
                </div>
            </div>
        </div>
    )
}

export default Category