import React, { useState } from "react"
import "./TabBar.scss"
import Diamonds from "icons/Diamonds"
import Folder from "icons/Folder"
import Inbox from "icons/Inbox"
import User from "icons/User"
import { motion } from "framer-motion"

const variants = {
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      delay: 3,
    },
    transitionEnd: {
      display: "none",
    },
  },
  visible: { y: 0 },
}
const TabBar = () => {
  const [checker, setChecker] = useState(false)
  return (
    <motion.footer
      initial="false"
      animate={checker ? "hidden" : "visible"}
      variants={variants}
    >
      <div className="Footer-contianer" onClick={() => setChecker(true)}>
        <Diamonds />
        <Folder />
        <Inbox />
        <User />
      </div>
    </motion.footer>
  )
}

export default TabBar
