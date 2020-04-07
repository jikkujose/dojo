import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'app/rootReducer'
import { fetchProducts } from './productSlice'
import { ProductsList } from './ProductList'

interface PLProps {}

export const ProductsListPage = ({}: PLProps) => {
  const dispatch = useDispatch()

  const { isLoading, error: productsError, productsById } = useSelector(
    (state: RootState) => state.products
  )

  const products = Object.keys(productsById).map((id) => productsById[id])

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (productsError) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <div>{productsError.toString()}</div>
      </div>
    )
  }

  let renderedList = isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ProductsList products={products} />
  )

  return <div>{renderedList}</div>
}
