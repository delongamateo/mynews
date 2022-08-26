import { createContext, FC, SetStateAction, useState, Dispatch, useEffect } from "react";
import { Article } from "../types/types";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export interface MyNewsInterface {
  favoriteArticles: Article[];
  setFavoriteArticles: Dispatch<SetStateAction<Article[]>>
  selectedCategory: string;
  articles: Article[];
  fetchArticles: (category: string) => void;
  handleFavoriteArticles: (article: Article) => void;
  checkFavoritesArticles: (article: Article) => number;
}

export const MyNewsContext = createContext<MyNewsInterface>(undefined as any)

type MyNewsProviderProps = {
  children: JSX.Element
}

const MyNewsProvider: FC<MyNewsProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("home")
  const [favoriteArticles, setFavoriteArticles] = useState<Article[]>([])
  const [articles, setArticles] = useState<Article[]>([])

  const navigate = useNavigate()

  const apiKey = "ASGupdl6gvvEGxabXeEe8vnqmA7XlPuZ"

  const fetchArticles = (category: string) => {
    setSelectedCategory(category)
    if (category === "favorites") {
      navigate("/favorites")
    } else {
      axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${apiKey}`)
        .then(
          (response) => setArticles(response.data.results)
        ).then(
          () => navigate(`/${category !== "home" ? category : ""}`)
        )
        .catch(
          (error) => console.log(error)
        )
    }
  }

  useEffect(() => {
    fetchArticles(selectedCategory)
  }, [])

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

  return (
    <MyNewsContext.Provider value={{ articles, selectedCategory, fetchArticles, favoriteArticles, setFavoriteArticles, handleFavoriteArticles, checkFavoritesArticles }}>
      {children}
    </MyNewsContext.Provider>
  )
}

export default MyNewsProvider;
