"use client";
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

function ResponsiveNav() {

  const [shownav, setShownav] = useState(false);

  const openNavhandler = () => setShownav(true);
  const closeNavhandler = () => setShownav(false);
  return (
    <div>
        <Navbar openNav ={openNavhandler}/>
        <MobileNav showNav = {shownav }closeNav ={closeNavhandler}/>
    </div>
  )
}

export default ResponsiveNav