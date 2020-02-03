import React from 'react';

import { Styles } from './cart-item.styles';
import { Link } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
  return (
    <Styles>
      <div className="cart-item-container">
        <div className="image-container">
          <img className="image" src={cartItem.imageUrl} alt="" />
        </div>
        <Link to={`/catalog/${cartItem.id}`} className="item-details-container">
          <div className="title">{cartItem.brand}</div>
          <div className="title">{cartItem.model}</div>
          <div className="price">$ {cartItem.price}</div>
        </Link>
      </div>
    </Styles>
  );
};

export default CartItem;
