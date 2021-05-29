import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface iconState {
  value: number
  status: 'idle' | 'loading' | 'failed'
  token : string
}

const initialState: iconState = {
  value: 0,
  status: 'loading',
  token : ''
}

export const iconSlice = createSlice({
  name: 'icon',
  initialState,
  reducers: {
    addToken : (state,action)=>{
      state.token = action.payload.token
    }
  },
})

export const { addToken} = iconSlice.actions

export const selectCount = (state: RootState) => state.icons.value
export const selectToken = (state : RootState)=> state.icons.token
export default iconSlice.reducer
