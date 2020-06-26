import React from 'react'
import Button from './Button'

export default function ProductListItem({ list }) {
  return (
    <>
      {list.map((product, index) => {
        return (
          <li key={product + index} className="product-card">
            <h2>{product.productName}</h2>
            <img src={product.productPicture} alt={product.productName} />
            <p>Preis: {product.productPrice} €</p>
            <p>{product.productDescription}</p>
            <Button text="Add to fishing net" />
          </li>
        )
      })}
    </>
  )
}
