import React from "react";
import Button from "../components/common/Button";
import { FaAngleRight } from "react-icons/fa6";
import image2 from "../assets/image2.jpg";

function Summary() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="w-90 m-12">
        <div>
          <h2 className="text-[hsl(138,42%,40%)] font-bold my-4">
            | COURSE SUMMARY
          </h2>
          <p className="font-bold text-4xl">
            Navigating The Marketing Landscape:
            <br />
            Your Roadmap to Success
          </p>
        </div>
        <div className="flex">
          <div className="bg-green-900 rounded-lg mt-10 text-white flex p-6">
            <div className="flex flex-col items-start pr-3 border-r-2 border-white gap-y-28">
              <h2>01</h2>
              <p className="text-lg font-bold [writing-mode:vertical-rl]">
                Fundamentals of Marketing
              </p>
            </div>

            <div className="pl-6 flex gap-x-10">
              <div className="">
                <h2 className="text-white text-3xl font-semibold my-4">
                  Fundamentals of Marketing
                </h2>
                <p>
                  Deleve into the foundational pillars of marketing, where{" "}
                  <br />
                  you'll explore the core principles that underpin <br />
                  successful marketing strategies.
                </p>
                <Button className="w-40 h-10 bg-[#35b55b] rounded-[20px] my-11 text-white flex justify-center items-center gap-x-3">
                  Next <FaAngleRight />
                </Button>
              </div>
              <div>
                <img src={image2} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-green-200 rounded-lg mt-10 mx-5 w-16 ml-10  text-green-900 text-center">
            <h2 className="font-bold pb-[145px]">02</h2>
            <p className="text-lg font-bold [writing-mode:vertical-rl]">
              DigitalMarketingEssentials
            </p>
          </div>
          <div className="bg-green-200 rounded-lg mt-10 mx-5 w-16 gap-y-28  text-green-900 text-center ">
            <h2 className="font-bold pb-[145px]">03</h2>
            <p className="text-lg font-bold [writing-mode:vertical-rl]">
              DataAnalytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
