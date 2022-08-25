import "./ArticleCard.scss"

const ArticleCard = () => {
    return (
        <div className="articleCard">
            <div className="image" />
            <div className="titleContainer">
                <div>
                <p className="category">TECH</p>
                <p className="title">Article title</p>
                </div>
                <p className="autor">Article Autor</p>
            </div>
            
        </div>
    )
}

export default ArticleCard