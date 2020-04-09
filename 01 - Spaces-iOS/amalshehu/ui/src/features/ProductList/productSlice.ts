import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getProducts, Product, ProductResult } from 'api/productAPI'
import { AppThunk } from 'app/store'

interface ProductState {
  productsById: Record<string, Product>
  isLoading: boolean
  error: string | null
}

const productInitialState: ProductState = {
  productsById: {},
  isLoading: true,
  error: null,
}

function startLoading(state: ProductState) {
  state.isLoading = true
}

function loadingFailed(state: ProductState, action: PayloadAction<string>) {
  state.isLoading = false
  state.error = action.payload
}

const products = createSlice({
  name: 'products',
  initialState: productInitialState,
  reducers: {
    getProductsStart: startLoading,
    getProductsSuccess(state, { payload }: PayloadAction<ProductResult>) {
      const { spaces } = payload
      state.isLoading = false
      state.error = null
      console.log('getProductsSuccess:::')
      spaces.forEach((product) => {
        state.productsById[product.id] = product
      })
    },
    getProductsFailure: loadingFailed,
  },
})

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} = products.actions

export default products.reducer

export const fetchProducts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getProductsStart())
    const products = await getProducts()
    dispatch(getProductsSuccess(products))
  } catch (err) {
    dispatch(getProductsFailure(err.toString()))
  }
}
