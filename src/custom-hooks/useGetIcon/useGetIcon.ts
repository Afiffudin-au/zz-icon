import axios from 'axios'
import { useState } from 'react'
export const useGetIcon = () => {
  const [dataIcons, setDataIcons] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const getIcon = (token: Required<string>, page = 1) => {
    setLoading(true)
    axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
      url: 'https://api.flaticon.com/v2/items/icons/priority',
      params: {
        limit: 50,
        page: page,
      },
    })
      .then((res) => {
        setLoading(false)
        setDataIcons(res.data)
      })
      .catch((err) => {
        setLoading(false)
        alert(err)
      })
  }
  return {
    getIcon,
    dataIcons,
    loading,
  }
}
