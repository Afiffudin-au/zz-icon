import React from 'react'
import styles from './ModalDetailPack.module.scss'
import CloseIcon from '@material-ui/icons/Close'
import { useStylesModal } from '../../custom-hooks/useStylesModal/useStylesModal'
import IconButton from '@material-ui/core/IconButton'
import { useAppSelector } from '../../redux/app/hooks'
import {
  selectIconPackDetailBlocks,
  selectParameter,
  selectTokenBlocks,
} from '../../redux/features/icon/iconSlice'
import { LoadingLinear } from '../Progress/LoadingLinear/LoadingLinear'
import { useGetSearchPack } from '../../custom-hooks/useGetSearchPack/useGetSearchPack'
import { useHistory } from 'react-router-dom'
interface DetailPackItems {
  category: string
  category_id: string
  description: string
  downloads: string
  id: number
  images: {
    sprite: string
  }
  premium: number
  tags: string
  tags_id: string
}
function ModalDetailPack({ handleClose }: any) {
  const classes = useStylesModal()
  const { dataPackDetails, loading } = useAppSelector(
    selectIconPackDetailBlocks
  )
  const history = useHistory()
  const { token } = useAppSelector(selectTokenBlocks)
  // const { query } = useAppSelector(selectParameter)
  const { getSearchPack } = useGetSearchPack()
  const { data }: { data: DetailPackItems } = dataPackDetails
  const tagsSplit = data?.tags?.split(',')
  const handleSearchByTag = (tag: string) => {
    getSearchPack(token, tag, 1)
    history.push('/search-packs')
  }
  console.log(tagsSplit)
  return (
    <div className={classes.paper + ' ModalDetail'}>
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
                src={data?.images?.sprite}
                alt=''
              />
            </div>
            <div className={styles.content1}>
              <p>Title : {data.description}</p>
              <p>Category : {data.category}</p>
              <p>Downloads : {data.downloads}</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Tags :{' '}
                {tagsSplit?.map((item) => (
                  <p
                    className={styles.tags}
                    onClick={() => handleSearchByTag(item)}>
                    {item + ','}
                  </p>
                ))}{' '}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalDetailPack
