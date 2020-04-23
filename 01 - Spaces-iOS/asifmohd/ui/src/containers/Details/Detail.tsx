import React, { useContext } from "react"
import Flickity from "react-flickity-component"
import "./Detail.scss"
import spaces from "model/spaceItem.json"
import { motion, useInvertedScale } from "framer-motion"
import Info from "ui/CardInfo/Info"
import { openSpring, closeInertial } from "utils/animation"
import { flicktyVariants, infoVariants } from "utils/variants"
import { flickityOptions } from "utils/flickity-conf"
import Card from "components/Card/Card"
import { store } from "store/store"
import CloseBtn from "ui/CloseBtn/CloseBtn"
import { InfoType } from "model/interface"
import CardImage from "ui/CardImage/CardImage"

const Detail = ({ close }) => {
  const { state } = useContext(store)
  const id = +state.route.path
  const space = spaces[id]

  return (
    <>
      <CloseBtn close={close} />
      <Info
        title={space.title}
        description={space.description}
        {...infoProps}
      />
      <FlickityContainer>
        {spaces[id].slides.map((slide, i) => (
          <Card
            slide={slide}
            isDetail={true}
            key={i}
            isSelected={false}
            translateX={0}
          />
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

const InnerCard = ({ space }) => {
  return (
    <div className="Card-container">
      <div className="Card">
        <div className="Card-content">
          <CardImage bgImage={space?.bg_image} animate={false} />
          <Info
            title={"Lorm Ipsum"}
            description={space.description}
            style={{}}
          />
        </div>
      </div>
    </div>
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
