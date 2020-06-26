import React from 'react'

import './App.scss'
import ProductList from './components/ProductList'
import CustomerPage from './components/CustomerPage'
import Home from './components/Home'
import Order from './components/Order'
import Navigation from './components/Navigation'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main-grid">
      {' '}
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/customers">
          <CustomerPage />
        </Route>
        <Route path="/orders">
          <Order />
        </Route>
      </Switch>
    </div>
  )
}

export default App
