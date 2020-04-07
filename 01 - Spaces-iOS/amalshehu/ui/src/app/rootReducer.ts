import { combineReducers } from '@reduxjs/toolkit'

import productDisplayReducer from 'features/ProductDisplay/productDisplaySlice'
import productSliceReducer from 'features/ProductList/productSlice'

const rootReducer = combineReducers({
  productDisplay: productDisplayReducer,
  products: productSliceReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
