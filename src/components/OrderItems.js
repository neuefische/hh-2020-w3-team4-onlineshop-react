import React from 'react'

export default function OrderItems({
  list,
  getProductID,
  setQuantity,
  initialQuanity,
}) {
  const quantity = initialQuanity

  return (
    <>
      <label>
        Products
        <select onChange={(event) => getProductID(event.target.value)}>
          {list.map((product) => {
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
    </>
  )
}
