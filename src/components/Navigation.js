import React from 'react'
import { NavLink } from 'react-router-dom'
import fishingBoat from '../assets/boat.png'
import fishingRod from '../assets/fishing-rod.png'
import fisherman from '../assets/fisherman.png'
import fishernet from '../assets/trap.png'

export default function () {
  return (
    <nav>
      <ul className="flex-row">
        <li className="nav-item flex">
          <NavLink exact to="/">
            {' '}
            <img className="nav-img" src={fishingBoat} alt="fishingboat" /> Home
          </NavLink>
        </li>
        <li className="nav-item flex">
          <NavLink to="/products">
            <img className="nav-img" src={fishingRod} alt="fishingrod" />
            Products
          </NavLink>
        </li>
        <li className="nav-item flex">
          <NavLink to="/customers">
            {' '}
            <img className="nav-img" src={fisherman} alt="fisherman" />
            Customers
          </NavLink>
        </li>
        <li className="nav-item flex">
          <NavLink to="/orders">
            <img className="nav-img" src={fishernet} alt="fishernet" />
            Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
