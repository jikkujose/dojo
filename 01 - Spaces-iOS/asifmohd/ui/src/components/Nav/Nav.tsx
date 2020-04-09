import React, { useContext } from "react"
import "./Nav.scss"
import { navData } from "model/navdata"
import Search from "icons/Search"
import { motion } from "framer-motion"
import { store } from "store/store"
import { openSpring, closeSpring } from "utils/animation"
import { navBarVariants } from "utils/variants"

const Nav = ({ selected = 0 }) => {
  const { state } = useContext(store)

  return (
    <motion.nav
      initial="false"
      animate={state.slide.isSelected ? "hidden" : "visible"}
      transition={state.slide.isSelected ? openSpring : closeSpring}
      variants={navBarVariants}
    >
      <ul className="Nav-container">
        {navData.map((n, i) => (
          <li
            key={i}
            className={`Nav-list ${i === selected ? "Nav-active" : ""}`}
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
