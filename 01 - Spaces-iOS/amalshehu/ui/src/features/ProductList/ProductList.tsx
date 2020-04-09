import React from 'react'

import { Product } from 'api/productAPI'
import { ProductListItem } from './ProductListItem'

import styles from './ProductListItem.module.scss'
import SwipeableViews from 'react-swipeable-views'

interface Props {
  products: Product[]
  // showProductDetail: (productId: string) => void
}
const swiperStyle = {
  root: {
    padding: '0 20px',
  },

  slide: {
    padding: 10,
    minHeight: 100,
  },
}

export const ProductsList = ({ products }: Props) => {
  // Will use products once API is ready.
  const renderedProducts = [1, 2, 3, 4].map((product) => (
    <div style={Object.assign({}, swiperStyle.slide)}>
      <ProductListItem product={products[0]}></ProductListItem>
    </div>
  ))
  return (
    <ul className={styles.ProductList}>
      <SwipeableViews style={swiperStyle.root}>
        {renderedProducts}
      </SwipeableViews>
    </ul>
  )
}
