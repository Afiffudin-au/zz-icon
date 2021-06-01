import React, { useEffect, useState } from 'react'
import GridContainer from '../GridContainer/GridContainer'
import style from './IconPacks.module.scss'
import { useGetIconPacks } from '../../custom-hooks/useGetIconPacks/useGetIconPacks'
import { useAppSelector } from '../../redux/app/hooks'
import { selectTokenBlocks } from '../../redux/features/icon/iconSlice'
import CardIconPacks from '../CardIconPack/CardIconPack'
import { CircularProgress } from '@material-ui/core'
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
      // getIconPacks(token)
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
      {isLoading && (
        <div className={style.loading}>
          <CircularProgress />
        </div>
      )}
      <GridContainer>
        {!isLoading &&
          dataIcons?.data?.map((item: IconPacksItems, index: number) => (
            <CardIconPacks
              id={item.id}
              image={item.images.sprite}
              description={item.description}
              numberOfIcons={item.pack_items}
            />
          ))}
      </GridContainer>
      {!isLoading && (
        <div className={style.pagenation}>
          <div
            style={{ display: page === 1 ? 'none' : 'block' }}
            onClick={() => handlePagenation(page - 1)}
            className={style.arrowBack}>
            <p>Previous</p>
          </div>
          <div>
            <p className={style.pageNumber}>{page}</p>
          </div>
          <div
            onClick={() => handlePagenation(page + 1)}
            className={style.arrowForward}>
            <p>Next</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default IconPacks
