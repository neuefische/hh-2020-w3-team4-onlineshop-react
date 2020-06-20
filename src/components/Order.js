import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OrderItems from './OrderItems'

export default function Order() {
  const [productList, setProductList] = useState([])
  const [productID, setProductID] = useState('')
  const [quantity, setQuantity] = useState(0)

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
      <form onSubmit={submitHandler} className="form" function={setProductID}>
        <OrderItems
          list={productList}
          getProductID={getProductID}
          setQuantity={getQuantity}
          initialQuanity={quantity}
        />
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

  function getProductID(value) {
    setProductID(value)
  }
  function getQuantity(value) {
    setQuantity(value)
  }
}
