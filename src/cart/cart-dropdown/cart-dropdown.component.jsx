import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import Button from '@material-ui/core/Button';
import { Styles } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, setCartIsOpen }) => {
  const history = useHistory();
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setCartIsOpen(false);
    }
  };

  const goToCart = () => {
    setCartIsOpen(false);
    history.push('/cart');
  };

  return (
    <Styles>
      <div className="cart-dropdown-container" ref={wrapperRef}>
        <div className="cart-items-container">
          {cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />) : <div className="cart-is-empty">Empty</div>}
        </div>
        <Button onClick={goToCart} className="cart-items-button" fullWidth variant="outlined" color="primary">
          Go To Cart
        </Button>
      </div>
    </Styles>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
