import React, { useState } from 'react'
import fishes from '../assets/fishes.png'
import Login from './Login'
import RegistrationForm from './RegistrationForm'

export default function CustomerPage() {
  const [isRegistered, setIsRegistered] = useState(false)

  return (
    <section className="flex">
      {isRegistered === false ? (
        <>
          <h2>Join the fisher family</h2>
          <RegistrationForm updateRegistrationState={setIsRegistered} />

          <Login />
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
}
