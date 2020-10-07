import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home/Home';
import RestaurantListPage from './components/restaurantList/RestaurantList';
import DetailPage from './components/detail/Detail';
import NotFoundPage from './components/notFound/NotFound';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/restaurants/categories/:categoryId" component={RestaurantListPage}/>
        <Route path="/restaurants/:restaurantId" component={DetailPage}/>
        <Route component={NotFoundPage} />
      </Switch>
      <Cart />
    </div>
  );
}

export default App;
