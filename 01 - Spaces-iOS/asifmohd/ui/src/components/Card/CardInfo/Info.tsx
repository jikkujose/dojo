import React from "react"
import "./Info.scss"
import { motion } from "framer-motion"

const Info = ({ title, description, style, ...animation }) => (
  <motion.div {...animation}>
    <h2 className="Card-title" style={style?.title}>
      {title}
    </h2>
    <div className="Card-sub" style={style?.sub}>
      {`${description?.count} ${description?.type}${
        description?.count > 1 && "s"
      }`}
    </div>
  </motion.div>
)

export default Info
