import React from 'react'

import './App.scss'
import ProductList from './components/ProductList'
import CustomerForm from './components/CustomerForm'

function App() {
  return (
    <div className="main-grid">
      <h1>Welcome to Fischer & Co. KG</h1>
      <section className="scrollable scrollfix">
        <ProductList />
      </section>
      <CustomerForm />
    </div>
  )
}

export default App
