import React, { useEffect } from 'react'
import GridContainer from '../GridContainer/GridContainer'
import style from './IconPacks.module.scss'
import { useGetIconPacks } from '../../custom-hooks/useGetIconPacks/useGetIconPacks'
import { useAppSelector } from '../../redux/app/hooks'
import { selectTokenBlocks } from '../../redux/features/icon/iconSlice'
function IconPacks() {
  const { token, tokenAccepted } = useAppSelector(selectTokenBlocks)
  const { getIconPacks } = useGetIconPacks()
  useEffect(() => {
    if (token) {
      getIconPacks(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAccepted])
  return (
    <div className={style.iconPacks}>
      <h3 className={style.title}>Popular Icon Packs</h3>
      <GridContainer></GridContainer>
    </div>
  )
}

export default IconPacks
