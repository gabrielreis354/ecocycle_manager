import './index.scss'
import { useState } from "react"
import SvgPlay from "../SvgPlay"
import Thumb from "../../../public/images/thumb.png"

function SectionVideo ( ) {
  const [isPaused, setIsPaused] = useState(true)

  const handleClick = function () {
    setIsPaused(false)
  }

  return (
    <div className="section-video">
      <div className="section-heading">
          <div className="section-heading-left">
            <div className="section-heading-text">
              Vídeo
              <span></span>
            </div>
            <div className="section-heading-title">Veja nossa apresentação!</div>
          </div>

        </div>
      <div onClick={handleClick} className='video-wrapper' >


        <div className='video'>
          {!isPaused ? (
                <iframe
                    src={`https://www.youtube.com/embed/tPxkAXoLz9Y?autoplay=1`}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={"Vídeo pitch global solution Green Energy"}
                >
                </iframe>
            ) : (
                <>
                    <img src={Thumb} alt="thumbnail"/>

                    <div className='video-overlay'>
                        <SvgPlay/>
                    </div>
                </>
            )
          }
        </div>

      </div>
    </div>
  )
}

export default SectionVideo