import React, { useState } from 'react'
import './Chef.css'
import chef from "./download.png"
import { Cheff } from '../../data/Chef'

export default function Chef() {
let lengthChef=Cheff.length;

    const [select, setselect] = useState(0)

  return (

<div className="AllChef">
    <h1>chef</h1>
<div className='Chef'>
<div className="imgChef">
    <img src={Cheff[select].img} alt="" />

    <div className="arrows">
<p> <i   onClick={()=>{
    select===0?setselect(lengthChef-1):setselect((prev)=>prev-1)

}}    class="fa-solid fa-angle-left"></i></p> 
<p> <i  onClick={()=>{
    select===lengthChef-1?setselect(0):setselect((prev)=>prev+1)
}}    class="fa-solid fa-angle-right"></i></p> 

   </div>
</div>
<div className="contentChef">


    <p className='pinter'>Chef is word</p>
<h1>what we believe in</h1>
<div className="paraChef">
    <p>{Cheff[select].content}</p>

</div>
<div className="nameAndDO">
    <p>{Cheff[select].name}</p>
    <h2>{Cheff[select].do}</h2>
</div>
</div>

    </div>
</div>

 
  )
}
