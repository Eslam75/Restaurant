import React from 'react'
import './Home.css'


import food from './food.jpg'

export default function Home() {
  return (
    <div className='Home' id='home'>
      <div className="leftSide">
        <p className='pinter'>chase the new flavour</p>
        <h1>the key to fine dining</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium minus, reprehenderit fugit maxime ut eum nihil inventore.</p>
        <button>explore menu</button>
      </div>
      <div className="RightSide">

        <img src={food} alt="food" />
      </div>

    </div>
  )
}
