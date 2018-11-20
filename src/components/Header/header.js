import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <div className={styles.headerWrapper}>
    <div className={styles.headerContainer}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <h3>elliot betancourt</h3>
        </Link>
      </h1>
      <div>
        <input className={styles.menuToggle} id="menu-toggle" type="checkbox" />
        <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
          <span>
            <div className={styles.menuButton} />
          </span>
        </label>
        <ul className={styles.menu}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/now">Now</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/uses">Uses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
