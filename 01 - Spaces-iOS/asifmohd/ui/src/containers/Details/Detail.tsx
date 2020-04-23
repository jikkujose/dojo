import React, { useContext } from "react"
import Flickity from "react-flickity-component"
import "./Detail.scss"
import spaces from "model/spaceItem.json"
import { motion, useInvertedScale } from "framer-motion"
import Info from "ui/CardInfo/Info"
import { openSpring, closeInertial } from "utils/animation"
import { flicktyVariants, infoVariants } from "utils/variants"
import { flickityOptions } from "utils/flickity-conf"
import { store } from "store/store"
import CloseBtn from "ui/CloseBtn/CloseBtn"
import { InfoType, Slide } from "model/interface"
import InnerCard from "components/InnerCard/InnerCard"

const Detail = ({ close }) => {
  const { route } = useContext(store).state
  const id = route.path?.params.id ?? 0
  const space = spaces[id]

  return (
    <>
      <CloseBtn close={close} />
      <Info
        title={space?.title}
        description={space?.description}
        {...infoProps}
      />
      <FlickityContainer>
        {spaces[id].slides.map((slide: Slide, i) => (
          <InnerCard slide={space.slides[i]} key={i} />
        ))}
      </FlickityContainer>
    </>
  )
}

const FlickityContainer = ({ children }) => {
  const inverted = useInvertedScale()
  return (
    <motion.div
      className="Flickity-container"
      variants={flicktyVariants}
      style={{ ...inverted }}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      transition={openSpring}
    >
      <Flickity
        className={"inner-carousel"}
        elementType={"div"}
        options={flickityOptions}
      >
        {children}
      </Flickity>
    </motion.div>
  )
}

export default Detail

const infoProps: Partial<InfoType> = {
  style: {
    title: {
      fontSize: 24,
      letterSpacing: 0.8,
      color: "#c0c0c0",
    },
    sub: {
      fontSize: 13,
      opacity: 0.8,
    },
  },
  isDescTitle: true,
  animation: {
    variants: infoVariants,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    transition: closeInertial,
  },
}
