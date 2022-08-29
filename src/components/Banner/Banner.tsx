import { useState } from 'react'
import "./Banner.scss"

const Banner = () => {
  const [displayBanner, setDisplayBanner] = useState<string>("displayBanner")

  return (
    <div className={`bannerContainer ${displayBanner}`}>
      <div className='bannerContainerWrap'>
        <div className='messageContainer'>
          <p className='firstMessage'>Make MyNews your homepage</p>
          <p className='secondMessage'>Every day discover what's trending on the internet!</p>
        </div>
        <div className='buttonsContainer'>
          <button className='getButton'>GET</button>
          <button onClick={() => setDisplayBanner("")} className='noButton'>No, thanks</button>
        </div>

      </div>

    </div>
  )
}

export default Banner;
