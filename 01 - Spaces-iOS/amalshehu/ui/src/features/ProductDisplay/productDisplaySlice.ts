import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrentDisplay {
  displayType: 'list' | 'details'
  productId: string | null
}

interface CurrentDisplayPayload {
  displayType: 'list' | 'details'
  productId?: string | null
}

type CurrentDisplayState = {} & CurrentDisplay

let initialState: CurrentDisplayState = {
  displayType: 'list',
  productId: null,
}

const productDisplaySlice = createSlice({
  name: 'productDisplay',
  initialState,
  reducers: {
    setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
      const { displayType, productId = null } = action.payload
      state.displayType = displayType
      state.productId = productId
    },
  },
})

export const { setCurrentDisplayType } = productDisplaySlice.actions

export default productDisplaySlice.reducer
