import { Link } from 'gatsby'
import React from 'react'
import Icon from './icon'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, subTitle }) => (
  <div className={styles.root}>
    <div className={styles.topTitle}>
      <h1 className={styles.title}>{siteTitle}</h1>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol="hamburger" />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              <Link to="/" activeStyle={{ fontWeight: 'bold' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes/" activeStyle={{ fontWeight: 'bold' }}>
                Recipes
              </Link>
            <li>
              <Link to="/archive/" activeStyle={{ fontWeight: 'bold' }}>
                Archive
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
)

export default Header
