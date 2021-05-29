import axios from 'axios'
import { useAppDispatch } from '../../redux/app/hooks'
import { addToken } from '../../redux/features/counter/counterSlice'
import { headers } from '../header/header'

export const useGetAccessToken = ()=>{
  const dispatch = useAppDispatch()
  const getAccessToken = ()=>{
    axios({
      method : 'post',
      headers : headers,
      url : 'https://api.flaticon.com/v2/app/authentication',
      params : {
        apikey : process.env.REACT_APP_API_KEY
      }
    }).then(res=>{
      dispatch(addToken({
        token : res.data.data.token
      }))
    }).catch(err=>{
      alert(err)
    })
  }
  return{
    getAccessToken
  }
}