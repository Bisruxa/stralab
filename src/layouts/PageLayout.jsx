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
import Testimonials from '../pages/Testimonials';
import Last from '../pages/Last';
import Footer from '../pages/Footer';
function PageLayout({children}) {
  return (
    <>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="feature">
        {" "}
        <Feature />
      </section>
      <section id="about2">
        {" "}
        <About2 />
      </section>
      <section id="summary">
        {" "}
        <Summary />
      </section>
      <section id="learn">
        {" "}
        <Learn />
      </section>
      <section id="feature2">
        <Feature2 />
      </section>
      <section id="pricing">
        {" "}
        <Pricing />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="last">
        <Last />
      </section>

      <Footer />
    </>
  );
}

export default PageLayout
