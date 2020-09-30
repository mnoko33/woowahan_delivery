import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './containers/Header/Header';
import HomePage from './pages/HomePage';
import RestaurantListPage from './pages/RestaurantListPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';

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
    </div>
  );
}

export default App;
