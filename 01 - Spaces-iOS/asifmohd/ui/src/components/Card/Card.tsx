import React, { useEffect, useRef, useContext, memo } from "react"
import { motion, useMotionValue } from "framer-motion"
import { Link } from "react-router-dom"
import "./Card.scss"
import { openSpring, closeSpring } from "utils/animation"
import { store } from "store/store"
import { useInvertedBorderRadius } from "utils/use-inverted-scale"
import Info from "ui/CardInfo/Info"
import Detail from "containers/Details/Detail"
import { CardType } from "model/interface"
import CardImage from "ui/CardImage/CardImage"

const Card: React.FC<CardType> = memo(
  ({
    space,
    isSelected = false,
    onScroll,
    translateX,
    selectedIndex,
    navBarToggle,
    close,
  }) => {
    const { dispatch } = useContext(store)
    const imgRef = useRef(null)
    const zIndex = useMotionValue(isSelected ? 2 : 0)
    const inverted = useInvertedBorderRadius(isSelected ? 0 : 10)

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
          >
            <CardImage
              bgImage={space?.bg_image}
              isSelected={isSelected}
              imgRef={imgRef}
              animate={true}
            />
            {isSelected ? (
              <Detail close={close} />
            ) : (
              <Info
                title={space?.title}
                description={space?.description}
                thumbs={space?.face_thumbs}
                style={{}}
                animation={{}}
              />
            )}
          </motion.div>
        </motion.div>
        {!isSelected && selectedIndex && space && (
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
