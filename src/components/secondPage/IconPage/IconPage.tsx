import React from 'react'
import styles from './IconPage.module.scss'
import SearchBar from '../../SearchBar/SearchBar'
import NavigationBar from '../../NavigationBar/NavigationBar'
import { useGetIcon } from '../../../custom-hooks/useGetIcon/useGetIcon'
import { useEffect } from 'react'
import { useAppSelector } from '../../../redux/app/hooks'
import { selectTokenBlocks } from '../../../redux/features/icon/iconSlice'
import GridContainerIcon from '../../GridContainerIcon/GridContainerIcon'
import CardIcon from '../../CardIcon/CardIcon'
import LoadingCircle from '../../Progress/LoadingCircle/LoadingCircle'
import Pagenation from '../../Pagenation/Pagenation'
import { useState } from 'react'
interface IconItems {
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
function IconPage() {
  const [page, setPage] = useState<number>(1)
  const { getIcon, dataIcons, loading } = useGetIcon()
  const { token, tokenAccepted } = useAppSelector(selectTokenBlocks)
  useEffect(() => {
    if (token) {
      getIcon(token)
    }
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
    getIcon(token, pageNumber)
  }
  return (
    <div>
      <NavigationBar />
      <SearchBar />
      {loading && <LoadingCircle />}
      <GridContainerIcon>
        {!loading &&
          dataIcons?.data?.map((item: IconItems, index: number) => (
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
        <Pagenation page={page} handlePagenation={handlePagenation} />
      )}
    </div>
  )
}

export default IconPage
