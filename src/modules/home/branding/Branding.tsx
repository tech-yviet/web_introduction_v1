import Image from "next/image";

const Branding = () => {
  return (
    <div>
      <div className="mt-[40px] w-[193px] h-[193px] mx-auto flex items-center justify-center relative text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[65px] text-center font-black tracking-[1.3px] leading-[65px] flex items-center">
          YVIET
          <div className="inline-block w-[15px] h-[15px] bg-white rounded-full  relative top-[17px]"></div>
        </div>

        <Image
          src="/svg/ai-brain.svg"
          alt="yviet"
          width={193.617}
          height={193.617}
          className="absolute  top-[40%] left-[51%] -translate-x-1/2 -translate-y-1/2 object-cover"
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[65px] text-center font-black leading-[65px] tracking-[1.3px] z-10 text-transparent flex items-center"
          style={{
            WebkitTextStrokeWidth: "1.61px",
            WebkitTextStrokeColor: "#FFFFFF",
          }}
        >
          YVIET
          <div
            className="inline-block w-[15px] h-[15px] rounded-full   relative top-[17px]"
            style={{ border: "1.61px solid #FFFFFF" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
