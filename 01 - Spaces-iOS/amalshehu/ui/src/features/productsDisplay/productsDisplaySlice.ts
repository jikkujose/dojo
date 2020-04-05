import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrentDisplay {
  displayType: 'list' | 'details'
  productId: number | null
}

interface CurrentDisplayPayload {
  displayType: 'list' | 'details'
  productId?: number
}

type CurrentDisplayState = {} & CurrentDisplay

let initialState: CurrentDisplayState = {
  displayType: 'list',
  productId: null,
}

const productsDisplaySlice = createSlice({
  name: 'productsDisplay',
  initialState,
  reducers: {
    setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
      const { displayType, productId = null } = action.payload
      state.displayType = displayType
      state.productId = productId
    },
  },
})

export const { setCurrentDisplayType } = productsDisplaySlice.actions

export default productsDisplaySlice.reducer
