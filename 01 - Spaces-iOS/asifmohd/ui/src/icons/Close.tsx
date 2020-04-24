import * as React from "react"
import { motion } from "framer-motion"

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsla(360, 100%, 100%, 0.6)"
    strokeLinecap="round"
    {...props}
  />
)

export default Path
