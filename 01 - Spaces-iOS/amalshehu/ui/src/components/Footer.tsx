import React from 'react';
import './Footer.scss';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { BottomNavigation } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    height: 100
  },
  iconStyle: {
    color: '#ff4090'
  }
});

function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction
        label="PhotoCamera"
        value="PhotoCamera"
        className="inActive"
        icon={<PhotoCameraIcon />}
      />
      <BottomNavigationAction
        label="FolderOpen"
        value="FolderOpen"
        className={classes.iconStyle}
        icon={<FolderOpenIcon />}
      />
      <BottomNavigationAction
        label="AllInclusive"
        value="AllInclusive"
        className="inActive"
        icon={<AllInclusiveIcon />}
      />
      <BottomNavigationAction
        label="PersonOutline"
        value="PersonOutline"
        className="inActive"
        icon={<PersonOutlineIcon />}
      />
    </BottomNavigation>
  );
}

export default Footer;
