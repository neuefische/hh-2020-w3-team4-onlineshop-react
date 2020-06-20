import React, { useState } from 'react'
import Axios from 'axios'

export default function CustomerForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <form onSubmit={submitHandler} className="flex">
      <label>
        Your Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </label>
      <label>
        Your Email:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </label>
      <button type="submit" value="Submit">
        Register
      </button>
    </form>
  )

  function submitHandler(event) {
    event.preventDefault()
    Axios.put('http://localhost:8085/customers/create', {
      customerName: name,
      customerEmail: email,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }
}
