import {FC} from 'react'
import "./Banner.scss"

const Banner = () => {
  return (
    <div className='bannerContainer'>
        <div className='bannerContainerWrap'>
            <div className='messageContainer'>
                <p className='firstMessage'>Make MyNews your homepage</p>
                <p className='secondMessage'>Every day discover what's trending on the internet!</p>
            </div>
            <div className='buttonsContainer'>
                <button className='getButton'>GET</button>
                <button className='noButton'>No, thanks</button>
            </div>
           
        </div>
        
    </div>
  )
}

export default Banner;
