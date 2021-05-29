import axios from 'axios'
import { useAppDispatch } from '../../redux/app/hooks'
import { addIconTotal } from '../../redux/features/icon/iconSlice'
export const useGetTotal = ()=>{
  const dispatch = useAppDispatch()
  const getTotalIcon = (token:Required<string>)=>{
    axios({
      method : 'get',
      headers : {
        'Accept':'application/json',
        'Authorization': 'Bearer '+token,
      },
      url : 'https://api.flaticon.com/v2/total/icons',
      params : {
        apikey : process.env.REACT_APP_API_KEY
      }
    }).then(res=>{
      dispatch(addIconTotal({
        iconTotals : res.data.data.total
      }))
    }).catch(err=>{
      alert(err)
    })
  }
  return{
    getTotalIcon
  }
}
