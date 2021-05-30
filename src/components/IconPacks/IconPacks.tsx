import React, { useEffect } from 'react'
import GridContainer from '../GridContainer/GridContainer'
import style from './IconPacks.module.scss'
import { useGetIconPacks } from '../../custom-hooks/useGetIconPacks/useGetIconPacks'
import { useAppSelector } from '../../redux/app/hooks'
import { selectTokenBlocks } from '../../redux/features/icon/iconSlice'
import CardIconPacks from '../CardIconPack/CardIconPack'
interface IconPacksItems {
  catagory: string
  id: number
  description: string
  images: {
    sprite: string
  }
  pack_items: number
  license: string
  tags_id: any
  category_id: any
}
function IconPacks() {
  const { token, tokenAccepted } = useAppSelector(selectTokenBlocks)
  const { getIconPacks, dataIcons } = useGetIconPacks()
  useEffect(() => {
    if (token) {
      getIconPacks(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAccepted])
  return (
    <div className={style.iconPacks}>
      <h3 className={style.title}>Popular Icon Packs</h3>
      <GridContainer>
        {dataIcons?.data?.map((item: IconPacksItems, index: number) => (
          <CardIconPacks
            id={item.id}
            image={item.images.sprite}
            description={item.description}
            numberOfIcons={item.pack_items}
          />
        ))}
      </GridContainer>
    </div>
  )
}

export default IconPacks
