import React from 'react'

import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.siteInfo}>
        &copy; {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a>{' '}
        &amp;
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  </footer>
)

export default Footer
