import React from 'react'
import { DarkTooltip } from '../Mui-Custom/DarkTooltip'
import style from './CardIcon.module.scss'
import { useGetIconDetail } from '../../custom-hooks/useGetIconDetail/useGetIconDetail'
import { useAppSelector } from '../../redux/app/hooks'
import { selectTokenBlocks } from '../../redux/features/icon/iconSlice'
import StarIcon from '@material-ui/icons/Star'
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
  const { getIconDetail } = useGetIconDetail()
  const { token } = useAppSelector(selectTokenBlocks)
  const handleDetail = () => {
    getIconDetail(id, token)
  }
  return (
    <div className={style.cardIcon} onClick={handleDetail}>
      {premium !== 0 ? <StarIcon /> : null}
      <DarkTooltip title={description} arrow>
        <img className={style.image} src={image} alt={description} />
      </DarkTooltip>
    </div>
  )
}

export default CardIcon
