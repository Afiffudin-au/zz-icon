import React, { useState } from 'react'
import style from './SearchBanner.module.scss'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RadioButtonsGroup from '../RadioButtonsGroup/RadioButtonsGroup'
function SearchBanner() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [typeToSearch, setTypeToSearch] = useState<string>('icons')
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const handleCheck = (type: string) => {
    setIsChecked(!isChecked)
    setTypeToSearch(type)
    setIsOpenMenu(false)
  }
  const handleOpen = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  console.log(typeToSearch)
  return (
    <>
      <form className={style.searchBanner} action='/'>
        <div className={style.searchBar}>
          <div className={style.dropdownWrap}>
            <div className={style.dropdown} onClick={handleOpen}>
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

          <input className={style.searchInput} type='text' />
          <div className={style.searchButton}>
            <div>
              <SearchIcon style={{ color: 'white' }} />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default SearchBanner
