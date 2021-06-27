import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface iconState {
  value: number
  status: 'idle' | 'loading' | 'failed'
  parametersApi : {
    query : string
  }
  tokenBlocks : {
    token : string
    tokenAccepted : boolean
  },
  TotalBlocks:{
    iconTotals : number
  },
  iconSearchBlocks:{
    loading : boolean,
    dataIcons : any
  }
}

const initialState: iconState = {
  value: 0,
  status: 'loading',
  parametersApi : {
    query : ''
  },
  tokenBlocks : {
    token : '',
    tokenAccepted : false
  },
  TotalBlocks:{
    iconTotals : 0
  },
  iconSearchBlocks :{
    dataIcons : [],
    loading : false
  }

}

export const iconSlice = createSlice({
  name: 'icon',
  initialState,
  reducers: {
    addParameter : (state,action)=>{
      state.parametersApi.query = action.payload.query
    },
    addToken : (state,action)=>{
      state.tokenBlocks.token = action.payload.token
      if(action.payload.token){
        state.tokenBlocks.tokenAccepted = true
      }
    },
    addIconTotal : (state,action)=>{
      state.TotalBlocks.iconTotals = action.payload.iconTotals
    },
    addIconResult : (state,action)=>{
      state.iconSearchBlocks.loading = action.payload.loading
      state.iconSearchBlocks.dataIcons = action.payload.dataIcons || []
    }
  },
})

export const { addToken,addIconTotal,addIconResult,addParameter} = iconSlice.actions

export const selectCount = (state: RootState) => state.icons.value
export const selectTokenBlocks = (state : RootState)=> state.icons.tokenBlocks
export const selectTotalBlocks = (state:RootState)=>state.icons.TotalBlocks
export const selectIconSearchBlocks = (state:RootState)=>state.icons.iconSearchBlocks
export const selectParameter = (state:RootState)=>state.icons.parametersApi
export default iconSlice.reducer
