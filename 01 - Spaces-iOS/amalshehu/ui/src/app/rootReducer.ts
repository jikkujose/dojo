import { combineReducers } from '@reduxjs/toolkit'

import productsDisplayReducer from 'features/productsDisplay/productsDisplaySlice'

const rootReducer = combineReducers({
  productsDisplay: productsDisplayReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
