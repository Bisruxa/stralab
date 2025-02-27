import React from 'react'
import Card from '../components/cards/Card'
function About() {
  return (
    <div className="w-90 m-12 ">
      <p className="text-2xl font-bold my-10">What they say about us</p>
      <div className="flex">
        <div className="flex flex-row justify-between">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default About
