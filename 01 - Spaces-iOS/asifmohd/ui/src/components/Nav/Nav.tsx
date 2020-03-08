import React from 'react';
import './Nav.scss';
import { navData } from './../../model/navdata';
import search from '../../search.svg';

const Nav = () => {
  return (
    <nav>
      <ul className="Nav-container">
        {navData.map((n, i) => (
          <li
            key={i}
            className={`Nav-list ${n.title === 'SPACES' ? 'Nav-active' : ''}`}
          >
            <a
              className={`Nav-item ${
                n.title === 'SPACES' ? 'Nav-active-text' : ''
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
  );
};
export default Nav;
