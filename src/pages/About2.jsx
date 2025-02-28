import React from 'react'
import Button from '../components/common/Button';
import { FaAngleRight } from "react-icons/fa6";
import image from '../assets/image.png'
function About2() {
  return (
    <section className="w-90 m-12 flex justify-between flex-row">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2 className="text-[hsl(138,42%,40%)]">| ABOUT THE COURSE</h2>
        <p className="text-4xl font-bold">
          Journey into Marketing Mastey:Unveiling The Marketing Toolkit
        </p>
        <p>
          Welcome to The Marketing Toolkit,your comprehensive guide to mastering
          modern marketing strategies.
        </p>
        <Button className="w-40 h-10 bg-[#35b55b] rounded-[20px] my-11 text-white flex justify-center items-center gap-x-3">
          EnrollNow <FaAngleRight />
        </Button>
        <div className="flex">
          <div className="">
            <h2 className="font-bold">Premium Resources</h2>
            <p>
              Gain exclusive access to a treasure trive of premium resources
              handpicked by industry experst.
            </p>
            <a href="#" className="text-[#35b55b]">
              Download Resources
            </a>
          </div>
          <div className="">
            <h2 className="font-bold">Training Materials Included</h2>
            <p>
              Enjoy comprehensive learning with all inclusive training materials
              provided
            </p>
            <a href="#" className="text-[#35b55b]">
              Download Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About2
