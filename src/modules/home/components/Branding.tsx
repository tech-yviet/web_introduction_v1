import Image from "next/image";

const Branding = () => {
  return (
    <div className="flex flex-col items-center mt-[30px] md:max-w-[1200px] md:mx-auto">
      <div className="w-[193px] h-[168px] mx-auto flex items-center justify-center relative text-white md:w-[790px] md:h-[600px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[65px] text-center font-extrabold tracking-[1.3px] leading-[65px] flex items-center font-inter md:text-[202px]">
          YVIET
          <div className="inline-block w-[15px] h-[15px] bg-white rounded-full relative top-[17px] md:w-[40px] md:h-[40px] md:top-[59px]"></div>
        </div>

        <Image
          src="/svg/ai-brain.svg"
          alt="yviet"
          width={193.617}
          height={193.617}
          className="absolute  top-[40%] left-[51%] -translate-x-1/2 -translate-y-1/2 object-cover md:w-[600px] md:h-[600px] md:left-[52%]"
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[65px] text-center font-extrabold leading-[65px] tracking-[1.3px] z-10 text-transparent flex items-center font-inter md:text-[202px]"
          style={{
            WebkitTextStrokeWidth: "1.61px",
            WebkitTextStrokeColor: "#FFFFFF",
          }}
        >
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
