import axios from 'axios'
import {useAppDispatch} from '../../redux/app/hooks'
import { addIconResult } from '../../redux/features/icon/iconSlice'
export const useGetSearchIcon = ()=>{
  const dispatch = useAppDispatch()
  const getSearchIcon = (token:Required<string>,query:Required<string>,page = 1)=>{
    dispatch(addIconResult({
      loading : true
    }))
    axios({
      method : 'get',
      headers : {
        'Accept':'application/json',
        'Authorization': 'Bearer '+token,
      },
      url : 'https://api.flaticon.com/v2/search/icons/priority',
      params : {
        q : query,
        page : page
      }
    }).then(res=>{
      dispatch(addIconResult({
        loading : false,
        dataIcons : res.data
      }))
    }).catch(err=>{
      dispatch(addIconResult({
        loading : false
      }))
      alert(err)
    })
  }
  
  return{
    getSearchIcon,
  }
}