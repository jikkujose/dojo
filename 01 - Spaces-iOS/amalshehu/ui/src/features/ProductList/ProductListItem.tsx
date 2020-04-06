import React, { MouseEvent } from 'react'
import { Product } from 'api/productAPI'
import styles from './ProductListItem.module.css'

type Props = Product & {
  showProductDetail: (productId: number) => void
}

export const ProductListItem = ({ id, title, showProductDetail }: Props) => {
  const onProductClicked = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    showProductDetail(id)
  }

  return <div className={styles.Product}></div>
}
