import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.svg';
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
    </div>
  </div>
)

export default Header
