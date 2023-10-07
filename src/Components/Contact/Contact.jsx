import React, { useRef, useState } from 'react'

import   './Contact.css'


export default function Contact() {









  return (
    <div className='Contact' id='contact'>
      <div className="subscribe">
<p className='pinter'> newsletter</p>
<h1>subscribe to our newsletter</h1>
<p>and never miss lastest updates</p>
<form  id='fffform' action="" >

<input type="text" placeholder='enter your name' name='name'/>
<input type="email" placeholder='enter your email address' name='email'   />
<input type="text" placeholder='enter your message' name='message'/>
<input className='btttn btn btn-info' type="submit" value="send message"/>


</form>
      </div>
      <div className="contactUs">

<div className="oneContact">
  <ul>
    <li><h1>Contact us</h1></li>
    <li><h1 className='h5'>9w 53ui,si,New York,USA</h1></li>
    <li><p>+1 312 445 1231</p></li>
    <li><p>+1 312 445 1231</p></li>

  </ul>
</div>


<div className="oneContact" id='twocontent' >
  <ul>
    <li><h1>gericht</h1></li>
    <li><p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, et tempora. Harum!</p></li>
  </ul>
  <div className="socialIcons">
    <p><i class="fa-brands fa-facebook"></i></p>
    <p>    <i class="fa-brands fa-instagram"></i></p>
    <p><i class="fa-brands fa-twitter"></i></p>

  </div>
</div>


<div className="oneContact">
  <ul>
    <li><h1>Contact us</h1></li>
    <li><h1 className='h5'>9w 53ui,si,New York,USA</h1></li>
    <li><p>+1 312 445 1231</p></li>
    <li><p>+1 312 445 1231</p></li>

  </ul>
</div>
      </div>
      <div className="footer">
        <p>2021 ESLAM All rights reserved </p>
      </div>
    </div>
  )
}
