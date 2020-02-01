import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import Button from '@material-ui/core/Button';

export const Styles = styled.div`
  .cart-dropdown-container {
    border: 1px solid black;
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    height: 340px;
    width: 260px;

    position: absolute;
    top: 75px;
    right: 20px;
    padding: 20px;
  }
  .cart-items-container {
    height: 260px;
    overflow: scroll;
  }
  .cart-items-button {
    /* background: yellowgreen; */
  }
  .cart-is-empty {
    font-size: 18px;
    margin: 50px auto;
  }
`;

const CartDropdown = ({ cartItems, setCartIsOpen }) => {
  const history = useHistory();

  const goToCart = () => {
    setCartIsOpen(false);
    history.push('cart');
  };
  return (
    <Styles>
      <div className="cart-dropdown-container">
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
