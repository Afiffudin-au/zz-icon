import React from 'react'
import { useStylesModal } from '../../custom-hooks/useStylesModal/useStylesModal'
function ModalDetailPack({ handleClose }: any) {
  const classes = useStylesModal()

  return (
    <div className={classes.paper + ' ModalDetail'}>
      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default ModalDetailPack
