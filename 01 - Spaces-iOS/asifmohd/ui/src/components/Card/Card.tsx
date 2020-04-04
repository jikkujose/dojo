import React, { useEffect, useRef } from "react"
import { motion, useMotionValue } from "framer-motion"
import { Link } from "react-router-dom"
import "./Card.scss"

const Card: React.FC<{
  space
  isSelected: boolean
  onScroll: Function
}> = ({ space, isSelected, onScroll }) => {
  const imgRef = useRef(null)

  useEffect(() => {
    onScroll(imgRef.current)
  }, [onScroll])

  return (
    <div className="Card-container">
      <div className={`Card ${isSelected && "open"}`}>
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
      {!isSelected && <Link to={space.id} className={`Card-open-link`} />}
    </div>
  )
}

export default Card
