import React from 'react'
import style from './SearchBanner.module.scss'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
function SearchBanner() {
  return (
    <>
      <form className={style.searchBanner} action='/'>
        <div className={style.searchBar}>
          <div className={style.dropdown}>
            Icons
            <div>
              <ArrowDropDownIcon style={{ color: 'grey' }} />
            </div>
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
