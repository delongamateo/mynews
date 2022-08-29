import { useContext } from "react"
import "./ArticleDetail.scss"
import { MyNewsContext } from "../../Context/MyNewsContext"

const ArticleDetail = () => {
    const myNewsContext = useContext(MyNewsContext)
    const { article } = myNewsContext
    return (
        <div>
            <h3>{article?.title}</h3>
            <div>
                <img src={article?.multimedia[1].url} />
                <p>{article?.abstract}</p>
                <a href={article?.url}>Read full article...</a>
            </div>


        </div>
    )
}

export default ArticleDetail