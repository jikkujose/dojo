import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { closeInertial } from "utils/animation"
import { closeBtnVariants } from "utils/variants"

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsla(360, 100%, 100%, 0.6)"
    strokeLinecap="round"
    {...props}
  />
)

export const CloseButton = ({ close }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button
        onClick={close}
        className="close"
        variants={closeBtnVariants}
        initial={"hidden"}
        animate={"visible"}
        exit={"hidden"}
        transition={closeInertial}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path d="M 3 16.5 L 17 2.5" />
          <Path d="M 3 2.5 L 17 16.346" />
        </svg>
      </motion.button>
    </AnimatePresence>
  )
}
