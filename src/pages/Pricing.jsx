import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Button from "../components/common/Button";
import { VscPass } from "react-icons/vsc";
function Pricing() {
  return (
    <div className="w-90 m-12 ">
      <h2 className="text-[hsl(138,42%,40%)]">| PRICING</h2>
      <p className="text-4xl font-bold">
        Choose the pricing that <br /> works best for you
      </p>
      <div className="bg-gray-100 rounded-lg mt-10 flex p-6 ">
        <div className="flex-1 bg-gray-100">
          <h2 className="font-bold text-2xl my-3">Monthly Subscription</h2>
          <p>
            Fuel your product workflow with more advanced research freatures
          </p>
          <div className="flex">
            <p className="text-4xl font-bold">$49</p>
            <small className="pt-4">/Month</small>
          </div>
          <Button className="w-40 h-10 bg-[#35b55b] rounded-[20px] my-11 text-white flex justify-center items-center gap-x-3">
            EnrollNow <FaAngleRight />
          </Button>
          <p className="flex gap-x-2 my-1">
            <VscPass className="text-[#35b55b]" /> Money back guarantee
          </p>
          <p className="flex gap-x-2 my-1">
            <VscPass className="text-[#35b55b]" />
            Scalable growth tools
          </p>
          <p className="flex gap-x-2 w-full my-1">
            <VscPass className="text-[#35b55b]" /> Access to members-only
            community
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl my-3">One-Time Payment</h2>
          <p>Scale product research and learning across your company</p>
          <div className="flex">
            <p className="font-bold text-4xl">$299</p>
            <small className="text-[hsl(138,42%,48%)] font-bold pt-4">
              (Save 20%)
            </small>
          </div>
          <Button className="w-40 h-10 bg-[#35b55b] rounded-[20px] my-11 text-white flex justify-center items-center gap-x-3">
            EnrollNow <FaAngleRight />
          </Button>
          <p className="font-semibold">Everything in Basic,and</p>
          <p className="flex gap-x-2 my-1">
            <VscPass className="text-[#35b55b]" />
            Scalable growth tools
          </p>
          <p className="flex gap-x-2 w-full my-1">
            <VscPass className="text-[#35b55b]" /> Access to members-only
            community
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
