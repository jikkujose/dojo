import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from 'app/rootReducer'
import { fetchProducts } from './productSlice'
import { ProductsList } from './ProductList'
import {
  createStyles,
  makeStyles,
  Theme,
  CircularProgress,
  Grid,
} from '@material-ui/core'
// import { Box } from '@material-ui/core'
// import Skeleton from '@material-ui/lab/Skeleton'

interface PLProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
)
export const ProductsListPage = () => {
  const classes = useStyles()

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
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '40vh' }}
    >
      <Grid item xs={3}>
        <div className={classes.root}>
          <CircularProgress size={24} thickness={3} color="secondary" />
        </div>
      </Grid>
    </Grid>
  ) : (
    <ProductsList products={products} />
  )

  return <div>{renderedList}</div>
}
