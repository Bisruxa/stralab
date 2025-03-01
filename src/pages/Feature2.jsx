import React from 'react'
import Button from '../components/common/Button'
import { FaAngleRight } from "react-icons/fa6";
function Feature() {
  return (
    <div className="bg-[hsl(138,42%,40%)]">
      <section className="bg-[hsl(138,42%,40%)] h-46 my-10 flex text-white w-90 m-12 pt-10">
        <div className='flex-1'>
          <h2 className="text-white text-3xl">
            Ready to supercharge <br /> your maeketing skills?
          </h2>
        </div>
        <div>
          <h2>
            Our open,positive,and proactive approach helps us find <br />
            ways to align your work.
          </h2>
          <Button className="w-40 h-10 bg-white rounded-[20px] my-11 text-[#35b55b]  flex justify-center items-center gap-x-3">
            Get started now
            <FaAngleRight />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Feature
