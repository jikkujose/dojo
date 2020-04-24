import React, { Props } from "react"
import "./Info.scss"
import { motion, AnimatePresence } from "framer-motion"
import { infoWrapperVariants } from "utils/variants"
import { InfoType } from "model/interface"

const InfoWrapper = (props: Props<{}>) => (
  <div className="Card-info-wrapper">
    <motion.div
      className="Card-info"
      variants={infoWrapperVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
    >
      {props.children}
    </motion.div>
  </div>
)

const TitleWrapper = (props: Props<{}>) => (
  <div className="Card-desc-title">
    <AnimatePresence exitBeforeEnter>{props.children}</AnimatePresence>
  </div>
)

const Info: React.FC<Partial<InfoType>> = ({
  title,
  description,
  style,
  isDescTitle = false,
  thumbs = null,
  animation,
}) => {
  const content = (
    <>
      <motion.div {...animation}>
        <h2 className="Card-title" style={style?.title}>
          {title}
        </h2>
        <div className="Card-sub" style={style?.sub}>
          {`${description?.count} ${description?.type}${
            description && description?.count > 1 && "s"
          }`}
        </div>
      </motion.div>
      {!!thumbs &&
        thumbs.map(
          (thumb, i) =>
            i < 3 && (
              <span className={"Card-thumb Card-thumb__" + i} key={i}>
                <img src={thumb.image} alt={thumb.name} />
              </span>
            )
        )}
    </>
  )

  return !isDescTitle ? (
    <InfoWrapper>{content}</InfoWrapper>
  ) : (
    <TitleWrapper>{content}</TitleWrapper>
  )
}

export default Info
