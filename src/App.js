import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './common/Pages/Home';
import Favorited from './common/Pages/Favorited';
import Cart from './common/Pages/Cart';
import Checkout from './common/Pages/Checkout';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favoritos" component={Favorited} />
      <Route exact path="/carrinho" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  );
}

export default App;
