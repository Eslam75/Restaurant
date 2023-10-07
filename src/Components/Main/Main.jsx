import React, { useState } from 'react'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import './Main.css'
import AboutUs from '../AboutUs/AboutUs'
import MenuToday from '../Today/MenuToday'
import Chef from '../Chef/Chef'
import Video from '../Video/Video'
import Awards from '../Awards/Awards'
import Gallery from '../Gallery/Gallery'
import Contact from '../Contact/Contact'
import Sidebar from '../Sidebar/Sidebar'

export default function Main() {

  const [openBar, setopenBar] = useState(false)

  return (
    <>
    
  <div className="HommmePage">
  <Navbar openBar={openBar} setopenBar={setopenBar}/>
<Home/>
  </div>
  <AboutUs/>
  <MenuToday/>
<Chef/>
<Video/>
<Awards/>
<Gallery/>
<Contact/>
<Sidebar openBar={openBar} setopenBar={setopenBar}/>


    </>
  )
}
