import React, { Suspense } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import FaceGroup from '@mui-treasury/components/group/face'
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing'
import { Box } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { Product } from 'api/productAPI'

type Props = {
  product: Product
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 275,
      padding: '10 10 10 10',
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
      borderRadius: 10,
    },
    media: {
      height: '300px',
      // paddingTop: '56.25%' // 16:9
    },
    cardSkeleton: {
      height: 190,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      fontSize: 12,
      marginBottom: 12,
    },
  })
)

export const ProductCard = ({ product }: any) => {
  const classes = useStyles()
  console.log('Inside card')

  const gutterStyles = usePushingGutterStyles({ firstExcluded: true })
  return (
    <Card variant="elevation" className={classes.root}>
      {/* <Suspense
        fallback={<Skeleton variant="rect" className={classes.media} />}
      > */}
      <CardMedia
        className={classes.media}
        component="img"
        image={product.bgImage}
        title={product.title}
      />
      {/* </Suspense> */}

      <CardActions disableSpacing>
        <Box
          mt={2}
          ml={2.5}
          display={'flex'}
          justifyContent={'flex-around'}
          alignItems={'center'}
        >
          <div>
            <span>
              <Typography
                component={'span'}
                variant={'caption'}
                color={'textPrimary'}
              >
                {product.title}
              </Typography>
            </span>
            <span>
              <Typography className={classes.pos} color="textSecondary">
                {product.description.count} Projects
              </Typography>
            </span>
          </div>
          <Box
            ml={4}
            display={'flex'}
            alignItems={'center'}
            className={gutterStyles.parent}
          >
            {/* faces={product.faceThumbs.map((t) => t.image)} */}
            <FaceGroup
              faces={[
                'https://i.pravatar.cc/300?img=1',
                'https://i.pravatar.cc/300?img=3',
                'https://i.pravatar.cc/300?img=4',
              ]}
              size={48}
            />
          </Box>
        </Box>
      </CardActions>
    </Card>
  )
}
