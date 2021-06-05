import React from 'react'

import styles from './container.module.css'

const Container = ({ homepage, children }) => {
  return (
    <div style={homepage && { display: 'flex' }} className={styles.root}>
      {children}
    </div>
  )
}

export default Container
