import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function CreateOrder() {
  const [productList, setProductList] = useState([])
  const [productID, setProductID] = useState('')

  const [quantity, setQuantity] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:8085/products')
      .then((response) => response.data)
      .then((list) => setProductList(list))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section>
      <h2>Place your order</h2>
      <form onSubmit={submitHandler} className="form">
        <label>
          Products
          <select
            value={'product'}
            onChange={(event) => setProductID(event.target.value)}
          >
            {productList.map((product) => {
              return (
                <option key={product._id} value={product._id}>
                  {product.productName}
                </option>
              )
            })}
          </select>
        </label>
        <label>
          Quantity
          <input
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          ></input>
        </label>
        <button>Order now</button>
      </form>
    </section>
  )

  function submitHandler(event) {
    event.preventDefault()
    axios.put('http://localhost:8085/orders/create/5ee3ba86b00776528056253b', {
      items: [
        {
          product_id: productID,
          quantity: Number(quantity),
        },
      ],
    })
    console.log({ productID }, { quantity })
  }
}
