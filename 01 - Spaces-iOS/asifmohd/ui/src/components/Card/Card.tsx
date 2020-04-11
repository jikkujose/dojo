import React, { useEffect, useRef, useContext, memo } from "react"
import {
  motion,
  useInvertedScale,
  AnimatePresence,
  useMotionValue,
} from "framer-motion"
import { Link } from "react-router-dom"
import "./Card.scss"
import { openSpring, closeSpring } from "utils/animation"
import { store } from "store/store"
import { useInvertedBorderRadius } from "utils/use-inverted-scale"

const Card: React.FC<{
  space
  isSelected: boolean
  onScroll: Function
  translateX: number
  selectedIndex: boolean
  navBarToggle: Function
  i: number
}> = memo(
  ({
    space,
    isSelected,
    onScroll,
    translateX,
    selectedIndex,
    i,
    navBarToggle,
  }) => {
    const { dispatch } = useContext(store)
    const imgRef = useRef(null)
    const zIndex = useMotionValue(isSelected ? 2 : 0)
    const inverted = useInvertedBorderRadius(isSelected ? 0 : 10)
    const invertedImg = useInvertedScale()

    useEffect(() => {
      onScroll(imgRef.current)
    }, [onScroll])

    useEffect(() => {
      dispatch({
        type: "SET CARD STATE",
        payload: { isSelected, selectedIndex },
      })
    }, [dispatch, isSelected, selectedIndex])

    const checkZIndex = (latest) => {
      const rond = Math.round(latest.scaleX * 100) / 100
      if (isSelected) {
        zIndex.set(2)
        if (selectedIndex && rond >= 0.7 && rond <= 0.72) {
          navBarToggle(false)
        }
      } else {
        if (!isSelected && latest.scaleX < 1.01) {
          zIndex.set(0)
        }
        if (rond <= 1.5 && rond >= 1.4) {
          navBarToggle(true)
        }
      }
    }

    return (
      <AnimatePresence>
        <div className="Card-container">
          <div
            className={`Card ${isSelected && "open"}`}
            style={{
              transform: isSelected ? `translateX(${-1 * translateX}%)` : "",
            }}
          >
            <motion.div
              className="Card-content"
              style={{ ...inverted, zIndex }}
              layoutTransition={isSelected ? openSpring : closeSpring}
              onUpdate={checkZIndex}
            >
              <motion.div
                className="Card-image"
                initial={false}
                style={{ ...invertedImg, originX: 0, originY: 0 }}
                animate={!isSelected ? { height: 304 } : { height: 400 }}
                transition={isSelected ? openSpring : closeSpring}
              >
                <motion.img
                  data-flickity-lazyload={space?.bg_image}
                  alt=""
                  ref={imgRef}
                  initial={false}
                  transition={closeSpring}
                />
                {/* <div className=""></div> */}
              </motion.div>
              <div className="Card-info-wrapper">
                {!isSelected && (
                  <motion.div
                    className="Card-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.6 } }}
                    exit={{ opacity: 0 }}
                  >
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
                          <span
                            className={"Card-thumb Card-thumb__" + i}
                            key={i}
                          >
                            <img src={thumb.image} alt={thumb.name} />
                          </span>
                        )
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
          {!isSelected && selectedIndex && (
            <Link to={space.id} className={`Card-open-link`} />
          )}
        </div>
      </AnimatePresence>
    )
  },
  (prev, next) =>
    prev.isSelected === next.isSelected &&
    prev.selectedIndex === next.selectedIndex &&
    prev.translateX === next.translateX
)

export default Card
