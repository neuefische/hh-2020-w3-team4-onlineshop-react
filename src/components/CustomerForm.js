import React, { useState } from 'react'
import Axios from 'axios'

export default function CustomerForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <h2>Become a member!</h2>
      <form onSubmit={submitHandler} className="form">
        <label className="p-10">
          Your Name:
          <input
            type="text"
            className="input"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </label>
        <label className="p-10">
          Your Email:
          <input
            type="text"
            className="input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </label>
        <button type="submit" value="Submit" className="button p-10 ">
          Register
        </button>
      </form>
    </>
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
