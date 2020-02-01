import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import CartDropdown from '../../cart/cart-dropdown/cart-dropdown.component';

export const Styles = styled.div`
  position: relative;
  z-index: 10;

  .cart-icon {
    position: relative;
  }

  .cart-number {
    position: absolute;
    top: -8px;
    right: -8px;
    background: rebeccapurple;
    color: white;
    font-weight: 400;
    width: 16px;
    height: 16px;
    // padding: 5px;
    font-size: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

const NavbarComponent = ({ currentUser, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cartIsOpen, setCartIsOpen] = React.useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDorpdownCart = () => {
    // console.log('handleDorpdownCart');
    setCartIsOpen(!cartIsOpen);
  };

  // const handleDorpdownCart = () => {
  //   // console.log('handleDorpdownCart');
  //   setCartIsOpen(!cartIsOpen);
  // };

  return (
    <Styles>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">ShopCar</Typography>
          <div className="ml-auto"></div>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/catalog" color="inherit">
            Catalog
          </Button>
          <div className="cart-dropdown">
            <div className="cart-icon mx-3" aria-controls="simple-menu" onClick={handleDorpdownCart}>
              <FontAwesomeIcon className="cart-icon" onClick={() => console.log('item')} icon={faCartPlus} />
              <span className="cart-number">10</span>
              {/* <FontAwesomeIcon onClick={() => console.log('item')} icon={faCaretDown} size="sm" /> */}
            </div>
            {cartIsOpen && <CartDropdown setCartIsOpen={setCartIsOpen} />}
          </div>
          {currentUser ? (
            <React.Fragment>
              <span className="mx-1">{currentUser.fullName}</span>
              <Avatar className="mx-1" alt="Remy Sharp" src={currentUser.imageUrl} />
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <FontAwesomeIcon className="" onClick={() => console.log('item')} size="sm" icon={faCaretDown} />
              </Button>
              <Menu id="simple-menu2" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem component={Link} to="/settings/profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/settings" onClick={handleClose}>
                  My account
                </MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/register" color="inherit">
                Register
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Styles>
  );
};

export default NavbarComponent;
