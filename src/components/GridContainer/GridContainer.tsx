import React from 'react'
import styles from './GridContainer.module.scss'
function GridContainer({ children }: { children?: any }) {
  return <div className={styles.gridContainer}>{children}</div>
}

export default GridContainer
