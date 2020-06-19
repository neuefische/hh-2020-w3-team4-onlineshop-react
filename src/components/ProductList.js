import React, { useState, useEffect } from 'react'
import ProductListItem from './ProductListItem'
import axios from 'axios'

export default function ProductList() {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8085/products')
      .then((response) => response.data)
      .then((list) => setProductList(list))
      .catch((error) => console.log(error))
  }, [])
  // console.log(productList)
  return (
    <ul className="flex">
      <ProductListItem list={productList} />
    </ul>
  )
}
