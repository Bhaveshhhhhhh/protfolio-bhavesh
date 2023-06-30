import React from "react";

import fth from "../assets/fth.png";
import mba from "../assets/mba.png";
import netflix from "../assets/netflix.png";
import rmy1 from "../assets/rmy1.png";

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
          <a href="https://mba-burgerwala-frontend.netlify.app/" target="blank">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-70 mx-auto" src={mba} alt="fth icon" />
              <p className="my-4">MBA BurgerWala WebApp</p>
            </div>
          </a>
          <a href="https://online-learing-platform.netlify.app/" target="blank">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-70 mx-auto" src={rmy1} alt="fth icon" />
              <p className="my-4">CourseBundler WebApp</p>
            </div>
          </a>
          <a
            href="https://netflix-colne-iambhaveshh.netlify.app/"
            target="blank"
          >
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-70 mx-auto" src={netflix} alt="fth icon" />
              <p className="my-4">Netflix Clone</p>
            </div>
          </a>
          <a href="https://cryptoapp-bhavesh.netlify.app/" target="blank">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300">
              <img className="w-70 mx-auto" src={fth} alt="fth icon" />
              <p className="my-4">BitCoin WebApp</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
