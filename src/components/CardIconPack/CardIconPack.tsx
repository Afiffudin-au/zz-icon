import React from 'react'
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
  return (
    <div className={style.cardIconPack}>
      <div className={style.imageThumb}>
        <picture>
          <img src={image} alt={description} />
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
