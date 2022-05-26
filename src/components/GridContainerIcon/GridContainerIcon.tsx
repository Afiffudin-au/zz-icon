import React from 'react'
import styles from './GridContainerIcon.module.scss'
function GridContainerIcon({ children }: { children?: any }) {
  return <div className={styles.gridContainerIcon}>{children}</div>
}

export default GridContainerIcon
