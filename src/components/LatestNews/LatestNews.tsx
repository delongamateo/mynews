import React from 'react'
import "./LatestNews.scss"
import LatestNewsItem from "./LatestNewsItem/LatestNewsItem"
import InfiniteScroll from 'react-infinite-scroll-component';

const articles = [
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
    {
        time: "12:30",
        title: "How to write better copy"
    },
]

const LatestNews = () => {
    return (
        <div className='latestNews'>
            <div className="titleContainer">
                <div className="bigDot">
                    <div className="smallDot" />
                </div>
                <p className='title'>Latest News</p>
            </div>
            <div id="latestNewsContainer">
                <InfiniteScroll
                    dataLength={articles.length}
                    next={() => console.log()}
                    loader={<h4>Loading...</h4>}
                    hasMore={true}
                    scrollableTarget="latestNewsContainer"
                >
                    {articles.map((article) => (
                        <LatestNewsItem article={article} />
                    ))}
                </InfiniteScroll>
            </div>
            <div className="seeAllContainer">
                <button className="seeAllNews">See all news</button>
            </div>
        </div>
    )
}

export default LatestNews