import React from 'react'
import styles from 'ModalDetailIcon.module.scss'
import { useStylesModal } from '../../custom-hooks/useStylesModal/useStylesModal'
function ModalDetailIcon({ handleClose }: any) {
  const classes = useStylesModal()
  return (
    <div className={classes.paper + ' ModalDetail'}>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default ModalDetailIcon
