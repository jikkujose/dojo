import React from "react"
import { motion, useInvertedScale } from "framer-motion"
import { ImageVariants } from "utils/variants"
import { closeSpring, openSpring } from "utils/animation"
import { CardImageType } from "model/interface"
import "./CardImage.scss"

const CardImage: React.FC<Partial<CardImageType>> = ({
  bgImage,
  imgRef,
  isSelected = false,
  animate,
}) => {
  const inverted = useInvertedScale()
  return (
    <motion.div
      className="Card-image"
      style={{ ...inverted, originX: 0, originY: 0 }}
      variants={ImageVariants}
      animate={animate && !isSelected ? "visible" : "hidden"}
      transition={isSelected ? openSpring : closeSpring}
    >
      <motion.img
        data-flickity-lazyload={bgImage}
        alt=""
        ref={imgRef}
        initial={false}
        transition={closeSpring}
      />
    </motion.div>
  )
}

export default CardImage
