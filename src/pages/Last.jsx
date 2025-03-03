import React from "react";
import Button from "../components/common/Button";
import image from "../assets/image.png";
import { FaAngleRight } from "react-icons/fa6";
import { VscPass } from "react-icons/vsc";
function Hero() {
  return (
    <>
      <div className="flex justify-between flex-row text-white bg-green-900">
        <div className="w-90 m-12">
          <h2 className="font-bold text-5xl my-6 ">
            Mastering Proven Strategies That Drive <br /> Real Results
          </h2>
          <p className="pt-4">
            Unleash the power of stategic marketin with out comprehensive
            course,designed to empower you with the skills and knowledge
            necessary to navigate the dynamic landscape of modern business.
          </p>
          <Button className="w-40 h-10 bg-[#35b55b] rounded-[20px] my-11 text-white flex justify-center items-center gap-x-3">
            EnrollNow <FaAngleRight />
          </Button>
          <div className="flex flex-wrap">
            <p className="flex gap-x-2 w-1/2 my-1">
              <VscPass className="text-[#35b55b]" /> Money back guarantee
            </p>
            <p className="flex gap-x-2 w-1/2 my-1">
              <VscPass className="text-[#35b55b]" />
              Scalable growth tools
            </p>
            <p className="flex gap-x-2 w-full my-1">
              <VscPass className="text-[#35b55b]" /> Access to members-only
              community
            </p>
          </div>
        </div>
        <div>
          <img src={image} alt="" className="my-12" />
        </div>
      </div>
      {/* <div>
        <p>{VscPass} Money back guarantee</p>
        <p>{VscPass} Scalable growth tools</p>
        <p>{VscPass} Access to members-only community</p>
      </div> */}
    </>
  );
}

export default Hero;
