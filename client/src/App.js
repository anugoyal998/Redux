import React from 'react';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
function App() {
  return (
     <Router>
     <Header/>
     <Switch>
     <Route path="/" exact component={ProductListing} />
     <Route path="/product/:productId" exact component={ProductDetail} />
     </Switch>
     </Router>
  );
}

export default App;
