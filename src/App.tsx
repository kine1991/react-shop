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

const App = ({ currentUser, isFetching, setCurrentUser, logout }) => {
  React.useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);

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
          <Route exact path="/catalog/:categoryId" component={CatalogComponent} />
          <Route exact path="/catalog/:categoryId/:productId" component={ProductComponent} />
          <Route path="/about" component={() => <h1>About</h1>} />
          <Route component={() => <h2>NotMatch</h2>} />
        </Switch>
      </CustomLayoutComponent>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  isFetching: state.user.isFetching
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: () => dispatch(setCurrentUserAsync()),
  logout: () => dispatch(logoutAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
