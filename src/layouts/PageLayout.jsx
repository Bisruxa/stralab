import React from 'react'
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import About from "../pages/About";
import Feature from '../pages/Feature';
import About2 from '../pages/About2';
import Summary from '../pages/Summary';
import Learn from '../pages/Learn';
import Feature2 from '../pages/Feature2';
import Pricing from '../pages/Pricing';
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
     <Feature2/>
     <Pricing/>
    </>
  )
}

export default PageLayout
