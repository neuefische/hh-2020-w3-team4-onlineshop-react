import React from 'react'

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
            <button className="button p-10">Add to fishing net</button>
          </li>
        )
      })}
    </>
  )
}
