import { useContext } from "react"
import "./ArticleDetail.scss"
import { MyNewsContext } from "../../Context/MyNewsContext"

const ArticleDetail = () => {
    const myNewsContext = useContext(MyNewsContext)
    const { article } = myNewsContext
    return (
        <div className="articleDetail">
            <h3 className="detailTitle">{article?.title}</h3>
            <div className="contentContainer">
                <img src={article?.multimedia[1].url} className="contentImage"/>
                <p>{article?.abstract}<a href={article?.url}>Read full article...</a></p>
            </div>
        </div>
    )
}

export default ArticleDetail