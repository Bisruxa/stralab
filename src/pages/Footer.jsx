import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-green-950 h-screen mt-[-50px] text-white">
        <div className="w-90 m-12 flex pt-32">
          <div className="flex-1">
            <p>
              We make onboarding new employees ridiculously <br />
              easy. On day one ,they're ready to go.And retaining <br /> them is
              easier.
            </p>
            <div className="flex items-center gap-4 my-11">
              <h2>Follow us on:</h2>
              <FaLinkedin className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaYoutube className="text-2xl" />
              <FaFacebookF className="text-2xl" />
            </div>
          </div>
          <div className=" text-white p-10">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h2 className="">Home</h2>
                <h2>Why Us</h2>
                <h2>Deals</h2>
              </div>
              <div>
                <h2 className="">Service</h2>
                <h2>Case Studies</h2>
                <h2>Plan</h2>
              </div>
              <div>
                <h2 className="">Testimonial</h2>
                <h2>About</h2>
                <h2>FAQ</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
