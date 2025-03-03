import React from 'react'

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
            <h2 className='my-11'>Follow us on: </h2>
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
