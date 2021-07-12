import React, { useState } from 'react'
import { useGetIconPackDetail } from '../../custom-hooks/useGetIconPackDetail/useGetIconPackDetail'
import { useAppSelector } from '../../redux/app/hooks'
import { selectTokenBlocks } from '../../redux/features/icon/iconSlice'
import style from './CardIconPack.module.scss'
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
  const { getIconPackDetail } = useGetIconPackDetail()
  const { token } = useAppSelector(selectTokenBlocks)
  const handleImageLoad = () => {
    setDisplay('block')
    setImageLoad(true)
  }
  const handleDetail = () => {
    getIconPackDetail(id, token)
  }
  return (
    <div className={style.cardIconPack} onClick={handleDetail}>
      <div className={style.imageThumb}>
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

      <div className={style.desc}>
        <p className={style.iconDesc}>{description}</p>
        <p className={style.iconNumber}>{numberOfIcons}</p>
      </div>
    </div>
  )
}

export default CardIconPacks
