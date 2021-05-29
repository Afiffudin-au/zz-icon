import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface iconState {
  value: number
  status: 'idle' | 'loading' | 'failed'
  tokenBlocks : {
    token : string
    tokenAccepted : boolean
  }
}

const initialState: iconState = {
  value: 0,
  status: 'loading',
  tokenBlocks : {
    token : '',
    tokenAccepted : false
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
    }
  },
})

export const { addToken} = iconSlice.actions

export const selectCount = (state: RootState) => state.icons.value
export const selectTokenBlocks = (state : RootState)=> state.icons.tokenBlocks
export default iconSlice.reducer
