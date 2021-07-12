import React, { useEffect, useState } from 'react'
import styles from './PackPage.module.scss'
import SearchBar from '../../SearchBar/SearchBar'
import NavigationBar from '../../NavigationBar/NavigationBar'
import { useGetIconPacks } from '../../../custom-hooks/useGetIconPacks/useGetIconPacks'
import LoadingCircle from '../../Progress/LoadingCircle/LoadingCircle'
import GridContainer from '../../GridContainer/GridContainer'
import CardIconPacks from '../../CardIconPack/CardIconPack'
import { useAppSelector } from '../../../redux/app/hooks'
import { selectTokenBlocks } from '../../../redux/features/icon/iconSlice'
import Pagenation from '../../Pagenation/Pagenation'
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
function PackPage() {
  const [page, setPage] = useState<number>(1)
  const { getIconPacks, dataIcons, isLoading } = useGetIconPacks()
  const { token, tokenAccepted } = useAppSelector(selectTokenBlocks)
  useEffect(() => {
    getIconPacks(token)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAccepted])
  const handlePagenation = (pageNumber: number) => {
    if (pageNumber === 0) {
      setPage(1)
    }
    if (pageNumber > 15) {
      alert('Sorry : 15 page is max results')
      return
    }
    setPage(pageNumber)
    getIconPacks(token, pageNumber, 20)
  }
  return (
    <div>
      <NavigationBar />
      <SearchBar />
      {isLoading && <LoadingCircle />}
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

export default PackPage
