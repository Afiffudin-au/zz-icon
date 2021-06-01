import React, { useState } from 'react'
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
  const handleImageLoad = () => {
    setDisplay('block')
    setImageLoad(true)
  }
  return (
    <div className={style.cardIconPack}>
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
