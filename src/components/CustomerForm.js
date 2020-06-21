import React, { useState } from 'react'
import Axios from 'axios'
import fishes from '../assets/fishes.png'

export default function CustomerForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)

  return (
    <section className="flex">
      {isRegistered === false ? (
        <>
          <h2>Join the fisher family</h2>
          <form onSubmit={submitHandler} className="form">
            Registration form
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
          )
        </>
      ) : (
        <>
          <h2>Welcome to the fisher family!</h2>
          <p>You have succesfully registered.</p>
          <img src={fishes} alt="fishes" />
        </>
      )}
    </section>
  )

  function submitHandler(event) {
    event.preventDefault()
    Axios.put('http://localhost:8085/customers/create', {
      customerName: name,
      customerEmail: email,
    })
      .then(() => setIsRegistered(true))
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }
}
