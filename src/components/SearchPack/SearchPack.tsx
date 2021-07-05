import React, { useState } from 'react'
import styles from './SearchPack.module.scss'
import SearchBar from '../SearchBar/SearchBar'
import NavigationBar from '../NavigationBar/NavigationBar'
import { useAppSelector } from '../../redux/app/hooks'
import {
  selectIconPackBlocks,
  selectParameter,
  selectTokenBlocks,
} from '../../redux/features/icon/iconSlice'
import CardIconPacks from '../CardIconPack/CardIconPack'
import GridContainer from '../GridContainer/GridContainer'
import LoadingCircle from '../Progress/LoadingCircle/LoadingCircle'
import Pagenation from '../Pagenation/Pagenation'
import { useGetSearchPack } from '../../custom-hooks/useGetSearchPack/useGetSearchPack'
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
function SearchPack() {
  const [page, setPage] = useState<number>(1)
  const { token } = useAppSelector(selectTokenBlocks)
  const { query } = useAppSelector(selectParameter)
  const { getSearchPack } = useGetSearchPack()
  const { dataPacks, loading } = useAppSelector(selectIconPackBlocks)
  const handlePagenation = (pageNumber: number) => {
    if (pageNumber === 0) {
      setPage(1)
    }
    if (pageNumber > 15) {
      alert('Sorry : 15 page is max results')
      return
    }
    setPage(pageNumber)
    getSearchPack(token, query, pageNumber)
  }

  return (
    <div className={styles.searchPack}>
      <NavigationBar />
      <SearchBar />
      <div>{loading && <LoadingCircle />}</div>
      <GridContainer>
        {!loading &&
          dataPacks?.data?.map((item: IconPacksItems, index: number) => (
            <CardIconPacks
              key={item.id}
              id={item.id}
              image={item.images.sprite}
              description={item.description}
              numberOfIcons={item.pack_items}
            />
          ))}
      </GridContainer>
      {!loading && (
        <Pagenation page={page} handlePagenation={handlePagenation} />
      )}
    </div>
  )
}

export default SearchPack
