import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// import HeaderComponent from './header/header.component';
import MainComponent from './main/main.component';
import CustomLayoutComponent from './helper/component/custom-layout/custom-layout.component';
import CatalogComponent from './catalog/catalog.component';
import ProductComponent from './catalog/product/product.component';
import LoginComponent from './auth/login/login.component';
import RegisterComponent from './auth/register/register.component';
import Spinner from './helper/component/spinner/spinner.component';
import { setCurrentUserAsync } from './redux/user/user.action';
import { loadCartFromLS } from './redux/cart/cart.action';
import SettingsComponent from './settings/settings.component';
import CartComponent from './cart/cart.component';
import NavbarComponent from './header/navbar/navbar.component';

const App = ({ isFetching, setCurrentUser, loadCartFromLS }) => {
  React.useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);

  React.useEffect(() => {
    let fromLS: any = localStorage.getItem('car-shop-cartItems');
    if (!Array.isArray(JSON.parse(fromLS))) {
      fromLS = JSON.stringify([]);
    }
    const loadCardFromLS = JSON.parse(fromLS);
    loadCartFromLS(loadCardFromLS);
  }, [loadCartFromLS]);

  if (isFetching) {
    return <Spinner color="gray" />;
  }
  return (
    <React.Fragment>
      <NavbarComponent />
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
  isFetching: state.user.isFetching
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: () => dispatch(setCurrentUserAsync()),
  loadCartFromLS: data => dispatch(loadCartFromLS(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
