import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout}></Route>
              <Route path="/orders" component={Orders}></Route>
              <Route path="/" component={BurgerBuilder}></Route>
            </Switch>
          </Layout>
        </div>
    );
  }
}

export default App;
