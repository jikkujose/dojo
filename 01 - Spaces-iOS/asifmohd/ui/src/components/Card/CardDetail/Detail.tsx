import React from "react"
import Flickity from "react-flickity-component"
import "./Detail.scss"
import { motion, useInvertedScale } from "framer-motion"
import Info from "../CardInfo/Info"
import { closeSpring, openSpring } from "utils/animation"
import { flicktyVariants } from "utils/variants"
import { flickityOptions } from "utils/flickity-conf"

const Detail = () => {
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
        {[0, 1, 2].map((space, i) => (
          <InnerCard space={space} key={space} />
        ))}
      </Flickity>
    </motion.div>
  )
}

const InnerCard = ({ space }) => {
  return (
    <div className="Card-container">
      <div className="Card">
        <div className="Card-content">
          <div className="Card-image">
            <motion.img
              data-flickity-lazyload={
                "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80"
              }
              alt=""
              initial={false}
              transition={closeSpring}
            />
          </div>
          <div className="Card-info-wrapper">
            <motion.div
              className="Card-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <Info
                title={"Lorm Ipsum"}
                description={space.description}
                style={{}}
              />
              {/* {space.face_thumbs.map(
                (thumb, i) =>
                  i < 3 && (
                    <span className={"Card-thumb Card-thumb__" + i} key={i}>
                      <img src={thumb.image} alt={thumb.name} />
                    </span>
                  )
              )} */}
            </motion.div>
          </div>
        </div>
      </div>
      {/* {!isSelected && selectedIndex && (
        <Link to={space.id} className={`Card-open-link`} />
      )} */}
    </div>
  )
}

export default Detail
