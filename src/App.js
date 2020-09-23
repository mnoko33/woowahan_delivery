import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/restaurants/categories/:categoryId" component={Category}/>
        <Route path="/restaurants/:storeId" component={Detail}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
