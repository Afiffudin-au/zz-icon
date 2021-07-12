import axios from 'axios'
import { useAppDispatch } from '../../redux/app/hooks'
import { addIconDetail } from '../../redux/features/icon/iconSlice'
export const useGetIconDetail=  ()=>{
  const dispatch = useAppDispatch()
  const getIconDetail =  (id:number,token:Required<string>)=>{
    dispatch(addIconDetail({
      loading : true
    }))
    axios({
      method : 'get',
      headers : {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
      url : `https://api.flaticon.com/v2/item/pack/${id}`,
    }).then(res=>{
      console.log(res.data)
    }).catch(err=>{
     alert(err)
    })
  }
  return{
    getIconDetail
  }
}