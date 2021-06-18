import React from 'react'
import { DarkTooltip } from '../Mui-Custom/DarkTooltip'
import style from './CardIcon.module.scss'
interface CardIconItems {
  description: string
  id: number
  packId: number
  image: string
  premium: any
}
function CardIcon({
  image,
  id,
  description,
  packId,
  premium,
}: Required<CardIconItems>) {
  return (
    <div className={style.cardIcon}>
      <DarkTooltip title={description} arrow>
        <img className={style.image} src={image} alt={description} />
      </DarkTooltip>
    </div>
  )
}

export default CardIcon
