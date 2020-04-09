import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import { TransitionProps } from '@material-ui/core/transitions'
import { Container, Grow, DialogActions, Box } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import DialogContent from '@material-ui/core/DialogContent'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { ProductCard } from 'components/ProductCard'
import { Product } from 'api/productAPI'

type Props = {
  product: Product
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Grow in={true} ref={ref} {...props} />
})
// `url(${product.bgImage})`,
export const ProductListItem = ({ product }: Props) => {
  debugger
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      appBar: { background: 'transparent', boxShadow: 'none', color: 'black' },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
      },
      content: {
        width: '100%',
        objectFit: 'cover',
        backdropFilter: ` blur('2px')`,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${product.bgImage})`,
        backgroundSize: ' 100%',
      },
      moreIcon: {
        // color: 'white'
      },
      actions: {
        justifyContent: 'space-evenly',
      },
    })
  )

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  console.log(product)
  return (
    <div>
      <Container onClick={handleClickOpen}>
        <ProductCard product={product}></ProductCard>
      </Container>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Spaces
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}

            <IconButton size={'medium'} edge="end">
              <MoreHorizIcon className={classes.moreIcon} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.content}></DialogContent>
        <DialogActions disableSpacing className={classes.actions}>
          <Box
            mt={2}
            display={'flex'}
            justifyContent={'space-around'}
            alignItems={'center'}
          >
            <ProductCard></ProductCard>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  )
}

// import React, { MouseEvent } from 'react'
// import { Product } from 'api/productAPI'
// import styles from './ProductListItem.module.scss'

// type Props = Product & {
//   showProductDetail: (productId: number) => void
// }

// export const ProductListItem = ({ id, title, showProductDetail }: Props) => {
//   const onProductClicked = (e: MouseEvent) => {
//     e.preventDefault()
//     e.stopPropagation()
//     showProductDetail(id)
//   }

//   return <div className={styles.ProductList}></div>
// }
