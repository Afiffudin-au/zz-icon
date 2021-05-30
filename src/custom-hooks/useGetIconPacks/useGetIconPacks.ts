import axios from 'axios'
export const useGetIconPacks = ()=>{
  const getIconPacks = (token:Required<string>,page = 1,limit = 12)=>{
    axios({
      method : 'get',
      headers : {
        'Accept':'application/json',
        'Authorization': 'Bearer '+token,
      },
      url : 'https://api.flaticon.com/v2/items/packs/priority',
      params:{
        page : page,
        limit : limit
      }
    }).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  return{
    getIconPacks
  }
}