import React from 'react'
import './Awards.css'
import food from '../Chef/download (1).jpg'
import data from '../../data/Awards.json'
export default function Awards() {
  return (
    <div className='Awards' id='awards'>
        <div className="leftAwardSide">

            <p className='pinter'>Awards & recognition</p>
            <h1>Our Laurels</h1>
            <div className="prizes">
         {
            data.map((a,i)=>(
                <div className="prize" key={i}>
                <div className="id"><p>{a.id}</p></div>
                <div className="contentPrize">
                    <h1  className='h4 winn'>{a.win}</h1>
                    <h1 className='h6'>{a.desc}</h1>
                </div>
            </div>
            ))
         }
            </div>
        </div>
        <div className="rightAwardSide">
            <img src={food} alt="" />
        </div>

    </div>
  )
}
