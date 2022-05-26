import React, { useEffect, useState } from 'react'
import styles from './SearchBar.module.scss'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RadioButtonsGroup from '../Banner/RadioButtonsGroup/RadioButtonsGroup'
import { useHistory } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks'
import {
  addParameter,
  selectTokenBlocks,
} from '../../redux/features/icon/iconSlice'
import { useGetSearchIcon } from '../../custom-hooks/useGetSearchIcon/useGetSearchIcon'
import { useGetSearchPack } from '../../custom-hooks/useGetSearchPack/useGetSearchPack'
import { useGetAccessToken } from '../../custom-hooks/useGetAccessToken/useGetAccessToken'
function SearchBar() {
  const [query, setQuery] = useState<string>('')
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [typeToSearch, setTypeToSearch] = useState<string>('icons')
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { token, tokenAccepted } = useAppSelector(selectTokenBlocks)
  const { getSearchIcon } = useGetSearchIcon()
  const { getSearchPack } = useGetSearchPack()
  const { getAccessToken } = useGetAccessToken()

  const history = useHistory()
  const dispatch = useAppDispatch()
  const handleCheck = (type: string) => {
    setIsChecked(!isChecked)
    setTypeToSearch(type)
    setIsOpenMenu(false)
  }
  const handleOpen = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const handleSearch = (e: any) => {
    e.preventDefault()
    const userText = query.replace(/^\s+/, '').replace(/\s+$/, '')
    if (userText === '') {
      return
    }
    if (typeToSearch === 'icons') {
      if (tokenAccepted) {
        getSearchIcon(token, query)
        dispatch(
          addParameter({
            query: query,
          })
        )
      } else {
        getAccessToken()
      }
      history.push('/search-icons')
    }
    if (typeToSearch === 'packs') {
      if (tokenAccepted) {
        getSearchPack(token, query)
        dispatch(
          addParameter({
            query: query,
          })
        )
      } else {
        getAccessToken()
      }
      history.push('/search-packs')
    }
  }
  useEffect(() => {
    getAccessToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <form onSubmit={handleSearch} className={styles.searchBanner} action='/'>
        <div className={styles.searchBar}>
          <div className={styles.dropdownWrap}>
            <div className={styles.dropdown} onClick={handleOpen}>
              {typeToSearch}
              <div>
                <ArrowDropDownIcon style={{ color: 'grey' }} />
              </div>
            </div>
            {isOpenMenu && (
              <RadioButtonsGroup
                handleCheck={handleCheck}
                isChecked={isChecked}
              />
            )}
          </div>

          <input
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
            type='text'
          />
          <div onClick={handleSearch} className={styles.searchButton}>
            <div>
              <SearchIcon style={{ color: 'white' }} />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
