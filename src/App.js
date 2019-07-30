import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./componenents/homepage/homepage.component";
import ShopPage from "./componenents/shop/shop.component";
import Header from "./componenents/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
