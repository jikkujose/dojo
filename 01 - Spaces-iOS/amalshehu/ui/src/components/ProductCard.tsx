import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FaceGroup from '@mui-treasury/components/group/face';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      minWidth: 275,
      padding: '10 10 10 10',
      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
      borderRadius: 10
    },
    media: {
      height: '300px'
      // paddingTop: '56.25%' // 16:9
    },
    title: {
      fontSize: 14
    },
    pos: {
      fontSize: 12,
      marginBottom: 12
    }
  })
);

export default function ProductCard() {
  const classes = useStyles();
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true });

  return (
    <Card variant="elevation" className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image="https://images.unsplash.com/photo-1581300740963-476e1e84bc77?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
        title="Nike"
      />

      <CardActions disableSpacing>
        <Box
          mt={2}
          ml={4}
          display={'flex'}
          justifyContent={'flex-around'}
          alignItems={'center'}
        >
          <div>
            <span>
              <Typography
                component={'span'}
                variant={'subtitle1'}
                color={'textPrimary'}
              >
                Relate UI Kit
              </Typography>
            </span>
            <span>
              <Typography className={classes.pos} color="textSecondary">
                14 Projects
              </Typography>
            </span>
          </div>
          <Box
            ml={4}
            display={'flex'}
            alignItems={'center'}
            className={gutterStyles.parent}
          >
            <FaceGroup
              faces={[
                'https://i.pravatar.cc/300?img=1',
                'https://i.pravatar.cc/300?img=3',
                'https://i.pravatar.cc/300?img=4'
              ]}
              size={48}
            />
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}
