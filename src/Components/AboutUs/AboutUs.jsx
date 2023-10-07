import React from 'react'
import './AboutUs.css' 
import skena from '../Home/skena.jpg' 
export default function AboutUs() {
  return (
    <div className='AboutUs' id='about'>
        <div className="about">
            <h1 className='pinter'>About Us.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eligendi voluptas provident placeat cupiditate ab?</p>
      <button>Know More</button>
        </div>
        <div className="immmgae">
            <img src={skena} alt="" />
        </div>
       <div className="history">
       <h1 id='hihst' className='pinter'>About Us.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eligendi voluptas provident placeat cupiditate ab?</p>
<button>Know More</button>
       </div>
    </div>
  )
}
