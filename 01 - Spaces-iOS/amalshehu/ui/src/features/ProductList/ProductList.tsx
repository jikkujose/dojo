import React from 'react'

import { Product } from 'api/productAPI'
import { ProductListItem } from './ProductListItem'

import styles from './ProductList.module.css'
import SwipeableViews from 'react-swipeable-views'
import FullScreenDialog from 'components/Dialog'

interface Props {
  products: Product[]
  showProductDetail: (productId: number) => void
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
  const renderedProducts = products.map((product) => (
    <div style={Object.assign({}, swiperStyle.slide)}>
      <FullScreenDialog></FullScreenDialog>
    </div>
  ))

  return (
    <ul className={styles.ProductList}>
      <SwipeableViews style={swiperStyle.root}> </SwipeableViews>
      {renderedProducts}
    </ul>
  )
}
