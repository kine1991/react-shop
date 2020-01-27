import React from 'react';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { clearItemFromCart, addItemToCart, deleteItemFromCart } from '../redux/cart/cart.action';

import { Styles } from './cart.styles';

const CartComponent = ({ cartItems, clearItemFromCart, addItemToCart, deleteItemFromCart }) => {
  const isFirstRun = React.useRef(true);
  React.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    localStorage.setItem('car-shop-cartItems', JSON.stringify(cartItems));
    console.log('check');
  }, [clearItemFromCart, cartItems]);

  if (!cartItems.length) {
    return <h1>Cart is empty</h1>;
  }
  return (
    <Styles>
      <h1>CartComponent</h1>
      <div className="cart-container">
        <div className="cart-container__descriptions">
          <span className="cart-container__description">image</span>
          <span className="cart-container__description">name</span>
          <span className="cart-container__description">quantity</span>
          <span className="cart-container__description">price</span>
          <span className="cart-container__description">delete</span>
        </div>
        <Divider />
        {cartItems.map(cartItem => (
          <div key={cartItem.id} className="cart-container__items">
            <img className="image cart-container__item" src={cartItem.imageUrl} alt="" />
            <span className="cart-container__item">
              {cartItem.brand} {cartItem.model}
            </span>
            <span className="cart-container__item">
              <FontAwesomeIcon onClick={() => deleteItemFromCart(cartItem)} size="lg" icon={faAngleLeft} className="delete-icon" />
              <span className="m-1">{cartItem.quantity}</span>
              <FontAwesomeIcon onClick={() => addItemToCart(cartItem)} size="lg" icon={faAngleRight} className="delete-icon" />
            </span>
            <span className="cart-container__item">{cartItem.price}</span>
            <span className="cart-container__item">
              <FontAwesomeIcon onClick={() => clearItemFromCart(cartItem.id)} icon={faTrash} className="delete-icon" />
            </span>
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

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: itemId => dispatch(clearItemFromCart(itemId)),
  addItemToCart: item => dispatch(addItemToCart(item)),
  deleteItemFromCart: item => dispatch(deleteItemFromCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
