import axios from 'axios'
export const useGetTotal = ()=>{
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
      console.log(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  return{
    getTotalIcon
  }
}
