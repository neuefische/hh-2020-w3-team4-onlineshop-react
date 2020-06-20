import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.scss'
import ProductList from './components/ProductList'
import CustomerForm from './components/CustomerForm'
import Home from './components/Home'
import fishingBoat from './assets/boat.png'
import fishingRod from './assets/fishing-rod.png'
import fisherman from './assets/fisherman.png'

function App() {
  return (
    <>
      <Router>
        <div className="main-grid">
          <nav>
            <ul className="flex-row">
              <li className="nav-item flex">
                <Link to="/">
                  {' '}
                  <img
                    className="nav-img"
                    src={fishingBoat}
                    alt="fishingboat"
                  />
                  Home
                </Link>
              </li>
              <li className="nav-item flex">
                <img className="nav-img" src={fishingRod} alt="fishingrod" />
                <Link to="/products">Products</Link>
              </li>
              <li className="nav-item flex">
                <img className="nav-img" src={fisherman} alt="fisherman" />

                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/users">
              <CustomerForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
