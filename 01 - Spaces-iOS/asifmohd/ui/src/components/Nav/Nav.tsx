import React, { useState } from "react"
import "./Nav.scss"
import { navData } from "model/navdata"
import Search from "icons/Search"
import { motion } from "framer-motion"

const variants = {
  hidden: {
    y: -100,
    transition: {
      delay: 1,
    },
  },
  visible: { y: 0 },
}

const Nav = ({ selected = 0 }) => {
  const [checker, setChecker] = useState(false)
  console.log(checker)
  return (
    <motion.nav
      initial="false"
      animate={checker ? "hidden" : "visible"}
      variants={variants}
    >
      <ul className="Nav-container">
        {navData.map((n, i) => (
          <li
            key={i}
            className={`Nav-list ${i === selected ? "Nav-active" : ""}`}
            onClick={() => setChecker(true)}
          >
            <a
              className={`Nav-item ${i === selected ? "Nav-active-text" : ""}`}
              href={n.href}
            >
              {n.title}
            </a>
          </li>
        ))}
        <li className="Nav-list">
          <Search />
        </li>
      </ul>
    </motion.nav>
  )
}

export default Nav
