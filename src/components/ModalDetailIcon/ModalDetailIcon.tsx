import React from 'react'
import styles from './ModalDetailIcon.module.scss'
import { useStylesModal } from '../../custom-hooks/useStylesModal/useStylesModal'
import { useAppSelector } from '../../redux/app/hooks'
import {
  selectIconDetailBlocks,
  selectTokenBlocks,
} from '../../redux/features/icon/iconSlice'
import { LoadingLinear } from '../Progress/LoadingLinear/LoadingLinear'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useGetSearchIcon } from '../../custom-hooks/useGetSearchIcon/useGetSearchIcon'
import { useHistory } from 'react-router-dom'
interface DetailIconItems {
  category: string
  category_id: string
  description: string
  downloads: string
  id: number
  images: {
    png: {
      [128]: string
      [512]: string
    }
    svg: string
  }
  pack_id: number
  pack_name: string
  premium: number
  tags: string
  tags_id: string
}
function ModalDetailIcon({ handleClose }: any) {
  const classes = useStylesModal()
  const history = useHistory()
  const { dataIconDetails, loading } = useAppSelector(selectIconDetailBlocks)
  const { data }: { data: DetailIconItems } = dataIconDetails
  const tagsSplit = data?.tags?.split(',')
  const { getSearchIcon } = useGetSearchIcon()
  const { token } = useAppSelector(selectTokenBlocks)
  const handleSearchByTag = (tag: string) => {
    getSearchIcon(token, tag, 1)
    history.push('/search-icons')
  }
  return (
    <div className={classes.paper + ' ModalDetail ' + styles.wrapModal}>
      <div style={{ position: 'sticky', top: 0, marginBottom: '10px' }}>
        {loading && <LoadingLinear />}
      </div>
      <div className={styles.closeIcon}>
        <IconButton onClick={handleClose} className={styles.borderClose}>
          <CloseIcon style={{ fontSize: 20 }} />
        </IconButton>
      </div>
      {!loading && (
        <div className={styles.contents}>
          <div className={styles.wrap}>
            <div className={styles.imageBox}>
              <img
                className={styles.imagePreview}
                src={data?.images?.svg}
                alt=''
              />
            </div>
            <div className={styles.content1}>
              <p>Title : {data?.description}</p>
              <p>Category : {data?.category}</p>
              <p>Downloads : {data?.downloads}</p>
              <p>Pack Name : {data?.pack_name}</p>
              <div className={styles.wrapTags}>
                Tags :{' '}
                {tagsSplit?.map((item) => (
                  <p
                    className={styles.tags}
                    onClick={() => handleSearchByTag(item)}>
                    {item + ','}
                  </p>
                ))}{' '}
              </div>
              <p>License : {data?.premium === 0 ? 'Free' : 'Premium'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalDetailIcon
