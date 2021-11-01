import axios from 'axios'
import { useState } from 'react'
export const useGetIconPacks = () => {
  const [dataIcons, setDataIcons] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const getIconPacks = (token: Required<string>, page = 1, limit = 20) => {
    setIsLoading(true)
    axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
      url: 'https://api.flaticon.com/v2/items/packs/priority',
      params: {
        page: page,
        limit: limit,
        color : 2
      },
    })
      .then((res) => {
        setIsLoading(false)
        setDataIcons(res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err)
      })
  }
  return {
    getIconPacks,
    isLoading,
    dataIcons,
  }
}
