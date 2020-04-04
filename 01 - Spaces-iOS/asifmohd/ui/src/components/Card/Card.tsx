import React, { useEffect, useRef } from "react"
import "./Card.scss"

const Card: React.FC<{
  space
  onScroll: Function
}> = ({ space, onScroll }) => {
  const imgRef = useRef(null)

  useEffect(() => {
    onScroll(imgRef.current)
  }, [onScroll])

  return (
    <div className="Card-container">
      <div className="Card">
        <div className="Card-image">
          <img data-flickity-lazyload={space?.bg_image} alt="" ref={imgRef} />
          {/* <div className=""></div> */}
        </div>
        <div className="Card-info-wrapper">
          <div className="Card-info">
            <h2 className="Card-title">{space.title}</h2>
            <div className="Card-sub">
              {space.description.count +
                " " +
                space.description.type +
                (space.description.count > 1 && "s")}
            </div>
            {space.face_thumbs.map(
              (thumb, i) =>
                i < 3 && (
                  <span className={"Card-thumb Card-thumb__" + i} key={i}>
                    <img src={thumb.image} alt={thumb.name} />
                  </span>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
