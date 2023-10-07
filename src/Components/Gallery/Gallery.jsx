import React, { useState } from 'react'

import {Galleryy} from '../../data/ImageGallery'

import './Gallery.css'

export default function Gallery() {
const [select, setselect] = useState(0)



let LimAGEGallery=Galleryy.length

  return (
    <div className='Gallery' id='gallery'>
<div className="leftGallery">
    <p className='pinter'>instgram</p>
    <h1 className="titleGallery">photo gallery</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quamLorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quam..</p>
    <button>view more</button>
</div>
<div className="imagesGAllery">
<div className="imggame"   >
    <div className="layout">
        <p>    <i class="fa-brands fa-twitter"></i>
</p>
    </div>
    <img src={Galleryy[select].img} alt="" />

</div>
<div className="arrowsGallery">
<p ><i onClick={()=>select===0?setselect(LimAGEGallery-1):setselect((prev)=>prev-1)} className="fa-solid fa-angle-left"></i></p>
<p ><i  onClick={()=>select===LimAGEGallery-1? setselect(0) : setselect((prev)=>prev+1)} className="fa-solid fa-angle-right"></i></p>

</div>
</div>
    </div>
  )
}
