import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import{ ShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
import car from '../../assets/car_32.png'
import { Link, useLocation } from 'react-router-dom';


const PrimarySearchAppBar = ({ totalItems }) => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = useStyles();
    const location = useLocation();
  
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
  
    const renderMobileMenu = (
      <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
        <MenuItem>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Menu>
    );
    return (
        <>
            <AppBar position='fixed' className={classes.AppBar} color='inherit'>
                <Toolbar>
                    <Typography  component={Link} to="/" variant="h6" className={classes.title} color="inherit" >
                        <img src={car} alt="Commerce.js" className={classes.image} />
                        NGX Store
                    </Typography>
                
                <div className={classes.grow} />{/*  grow take as much space as we need*/}
                    {location.pathname === '/'&& (
                    <div className={classes.button}>
                        {/* <Link to="/cart"> </Link> = component={Link} to="/cart" */}
                        <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    
                </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default PrimarySearchAppBar;
