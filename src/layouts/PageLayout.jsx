import React from 'react'
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import About from "../pages/About";
function PageLayout({children}) {
  return (
    <>
      <Navbar/>
      {children}
      <Hero/>
      <About/>
    </>
  )
}

export default PageLayout
