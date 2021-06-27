import React, { useEffect, useState } from 'react'
import GridContainer from '../GridContainer/GridContainer'
import style from './IconPacks.module.scss'
import { useGetIconPacks } from '../../custom-hooks/useGetIconPacks/useGetIconPacks'
import { useAppSelector } from '../../redux/app/hooks'
import { selectTokenBlocks } from '../../redux/features/icon/iconSlice'
import CardIconPacks from '../CardIconPack/CardIconPack'
import LoadingCircle from '../Progress/LoadingCircle/LoadingCircle'
import Pagenation from '../Pagenation/Pagenation'
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
  const [page, setPage] = useState<number>(1)
  const { getIconPacks, dataIcons, isLoading } = useGetIconPacks()
  useEffect(() => {
    if (token) {
      getIconPacks(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAccepted])
  const handlePagenation = (numberOfPage: number) => {
    if (numberOfPage === 0) {
      setPage(1)
    }
    if (numberOfPage > 15) {
      alert('Sorry : 15 page is max results')
      return
    }
    setPage(numberOfPage)
    getIconPacks(token, numberOfPage)
  }
  return (
    <div className={style.iconPacks}>
      <h3 className={style.title}>Popular Icon Packs</h3>
      <div>{isLoading && <LoadingCircle />}</div>
      <GridContainer>
        {!isLoading &&
          dataIcons?.data?.map((item: IconPacksItems, index: number) => (
            <CardIconPacks
              key={item.id}
              id={item.id}
              image={item.images.sprite}
              description={item.description}
              numberOfIcons={item.pack_items}
            />
          ))}
      </GridContainer>
      {!isLoading && (
        <Pagenation page={page} handlePagenation={handlePagenation} />
      )}
    </div>
  )
}

export default IconPacks
