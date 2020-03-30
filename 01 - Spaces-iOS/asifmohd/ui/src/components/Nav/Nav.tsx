import React from "react"
import "./Nav.scss"
import { navData } from "model/navdata"
import Search from "icons/Search"

const Nav = (selected: number = 0) => (
  <nav>
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
  </nav>
)

export default Nav
