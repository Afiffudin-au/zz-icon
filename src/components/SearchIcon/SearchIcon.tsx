import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavigationBar from '../NavigationBar/NavigationBar'
import style from './SearchIcon.module.scss'
import { useAppSelector } from '../../redux/app/hooks'
import {
  selectIconSearchBlocks,
  selectParameter,
  selectTokenBlocks,
} from '../../redux/features/icon/iconSlice'
import LoadingCircle from '../Progress/LoadingCircle/LoadingCircle'
import CardIcon from '../CardIcon/CardIcon'
import GridContainerIcon from '../GridContainerIcon/GridContainerIcon'
import { useGetSearchIcon } from '../../custom-hooks/useGetSearchIcon/useGetSearchIcon'
import { useState } from 'react'
interface SearchIconItems {
  id: number
  pack_id: number
  category: string
  description: string
  premium: any
  images: {
    png: {
      128: string
      512: string
    }
    svg: string
  }
}
function SearchIcon() {
  const [page, setPage] = useState<number>(1)
  const { dataIcons, loading } = useAppSelector(selectIconSearchBlocks)
  const { getSearchIcon } = useGetSearchIcon()
  const { token, tokenAccepted } = useAppSelector(selectTokenBlocks)
  const { query } = useAppSelector(selectParameter)
  const handlePagenation = (pageNumber: number) => {
    setPage(pageNumber)
    if (tokenAccepted) {
      getSearchIcon(token, query, pageNumber)
    }
  }

  return (
    <div className={style.searchIcon}>
      <NavigationBar />
      <SearchBar />
      <div className={style.loading}>{loading && <LoadingCircle />}</div>
      <GridContainerIcon>
        {!loading &&
          dataIcons?.data?.map((item: SearchIconItems, index: number) => (
            <CardIcon
              key={item.id}
              image={item.images.png[128]}
              id={item.id}
              packId={item.pack_id}
              description={item.description}
              premium={item.premium}
            />
          ))}
      </GridContainerIcon>
      {!loading && (
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

export default SearchIcon
