import React from "react";
import image from "../assets/image.png";
import { VscPass } from "react-icons/vsc";
function About2() {
  return (
    <section className="w-90 m-12 flex justify-between flex-row">
      <div>
        <h2 className="text-[hsl(138,42%,40%)] font-semibold">
          | WHAT YOU'LL LEARN
        </h2>
        <p className="text-3xl font-bold my-4">
          Empower Your Skills: <br />
          Unveriling the Proficiencies You'II Master
        </p>
        <p className="flex my-4">
          <VscPass className="text-[#35b55b] mr-3" />
          By the end of this course,you'll be able to:
        </p>
        <p className="flex my-4">
          <VscPass className="text-[#35b55b] mr-3" /> Develop a comprehensive
          marketing strategy
        </p>
        <p className="flex my-4">
          <VscPass className="text-[#35b55b] mr-3" /> Utilize various digital
          marketing channels effictively
        </p>
        <p className="flex my-4">
          <VscPass className="text-[#35b55b] mr-3" /> Analyze and interpret
          marketing data for informed decisions
        </p>
        <p className="flex my-4">
          <VscPass className="text-[#35b55b] mr-3" /> Optimize campaign for
          maximum impact
        </p>
        <p className="flex">
          <VscPass className="text-[#35b55b]" /> Implement advanced marketing
          tactics to stay ahead
        </p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </section>
  );
}

export default About2;
