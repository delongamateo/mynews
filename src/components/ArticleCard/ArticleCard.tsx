import { FC, useState, useEffect, useContext } from "react"
import "./ArticleCard.scss"
import { Article } from "../../types/types"
import placeholderImage from "../../assets/placeholderImage.png"
import { MdFavorite, MdFavoriteBorder } from "react-icons/md"
import { MyNewsContext, MyNewsInterface } from "../../Context/MyNewsContext"

type ArticleCardProps = {
    article: Article
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    const { title, section, byline, multimedia } = article
    const myNewsContext = useContext(MyNewsContext)
    const { handleFavoriteArticles, checkFavoritesArticles, favoriteArticles, articles, handleArticleDetail } = myNewsContext as MyNewsInterface;
    const [isFavorite, setIsFavorite] = useState<number>(-1)

    useEffect(() => {
        setIsFavorite(checkFavoritesArticles(article))
    }, [favoriteArticles, articles, article, checkFavoritesArticles])

    const image = multimedia ? multimedia[1].url : placeholderImage

    return (
        <div className="articleCard" onClick={() => handleArticleDetail(article)}>
            <div className="imageContainer">
                <img src={image} alt="article" className="articleImage" />
                <button onClick={(e) => { e.stopPropagation(); handleFavoriteArticles(article) }} className="favoriteButton">
                    {isFavorite >= 0 ? <MdFavorite /> : <MdFavoriteBorder />}
                </button>
            </div>
            <div className="titleAndAutorContainer">
                <div className="titleContainer">
                    <p className="categoryNameSmall">{section.toUpperCase()}</p>
                    <p className="title">{title}</p>
                </div>
                <p className="autor">{byline}</p>
            </div>

        </div>
    )
}

export default ArticleCard