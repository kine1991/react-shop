import React from 'react';
import { connect } from 'react-redux';
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
import { logoutAsync } from '../../redux/user/user.action';
import CartDropdown from '../../cart/cart-dropdown/cart-dropdown.component';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Styles } from './navbar.styles';

const NavbarComponent = ({ currentUser, cartItemsCount, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cartIsOpen, setCartIsOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleDorpdownCart = () => {
    setCartIsOpen(!cartIsOpen);
  };
  const sidebar = (
    <div className="sidebar" role="presentation">
      <List className="sidebar">
        <ListItem component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/catalog">
          <ListItemText primary="Catalog" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Styles>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton onClick={handleDrawerToggle} className="menu-icon" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className="brand" variant="h6">
            ShopCar
          </Typography>
          <div className="ml-auto"></div>
          <Button className="desk_side-nav" component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button className="desk_side-nav" component={Link} to="/catalog" color="inherit">
            Catalog
          </Button>
          <div className="cart-dropdown">
            <div className="cart-icon mx-3" aria-controls="simple-menu" onClick={handleDorpdownCart}>
              <FontAwesomeIcon className="cart-icon" icon={faCartPlus} />
              <span className="cart-number">{cartItemsCount}</span>
            </div>
            {cartIsOpen && <CartDropdown setCartIsOpen={setCartIsOpen} />}
          </div>
          {currentUser ? (
            <React.Fragment>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <span>{currentUser.fullName}</span>
                <Avatar className="mx-1" alt="Remy Sharp" src={currentUser.imageUrl} />
                <FontAwesomeIcon size="xs" icon={faCaretDown} />
              </Button>
              <Menu id="simple-menu2" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem component={Link} to="/settings/edit-profile" onClick={handleClose}>
                  EditProfile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
      <nav className="sidebar" aria-label="mailbox folders">
        <Drawer
          className="sidebar"
          // container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {sidebar}
        </Drawer>
      </nav>
    </Styles>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartItemsCount: state.cart.cartItems.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
