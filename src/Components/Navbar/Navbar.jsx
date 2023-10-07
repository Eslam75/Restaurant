import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar({openBar,setopenBar}) {
  return (
    <div className='Navbar'>
        <div className="logo">
            <h1>gericht</h1>
            
        </div>
        <div className="menulist">
            <ul>

       <a id='navlink'  href='#home'> <li>home</li> </a> 
    
        <a id='navlink' href='#about'> <li>about</li> </a>     

        <a id='navlink' href='#menu'> <li>menu</li> </a>     

        <a id='navlink' href='#awards'> <li>awards</li> </a>     

         <a id='navlink' href='#contact'> <li>contact</li> </a>     

            </ul>
        </div>
        <div className="register">
            <h1>login/registration</h1>
            <p>book table</p>
        </div>

        <div onClick={()=>setopenBar(!openBar)} className={"bars "+(openBar&&"activeNav")}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    
    </div>
  )
}

//onClick={()=>setopenBar(!openBar)} id='icon' className={"bars "+(openBar&&"activeNav")}