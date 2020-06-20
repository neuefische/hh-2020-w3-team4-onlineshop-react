import React from 'react'

import './App.scss'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="main-grid">
      <h1>Welcome to Fischer & Co. KG</h1>
      <section className="scrollable scrollfix">
        <ProductList />
      </section>
    </div>
  )
}

export default App
