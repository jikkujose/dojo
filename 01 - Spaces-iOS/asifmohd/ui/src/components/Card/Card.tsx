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
}> = memo(
  ({ space, isSelected, onScroll, translateX = 20.71, selectedIndex }) => {
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
      if (isSelected) {
        zIndex.set(2)
      }
      if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0)
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
                  // animate={isSelected ? { scale: 3.5 } : { scale: 1.3 }}
                  transition={closeSpring}
                />
                {/* <div className=""></div> */}
              </motion.div>
              <div
                className="Card-info-wrapper"
                // animate={!isSelected ? { height: 34 } : { height: "50%" }}
                // transition={isSelected ? openSpring : closeSpring}
              >
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
