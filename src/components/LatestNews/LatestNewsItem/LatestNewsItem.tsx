import { FC } from 'react'
import "./LatestNewsItem.scss"

type LatestNewsItemProps = {
  article: { time: string; title: string; }
}

const LatestNewsItem: FC<LatestNewsItemProps> = ({ article }) => {
  return (
    <div className="latestNewsItem">
      <p className='time'>{article.time}</p>
      <p className='title'>{article.title}</p>
    </div>
  )
}

export default LatestNewsItem