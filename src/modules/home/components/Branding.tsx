"use client";

import { ReactSVG } from "react-svg";

const Branding = () => {
  return (
    <div className="flex flex-col items-center mt-[60px] md:max-w-[1200px] md:mx-auto z-10">
      <div className="w-[193px] h-[168px] mx-auto flex items-center justify-center relative text-white md:w-[790px] md:h-[600px] animate-float z-10">
        <div className="absolute top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[65px] text-center font-black tracking-[1.3px] leading-[65px] flex items-center font-inter md:text-[202px]">
          <p>YVIET</p>
          <div className="inline-block w-[15px] h-[15px] bg-white rounded-full relative top-[17px] md:w-[40px] md:h-[40px] md:top-[59px]"></div>
        </div>

        <ReactSVG
          src="/svg/ai-brain.svg"
          className="absolute z-10 top-[40%] left-[51%] -translate-x-1/2 -translate-y-1/2 w-[193.617px] h-[193.617px] md:w-[600px] md:h-[600px] md:left-[52%]"
          beforeInjection={(svg) => {
            svg.setAttribute("width", "100%");
            svg.setAttribute("height", "100%");
          }}
          // loading={() => <span>Loading...</span>}
          fallback={() => <></>}
        />

        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[65px] text-center font-black leading-[65px] tracking-[1.3px] z-10 flex items-center font-inter md:text-[202px] text-transparent text-stroke md:text-stroke-5">
          YVIET
          <div
            className="inline-block w-[15px] h-[15px] rounded-full  relative top-[17px] md:w-[40px] md:h-[40px] md:top-[59px]"
            style={{ border: "1.61px solid #FFFFFF" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
