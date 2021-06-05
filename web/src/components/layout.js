import React from 'react'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle, subTitle }) => (
  <>
    <Header
      siteTitle={siteTitle}
      subTitle={subTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className={styles.content}>
      <div className={styles.mainContent}>{children}</div>
      {/* <div className={styles.sidebarContent}>
        <Sidebar />
      </div> */}
    </div>
    <Footer />
  </>
)

export default Layout
