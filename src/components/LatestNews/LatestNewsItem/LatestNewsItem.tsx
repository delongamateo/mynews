import { FC } from 'react'
import "./LatestNewsItem.scss"
import { LatestNewsArticle } from "../../../types/types";

type LatestNewsItemProps = {
  article: LatestNewsArticle;
}

const LatestNewsItem: FC<LatestNewsItemProps> = ({ article }) => {
  const { title, publishedAt } = article;
  const hours = new Date(publishedAt).getHours()
  const minutes = new Date(publishedAt).getMinutes()

  return (
    <div className="latestNewsItem">
      <p className='time'>{`${hours}:${minutes}`}</p>
      <p className='title'>{title}</p>
    </div>
  )
}

export default LatestNewsItem