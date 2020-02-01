import React from 'react';
import styled from 'styled-components';

export const Styles = styled.div`
  .cart-item-container {
    height: 30%;
    width: 100%;
    margin-bottom: 5px;
    display: flex;
  }
  .image-container {
    flex: 2;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .item-details-container {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 12px;
    font-weight: 100;
  }
  .price {
    font-size: 12px;
    font-weight: 400;
  }
`;

const CartItem = ({ cartItem }) => {
  return (
    <Styles>
      <div className="cart-item-container">
        <div className="image-container">
          <img className="image" src={cartItem.imageUrl} alt="" />
        </div>
        <div className="item-details-container">
          <div className="title">{cartItem.brand}</div>
          <div className="title">{cartItem.model}</div>
          <div className="price">$ {cartItem.price}</div>
        </div>
      </div>
    </Styles>
  );
};

export default CartItem;
