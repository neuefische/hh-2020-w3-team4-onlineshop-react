import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
      setUser(user)
    }
  }, [])

  useEffect(() => {
    if (isLoggedIn === true) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user, isLoggedIn])

  return (
    <section className="flex">
      {isLoggedIn === false ? (
        <>
          <h2>Already have an account?</h2>
          <form onSubmit={submitHandlerLogin} className="form">
            {' '}
            <label className="p-10">
              Insert your email here:{' '}
              <input
                type="text"
                value={email}
                className="input"
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </label>
            <button className="button p-10">Login</button>
          </form>
        </>
      ) : (
        <>
          <h2>Welcome {user.customerName}</h2>
          <p>You have successfully logged in!</p>
          <button className="button p-10" onClick={logOut}>
            Logout
          </button>
        </>
      )}
    </section>
  )

  function submitHandlerLogin(event) {
    event.preventDefault()
    axios
      .post('http://localhost:8085/login', {
        customerEmail: email,
      })
      .then((response) => {
        setUser(response.data)
        setIsLoggedIn(true)
      })
  }

  function logOut(event) {
    event.preventDefault()
    setIsLoggedIn(false)
  }
}
