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
      <label className="p-10 flex">
        Products
        <select
          className="m-10"
          onChange={(event) => getProductID(event.target.value)}
        >
          {list.map((product) => {
            return (
              <option key={product._id} value={product._id}>
                {product.productName}
              </option>
            )
          })}
        </select>
      </label>
      <label className="p-10 flex">
        Quantity
        <input
          className="m-10"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        ></input>
      </label>
    </>
  )
}
