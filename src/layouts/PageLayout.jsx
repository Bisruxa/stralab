import React from 'react'
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import About from "../pages/About";
import Feature from '../pages/Feature';
import About2 from '../pages/About2';
import Summary from '../pages/Summary';
import Learn from '../pages/Learn';
function PageLayout({children}) {
  return (
    <>
      <Navbar/>
      {children}
      <Hero/>
      <About/>
      <Feature/>
     <About2/>
     <Summary/>
     <Learn/>
    </>
  )
}

export default PageLayout
