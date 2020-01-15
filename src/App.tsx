import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderComponent from './header/header.component';
import MainComponent from './main/main.component';
import LayoutComponent from './helper/container/layout/layout.component';
import { CatalogComponent } from './catalog/catalog.component';
// import Button from 'react-bootstrap/Button'

const App: React.FunctionComponent  = () => {

  return (
    <React.Fragment>
      <HeaderComponent/>
      <LayoutComponent>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/catalog/:categoryId" component={CatalogComponent} />
          <Route path="/about" component={()=><h1>About</h1>} />
          <Route component={() => <h2>NotMatch</h2>}/>
        </Switch>
      </LayoutComponent>
    </React.Fragment>
    
  );
}

export default App;
