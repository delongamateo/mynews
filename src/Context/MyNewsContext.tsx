import { createContext, FC, SetStateAction, useState, Dispatch, useEffect } from "react";
import { Article, SearchArticle } from "../types/types";
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
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchArticles: Article[];
  displayMenu: string;
  setDisplayMenu: Dispatch<SetStateAction<string>>;
  handleSearch: (term: string) => void;
  searchQuery: string;
  article: Article | undefined;
  handleArticleDetail: (article: Article) => void;

}

export const MyNewsContext = createContext<MyNewsInterface>(undefined as any)

type MyNewsProviderProps = {
  children: JSX.Element
}

const MyNewsProvider: FC<MyNewsProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("home")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [favoriteArticles, setFavoriteArticles] = useState<Article[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [searchArticles, setSearchArticles] = useState<Article[]>([])
  const [displayMenu, setDisplayMenu] = useState<string>("none")
  const [article, setArticle] = useState<Article>()

  const navigate = useNavigate()

  const NYTapiKey = "ASGupdl6gvvEGxabXeEe8vnqmA7XlPuZ"
  const newsAPIkey = "32a31292b4574b8d8caf392fd5bfdbf4"

  const fetchArticles = (category: string) => {
    setSelectedCategory(category)
    if (category === "favorites") {
      navigate("/favorites")
    } else if (category === "search") {
      /* axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${NYTapiKey}`)
        .then(
          (response) => setSearchArticles(response.data.response.docs)
        ).then(
          () => navigate(`/search/${searchQuery}`)
        )
        .catch(
          (error) => console.log(error)
        ) */
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
    setDisplayMenu("none")
  }

  const handleSearch = (term: string) => {
    let updatedArticles = searchArticles;
    updatedArticles = updatedArticles.filter((article) => { return article.title.toLowerCase().indexOf(term.toLowerCase()) !== -1 }
    )
    setArticles(updatedArticles)
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

  const handleArticleDetail = (article: Article) => {
    setArticle(article)
    navigate(`/${selectedCategory}/${article.published_date}`)
  }

  return (
    <MyNewsContext.Provider 
      value={{ 
        articles, 
        selectedCategory, 
        fetchArticles, 
        favoriteArticles, 
        setFavoriteArticles, 
        handleFavoriteArticles, 
        checkFavoritesArticles, 
        setSearchQuery, 
        searchArticles, 
        displayMenu, 
        setDisplayMenu, 
        handleSearch, 
        searchQuery,
        article,
        handleArticleDetail
      }}
    >
      {children}
    </MyNewsContext.Provider>
  )
}

export default MyNewsProvider;
