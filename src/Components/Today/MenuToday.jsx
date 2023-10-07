import React from 'react'
import './MenuToday.css'
import {bers} from '../../data/Beers'
import food from '..//Today/images (2).jpg' 

import {menuSpecial} from '../../data/Coktails'

export default function MenuToday() {
  return (
    <div className='MenuToday' id='menu'>
        <p className='menupara'>
        menu that fits you palatte
        </p>
        <h1>Today special</h1>
   <div className="containerdrinKSpecial">
   <div className="Cocktails">    
      {
    menuSpecial.map((c)=>(
<div className="coktail">
<h1>{c.titlemenu}</h1>

   <div className="drink">
   <div className="nameCock">
        <h1>{c.title}</h1>
        <p>{c.det}</p>
    </div>
    <div className="price">
        <p className='price' >{c.price}</p>
    </div>
   </div>
</div>
    ))
}
        </div>

        <div className="imgMenuToday">
            <img src={food} alt="" />

        </div>

        <div className="winebier">
        {
    bers.map((c)=>(
<div className="coktail">
<h1>{c.titlemenu}</h1>

   <div className="drink">
   <div className="nameCock">
        <h1>{c.title}</h1>
        <p>{c.det}</p>
    </div>
    <div className="price">
        <p className='price' >{c.price}</p>
    </div>
   </div>
</div>
    ))
}
        </div>
   </div>

    </div>
  )
}
