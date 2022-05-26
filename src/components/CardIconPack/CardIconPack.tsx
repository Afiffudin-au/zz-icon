import React, { useState } from 'react'
import { useGetIconPackDetail } from '../../custom-hooks/useGetIconPackDetail/useGetIconPackDetail'
import { useAppSelector } from '../../redux/app/hooks'
import { selectTokenBlocks } from '../../redux/features/icon/iconSlice'
import styles from './CardIconPack.module.scss'
import ModalDetailPack from '../ModalDetailPack/ModalDetailPack'
import { Modal } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
interface CardIconPacksItems {
  image: string
  numberOfIcons: number
  description: string
  id: number
}
function CardIconPacks({
  image,
  numberOfIcons,
  description,
  id,
}: Required<CardIconPacksItems>) {
  const [imageLoad, setImageLoad] = useState<boolean>(false)
  const [display, setDisplay] = useState<string>('none')
  const [open, setOpen] = useState(false)
  const { getIconPackDetail } = useGetIconPackDetail()
  const { token } = useAppSelector(selectTokenBlocks)
  const handleImageLoad = () => {
    setDisplay('block')
    setImageLoad(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDetail = () => {
    setOpen(true)
    getIconPackDetail(id, token)
  }
  return (
    <>
      <div className={styles.cardIconPack} onClick={handleDetail}>
        <div className={styles.imageThumb}>
          {!imageLoad && <img src='/e8e8e8.png' alt='' />}

          <picture>
            <img
              style={{ display: display }}
              onLoad={handleImageLoad}
              src={image}
              alt={description}
            />
          </picture>
        </div>

        <div className={styles.desc}>
          <p className={styles.iconDesc}>{description}</p>
          <p className={styles.iconNumber}>{numberOfIcons}</p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        style={{ overflowY: 'scroll' }}>
        <ModalDetailPack handleClose={handleClose} />
      </Modal>
    </>
  )
}

export default CardIconPacks
