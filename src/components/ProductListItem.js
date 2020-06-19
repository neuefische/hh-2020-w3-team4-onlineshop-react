import React from 'react'

export default function ProductListItem({ list }) {
  return (
    <>
      {list.map((product, index) => {
        return (
          <li key={product + index}>
            <h2>{product.productName}</h2>
            <p>{product.productPrice}</p>
            <p>{product.productDescription}</p>
          </li>
        )
      })}
    </>
  )
}
