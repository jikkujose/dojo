import React, { useEffect, useRef, useContext, memo } from "react"
import {
  motion,
  useInvertedScale,
  AnimatePresence,
  useMotionValue,
} from "framer-motion"
import { Link } from "react-router-dom"
import "./Card.scss"
import { openSpring, closeSpring, closeInertial } from "utils/animation"
import { store } from "store/store"
import { useInvertedBorderRadius } from "utils/use-inverted-scale"
import { CloseButton } from "icons/CloseButton"
import Info from "./CardInfo/Info"
import Detail from "./CardDetail/Detail"
import { infoVariants, ImageVariants } from "utils/variants"

const Card: React.FC<{
  space
  isSelected: boolean
  onScroll: Function
  translateX: number
  selectedIndex: boolean
  navBarToggle: Function
  close: Function
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
    close,
  }) => {
    const { dispatch } = useContext(store)
    const imgRef = useRef(null)
    const zIndex = useMotionValue(isSelected ? 2 : 0)
    const inverted = useInvertedBorderRadius(isSelected ? 0 : 10)
    const invertedImg = useInvertedScale()
    const openInfoStyle = {
      title: {
        fontSize: 24,
        letterSpacing: 0.8,
        color: "#c0c0c0",
      },
      sub: {
        fontSize: 13,
        opacity: 0.8,
      },
    }

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
      const scaleX = Math.round(latest.scaleX * 100) / 100
      if (isSelected) {
        zIndex.set(2)
        navBarToggle(false)
        // if()
      } else {
        if (!isSelected && scaleX < 1.01) {
          zIndex.set(0)
        }
        if (scaleX < 1.2 && scaleX > 1) {
          navBarToggle(true)
        }
      }
    }

    return (
      <motion.div className="Card-container">
        <motion.div
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
            // onAnimationComplete={}
          >
            <motion.div
              className="Card-image"
              // initial={false}
              variants={ImageVariants}
              style={{ ...invertedImg, originX: 0, originY: 0 }}
              animate={!isSelected ? "visible" : "hidden"}
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
            {isSelected && (
              <>
                <CloseButton close={close} />
                <Detail />
                <div className="Card-desc-title">
                  <AnimatePresence exitBeforeEnter>
                    <Info
                      title={space.title}
                      description={space.description}
                      style={openInfoStyle}
                      variants={infoVariants}
                      initial={"hidden"}
                      animate={"visible"}
                      exit={"hidden"}
                      transition={closeInertial}
                    />
                  </AnimatePresence>
                </div>
              </>
            )}
            {!isSelected && (
              <div className="Card-info-wrapper">
                <motion.div
                  className="Card-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                  exit={{ opacity: 0 }}
                >
                  <Info
                    title={space.title}
                    description={space.description}
                    style={{}}
                  />
                  {space.face_thumbs.map(
                    (thumb, i) =>
                      i < 3 && (
                        <span className={"Card-thumb Card-thumb__" + i} key={i}>
                          <img src={thumb.image} alt={thumb.name} />
                        </span>
                      )
                  )}
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
        {!isSelected && selectedIndex && (
          <Link to={space.id} className={`Card-open-link`} />
        )}
      </motion.div>
    )
  },
  (prev, next) =>
    prev.isSelected === next.isSelected &&
    prev.selectedIndex === next.selectedIndex &&
    prev.translateX === next.translateX
)

export default Card
