import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavigationBar from '../NavigationBar/NavigationBar'
import style from './SearchIcon.module.scss'
import { useAppSelector } from '../../redux/app/hooks'
import { selectIconSearchBlocks } from '../../redux/features/icon/iconSlice'
import LoadingCircle from '../Progress/LoadingCircle/LoadingCircle'
function SearchIcon() {
  const { dataIcons, loading } = useAppSelector(selectIconSearchBlocks)
  return (
    <div className={style.searchIcon}>
      <NavigationBar />
      <SearchBar />
      <div className={style.loading}>{loading && <LoadingCircle />}</div>
    </div>
  )
}

export default SearchIcon
