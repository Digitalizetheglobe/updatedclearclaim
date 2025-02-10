import React, { useState, useEffect } from "react";
import WhatClientSay from "../../app/whyclearclaim/whatclientsay";

// Counter Component
const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in milliseconds
    const increment = Math.ceil(target / (duration / 50)); // Calculate step size

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counterInterval);
      } else {
        setCount(start);
      }
    }, 50); // Update every 50ms for a smooth effect

    return () => clearInterval(counterInterval);
  }, [target]);

  return <>{count.toLocaleString()}</>; // Removed `+` after count
};

export default function NumberTalk() {
  return (
    <>
      <div className="p-16 mb-12">
        <div className="mx-auto text-center">
          <h2 className="md:text-3xl text-xl font-semibold md:!leading-[55px] text-[#00BE5D]">
            <span className="text-[#283655]">Numbers</span> Talk
          </h2>
        </div>
        <div className="bg-[#141b2a] px-4 py-16 mt-12">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-12 lg:max-w-7xl sm:max-w-2xl max-w-sm mx-auto">
            {/* Companies Worked With */}
            <div className="text-center bg-white px-4 py-6 border-b-4 border-[#00BE5D] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#00BE5D] w-10 inline-block" viewBox="0 0 512 512">
                <path d="M437 268.152..." />
              </svg>
              <h3 className="text-[#141b2a] text-4xl font-bold mt-4">
                <Counter target={400} />+
              </h3>
              <p className="text-[#141b2a] font-semibold mt-2">Companies Worked With</p>
            </div>

            {/* Clients Served */}
            <div className="text-center bg-white px-4 py-6 border-b-4 border-[#00BE5D] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#00BE5D] w-10 inline-block" viewBox="0 0 512 512">
                <path d="M64.217 333.491..." />
              </svg>
              <h3 className="text-[#141b2a] text-4xl font-bold mt-4">
                <Counter target={1000} />+
              </h3>
              <p className="text-[#141b2a] font-semibold mt-2">Clients Served</p>
            </div>

            {/* DEMAT and IEPF Claims Filed */}
            <div className="text-center bg-white px-4 py-6 border-b-4 border-[#00BE5D] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#00BE5D] w-10 inline-block" viewBox="0 0 512 512">
                <path d="M477.797 290.203..." />
              </svg>
              <h3 className="text-[#141b2a] text-4xl font-bold mt-4">
                <Counter target={2000} />+
              </h3>
              <p className="text-[#141b2a] font-semibold mt-2">DEMAT and IEPF Claims Filed</p>
            </div>

            {/* Amount Recovered (100 CR+) */}
            <div className="text-center bg-white px-4 py-6 border-b-4 border-[#00BE5D] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#00BE5D] w-10 inline-block" viewBox="0 0 512 512">
                <path d="M18.56 16.94..." />
              </svg>
              <h3 className="text-[#141b2a] text-4xl font-bold mt-4">
                <Counter target={100} /> CR+
              </h3>
              <p className="text-[#141b2a] font-semibold mt-2">Amount Recovered</p>
            </div>
          </div>
        </div>
      </div>

      <WhatClientSay />
    </>
  );
}
