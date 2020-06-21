import React, { useState, useEffect } from 'react'
import axios from 'axios'
import OrderItems from './OrderItems'
import shipping from '../assets/phishing.png'

export default function Order() {
  const [productList, setProductList] = useState([])
  const [productID, setProductID] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [isOrdered, setIsOrdered] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:8085/products')
      .then((response) => response.data)
      .then((list) => setProductList(list))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="flex">
      <h2>Place your order</h2>
      {isOrdered === false ? (
        <form onSubmit={submitHandler} className="form">
          <OrderItems
            list={productList}
            getProductID={getProductID}
            setQuantity={getQuantity}
            initialQuanity={quantity}
          />
          <button className="button p-10">Order now</button>
        </form>
      ) : (
        <>
          <p className="text-justify p-20"> Thank you for your order! </p>
          <p className="text-justify p-20">
            We will prepare your order for shipment!
          </p>

          <img src={shipping} alt="shipping" />
        </>
      )}
    </section>
  )

  function submitHandler(event) {
    event.preventDefault()
    axios
      .put('http://localhost:8085/orders/create/5ee3ba86b00776528056253b', {
        items: [
          {
            product_id: productID,
            quantity: Number(quantity),
          },
        ],
      })
      .then(() => setIsOrdered(true))
      .catch((error) => console.log(error))
  }

  function getProductID(value) {
    setProductID(value)
  }
  function getQuantity(value) {
    setQuantity(value)
  }
}
