import React from "react"
import "./Nav.scss"
import { navData } from "./../../model/navdata"
import search from "../../search.svg"

const Nav = () => (
  <nav>
    <ul className="Nav-container">
      {navData.map((n, i) => (
        <li
          key={i}
          className={`Nav-list ${n.title === "spaces" ? "Nav-active" : ""}`}
        >
          <a
            className={`Nav-item ${
              n.title === "spaces" ? "Nav-active-text" : ""
            }`}
            href={n.href}
          >
            {n.title}
          </a>
        </li>
      ))}
      <li className="Nav-list">
        <img src={search} alt="search" />
      </li>
    </ul>
  </nav>
)

export default Nav
