import axios from 'axios'
import { headers } from '../header/header'

export const useGetAccessToken = ()=>{
  const getAccessToken = ()=>{
    axios({
      method : 'post',
      headers : headers,
      url : 'https://api.flaticon.com/v2/app/authentication',
      params : {
        apikey : '030ecf7df73c84c01af38aaba98ec9f2c62b7643'
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      alert(err)
    })
  }
  return{
    getAccessToken
  }
}