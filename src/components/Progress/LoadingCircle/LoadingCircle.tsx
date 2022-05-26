import { CircularProgress } from '@material-ui/core'
import React from 'react'
import styles from './LoadingCircle.module.scss'
function LoadingCircle() {
  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  )
}

export default LoadingCircle
