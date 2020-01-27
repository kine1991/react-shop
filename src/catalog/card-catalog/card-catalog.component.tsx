import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { addItemToCart } from '../../redux/cart/cart.action';
import { Card } from './card-catalog.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const CatalogItem = ({ item, cartItems, addItemToCart }) => {
  const {
    push,
    location: { pathname }
  } = useHistory();

  React.useEffect(() => {
    // console.log('kkk');
    localStorage.setItem('car-shop-cartItems', JSON.stringify(cartItems));
  }, [addItemToCart, cartItems]);

  return (
    <Card>
      <div className="card">
        <img className="card__img" src={item.imageUrl} alt="" />
        <div className="card__name">
          <div>
            {item.brand} {item.model}
          </div>
        </div>
        {Object.keys(item.property)
          .slice(2)
          .map(propertyField => (
            <div key={propertyField} className="card__property">
              <strong>{item.property[propertyField].name}</strong>
              <div>{item.property[propertyField].value}</div>
            </div>
          ))}
        <button onClick={() => push(`${pathname}/${item.id}`)} className="card__btn">
          Open
        </button>
        <FontAwesomeIcon onClick={() => addItemToCart(item)} icon={faCartPlus} size="lg" className="cart" />
      </div>
    </Card>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: data => dispatch(addItemToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogItem);
