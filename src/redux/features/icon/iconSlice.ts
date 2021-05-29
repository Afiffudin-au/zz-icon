import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface iconState {
  value: number
  status: 'idle' | 'loading' | 'failed'
  tokenBlocks : {
    token : string
    tokenAccepted : boolean
  },
  TotalBlocks:{
    iconTotals : number
  }
}

const initialState: iconState = {
  value: 0,
  status: 'loading',
  tokenBlocks : {
    token : '',
    tokenAccepted : false
  },
  TotalBlocks:{
    iconTotals : 0
  }
}

export const iconSlice = createSlice({
  name: 'icon',
  initialState,
  reducers: {
    addToken : (state,action)=>{
      state.tokenBlocks.token = action.payload.token
      if(action.payload.token){
        state.tokenBlocks.tokenAccepted = true
      }
    },
    addIconTotal : (state,action)=>{
      state.TotalBlocks.iconTotals = action.payload.iconTotals
    }
  },
})

export const { addToken,addIconTotal} = iconSlice.actions

export const selectCount = (state: RootState) => state.icons.value
export const selectTokenBlocks = (state : RootState)=> state.icons.tokenBlocks
export const selectTotalBlocks = (state:RootState)=>state.icons.TotalBlocks
export default iconSlice.reducer
