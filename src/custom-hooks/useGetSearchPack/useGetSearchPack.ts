import axios from 'axios'
import { useAppDispatch } from '../../redux/app/hooks'
import { addPackResult } from '../../redux/features/icon/iconSlice'

export const useGetSearchPack = () => {
  const dispatch = useAppDispatch()
  const getSearchPack = (
    token: Required<string>,
    query: Required<string>,
    page = 1
  ) => {
    dispatch(
      addPackResult({
        loading: true,
      })
    )
    axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
      url: 'https://api.flaticon.com/v2/search/packs',
      params: {
        q: query,
        page: page,
      },
    })
      .then((res) => {
        dispatch(
          addPackResult({
            dataPacks: res.data,
            loading: false,
          })
        )
      })
      .catch((err) => {
        dispatch(
          addPackResult({
            loading: false,
          })
        )
        alert(err)
      })
  }
  return {
    getSearchPack,
  }
}
