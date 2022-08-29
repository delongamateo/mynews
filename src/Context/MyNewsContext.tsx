import { createContext, FC, useState, useEffect, useCallback } from "react";
import { Article } from "../types/types";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export interface MyNewsInterface {
  fetchArticles: (category: string) => void;
  selectedCategory: string;

  searchArticles: Article[];
  articles: Article[];
  handleSearch: (term: string) => void;

  favoriteArticles: Article[];

  handleFavoriteArticles: (article: Article) => void;
  checkFavoritesArticles: (article: Article) => number;

  displayMobileMenu: string;
  handleMobileMenu: (display: string) => void;

  article: Article | undefined;
  handleArticleDetail: (article: Article) => void;

}

export const MyNewsContext = createContext<MyNewsInterface>({} as MyNewsInterface)

type MyNewsProviderProps = {
  children: JSX.Element
}

const MyNewsProvider: FC<MyNewsProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("home")
  const [favoriteArticles, setFavoriteArticles] = useState<Article[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [searchArticles, setSearchArticles] = useState<Article[]>([])
  const [displayMobileMenu, setDisplayMobileMenu] = useState<string>("none")
  const [article, setArticle] = useState<Article>()

  const navigate = useNavigate()

  const NYTapiKey = "ASGupdl6gvvEGxabXeEe8vnqmA7XlPuZ"

  const fetchArticles = useCallback((category: string) => {

    setSelectedCategory(category)

    if (category === "favorites") {
      navigate("/favorites")
    } else {
      axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${NYTapiKey}`)
        .then(
          (response) => {
            setArticles(response.data.results)
            setSearchArticles(response.data.results)
          }
        ).then(
          () => navigate(`/${category !== "home" ? category : ""}`)
        )
        .catch(
          (error) => console.log(error)
        )
    }

    setDisplayMobileMenu("none")
  }, [navigate])

  useEffect(() => {
    fetchArticles(selectedCategory)
  }, [fetchArticles, selectedCategory])

  const handleSearch = (term: string) => {
    let updatedArticles = searchArticles;
    updatedArticles = updatedArticles.filter((article) => { return article.title.toLowerCase().indexOf(term.toLowerCase()) !== -1 }
    )
    setArticles(updatedArticles)
  }

  const checkFavoritesArticles = (article: Article) => {
    const isFavorite = favoriteArticles.findIndex((favoriteArticle) => favoriteArticle.title === article.title)
    return isFavorite;
  }

  const handleFavoriteArticles = (article: Article) => {
    const isFavorite = checkFavoritesArticles(article)
    if (isFavorite >= 0) {
      setFavoriteArticles((prev) => prev.filter((_, i) => i !== isFavorite))
    } else {
      setFavoriteArticles((prev) => [...prev, article])
    }
  }

  const handleArticleDetail = (article: Article) => {
    setArticle(article)
    navigate(`/${selectedCategory}/${article.published_date}`)
  }

  const handleMobileMenu = (display: string) => {
    setDisplayMobileMenu(display)
  }

  return (
    <MyNewsContext.Provider
      value={{
        articles,
        selectedCategory,
        fetchArticles,
        favoriteArticles,
        handleFavoriteArticles,
        checkFavoritesArticles,
        searchArticles,
        displayMobileMenu,
        handleMobileMenu,
        handleSearch,
        article,
        handleArticleDetail
      }}
    >
      {children}
    </MyNewsContext.Provider>
  )
}

export default MyNewsProvider;
