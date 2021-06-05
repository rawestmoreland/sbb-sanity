import React from 'react'
import Container from './container'
import brewfather from '../images/logo_full.png'

import styles from './sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.sidebarContent}>
      <div className={styles.widgetContainer}>
        <h2>BEERS IN PLANNING</h2>
        <ul>
          <li>Light American Lager</li>
          <li>Citra NEIPA</li>
        </ul>
      </div>
      <div className={styles.widgetContainer}>
        <h2>TRY BREWFATHER</h2>
        <a href="https://brewfather.app/?via=smallbatchbru">
          <img src={brewfather} alt="brewfather logo" height="350" width="350" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
