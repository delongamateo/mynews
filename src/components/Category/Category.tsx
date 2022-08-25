import React from 'react'
import "./Category.scss"
import ArticleCard from "../ArticleCard/ArticleCard"
import LatestNews from '../LatestNews/LatestNews'

const Category = () => {
    return (
        <div className='category'>
            <p>News</p>
            <div className='articlesContainer'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <LatestNews />

            </div>
        </div>
    )
}

export default Category