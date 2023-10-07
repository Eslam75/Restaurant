import React from 'react'
import './Sidebar.css'
export default function Sidebar({openBar,setopenBar}) {
  return (
    <div className={'Sidebar ' +(openBar&&"activeSidebar")}>
         <div className={"sidemenulist"}>
         <div onClick={()=>setopenBar(!openBar)} className={"bars "+(openBar&&"activeNav")}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    
            <ul>

       <a  id='navlink'  href='#home'> <li onClick={()=>setopenBar(false)}>home</li> </a> 
    
        <a id='navlink' href='#about'> <li onClick={()=>setopenBar(false)}>about</li> </a>     

        <a id='navlink' href='#menu'> <li onClick={()=>setopenBar(false)}>menu</li> </a>     

        <a id='navlink' href='#awards'> <li onClick={()=>setopenBar(false)}>awards</li> </a>     

         <a id='navlink' href='#contact'> <li onClick={()=>setopenBar(false)}>contact</li> </a>     

            </ul>
    </div>
    </div>

  )
}
