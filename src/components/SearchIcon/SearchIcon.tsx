import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavigationBar from '../NavigationBar/NavigationBar'
import style from './SearchIcon.module.scss'
import { useAppSelector } from '../../redux/app/hooks'
import { selectIconSearchBlocks } from '../../redux/features/icon/iconSlice'
import LoadingCircle from '../Progress/LoadingCircle/LoadingCircle'
import CardIcon from '../CardIcon/CardIcon'
import GridContainerIcon from '../GridContainerIcon/GridContainerIcon'
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
  const { dataIcons, loading } = useAppSelector(selectIconSearchBlocks)
  console.log(dataIcons)
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

        {/* <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon /> */}
      </GridContainerIcon>
    </div>
  )
}

export default SearchIcon
