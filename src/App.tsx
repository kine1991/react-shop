import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderComponent from './header/header.component';
import MainComponent from './main/main.component';
import CustomLayoutComponent from './helper/component/custom-layout/custom-layout.component';
import CatalogComponent from './catalog/catalog.component';
import ProductComponent from './catalog/product/product.component';
import LoginComponent from './auth/login/login.component';
import RegisterComponent from './auth/register/register.component';
import Spinner from './helper/component/spinner/spinner.component';
import { setCurrentUserAsync, logoutAsync } from './redux/user/user.action';
import { loadCartFromLS } from './redux/cart/cart.action';
import SettingsComponent from './settings/settings.component';
import CartComponent from './cart/cart.component';

const App = ({ currentUser, isFetching, cartItems, setCurrentUser, loadCartFromLS, logout }) => {
  React.useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);

  React.useEffect(() => {
    const loadCardFromLS = JSON.parse(localStorage.getItem('car-shop-cartItems')!);
    loadCartFromLS(loadCardFromLS);
  }, [loadCartFromLS]);

  if (isFetching) {
    return <Spinner />;
  }
  return (
    <React.Fragment>
      <HeaderComponent currentUser={currentUser} logout={logout} />
      <CustomLayoutComponent>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
          <Route path="/cart" component={CartComponent} />
          <Route exact path="/catalog" component={CatalogComponent} />
          <Route exact path="/catalog/:productId" component={ProductComponent} />
          <Route path="/about" component={() => <h1>About</h1>} />
          <Route path="/settings" component={SettingsComponent} />
          <Route component={() => <h2>NotMatch</h2>} />
        </Switch>
      </CustomLayoutComponent>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  isFetching: state.user.isFetching,
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: () => dispatch(setCurrentUserAsync()),
  loadCartFromLS: data => dispatch(loadCartFromLS(data)),
  logout: () => dispatch(logoutAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
