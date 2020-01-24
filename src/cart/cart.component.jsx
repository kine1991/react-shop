import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';

export const Styles = styled.div`
  .cart-container {
    &__description {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 1rem;
      margin: 1rem;
    }
    &__item {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin: 1rem;
      grid-gap: 1rem;
    }
  }
  .image-container {
    width: 100px;
  }
  .image {
    width: 100%;
  }
`;

const CartComponent = ({ cartItems }) => {
  // console.log('cartItems2');
  // console.log(cartItems);
  if (!cartItems.length) {
    return <h1>Cart is empty</h1>;
  }
  return (
    <Styles>
      <h1>CartComponent</h1>
      <div className="cart-container">
        <div className="cart-container__description">
          <span>image</span>
          <span>name</span>
          <span>quantity</span>
          <span>price</span>
          <span>delete</span>
        </div>
        <Divider />
        {cartItems.map(cartItem => (
          <div key={cartItem.id} className="cart-container__item">
            <img className="image" src={cartItem.imageUrl} alt="" />
            <span>
              {cartItem.brand} {cartItem.model}
            </span>
            <span>{cartItem.quantity}</span>
            <span>{cartItem.price}</span>
            <span>X</span>
          </div>
          // <Divider />
          // <>
          // </>
          // <div>fffff</div>
        ))}
      </div>
    </Styles>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartComponent);
