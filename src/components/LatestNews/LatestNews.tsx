import { useEffect, useState } from 'react'
import "./LatestNews.scss"
import LatestNewsItem from "./LatestNewsItem/LatestNewsItem"
import InfiniteScroll from 'react-infinite-scroll-component';
import { MdKeyboardArrowRight } from "react-icons/md"
import axios from "axios"
import { LatestNewsType, LatestNewsArticle } from "../../types/types";

const LatestNews = () => {
    const [latestNews, setLatestNews] = useState<LatestNewsType>()
    const [latestArticles, setLatestArticles] = useState<LatestNewsArticle[]>([])
    const [page, setPage] = useState<number>(1)

    const newsAPIkey = "32a31292b4574b8d8caf392fd5bfdbf4"

    const fetchLatestNews = (refresh: boolean) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIkey}&pageSize=10&page=${page}`)
            .then(
                (response) => {
                    setLatestNews(response.data)
                    setLatestArticles((prev) => {
                        if (refresh) {
                            return [...response.data.articles]
                        } else {
                            return [...prev, ...response.data.articles]
                        }
                    })
                }
            )
            .catch(
                (error) => console.log(error)
            )
    }

    useEffect(() => {
        fetchLatestNews(true)
    }, [])

    const setNext = () => {
        setPage((prev) => prev + 1);
        fetchLatestNews(false)
    }

    const refresetLatestNews = () => {
        setPage(1);
        fetchLatestNews(true)
    }

    return (
        <div className='latestNews'>
            <div className="titleContainer">
                <div className="bigDot">
                    <div className="smallDot" />
                </div>
                <p className='latestNewsTitle'>Latest News</p>
            </div>
            <div id="latestNewsContainer">
                <InfiniteScroll
                    dataLength={latestArticles.length}
                    next={() => setNext()}
                    loader={<h4>Loading...</h4>}
                    hasMore={Math.ceil((latestNews?.totalResults ?? 0) / 10) > page}
                    refreshFunction={() => refresetLatestNews()}
                    pullDownToRefresh
                    pullDownToRefreshThreshold={100}
                    scrollableTarget="latestNewsContainer"
                    className="infiniteScroll"
                >
                    {latestArticles.map((article, i) => (
                        <LatestNewsItem article={article} key={i} />
                    ))}
                </InfiniteScroll>
            </div>
            <div className="seeAllContainer">
                <button className="seeAllNews">See all news <MdKeyboardArrowRight /></button>
            </div>
        </div>
    )
}

export default LatestNews