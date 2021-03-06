import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/seguridad.png';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";
import {useStateValue} from "../StateProvider";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar:{
    backgroundColor: "whitesmoke",
    MozBoxShadow:"none",
  },
  grow:{
    flexGrow:1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image:{
    marginRight:"10px",
    height:"1ren",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket},dispatch]=useStateValue();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
          <IconButton>
            <img src = {logo}
            alt="Commerce.js"
            height="25px" 
            className={classes.image}/>
          </IconButton>
          </Link>
          <div className={classes.grow}>
          </div>
          <Typography variant="h6" color="textPrimary" component="p">
            Hello Guest
          </Typography>
          <div className={classes.button}>
              <Button variant="outlined">
              <strong>Sign in</strong>
              </Button>
            <Link to="checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={basket?.length} color="secondary" >
              <ShoppingCart fontSize="large" color="primary"/>
              </Badge>
              </IconButton>
            </Link> 
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
