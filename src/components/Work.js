import React from "react";

import f from "../assets/f.png";
import fth from "../assets/fth.png";
import s from "../assets/s.png";
import t from "../assets/t.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen  bg-[#271839]  text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Works
          </p>
          <p className="py-4">
            These are the WebApps that i have made using MERN.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8">
          <a href="https://cryptoapp-bhavesh.netlify.app/" target="blank">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-70 mx-auto" src={fth} alt="fth icon" />
              <p className="my-4">BitCoin WebApp</p>
            </div>
          </a>
          <a href="https://responsive-techstarapp.netlify.app/" target="blank">
            <div className="shadow-md shadow-[#aeb2b9] hover:scale-110 duration-300">
              <img className="w-70 mx-auto" src={s} alt="s icon" />
              <p className="my-4">TechStar WebApp</p>
            </div>
          </a>
          <a href="https://bhavesh-portfolioo.netlify.app/">
            <div className="shadow-md shadow-[#aeb2b9] hover:scale-110 duration-300">
              <img className="w-70 mx-auto" src={f} alt="f icon" />
              <p className="my-4">PortFolio WebApp</p>
            </div>
          </a>
          <a href="https://right-master-facts.netlify.app/">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-70 mx-auto" src={t} alt="t icon" />
              <p className="my-4">RightMaster YT WebApp</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
