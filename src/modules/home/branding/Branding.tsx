import Image from "next/image";

const Branding = () => {
  return (
    <div className="flex flex-col items-center mt-[30px]">
      <div className="w-[193px] h-[168px] mx-auto flex items-center justify-center relative text-white">
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

      <div className="rounded-[3113.76px] border-[0.331px] text-white px-[10px] py-[8px] flex items-center gap-1 hover:cursor-pointer">
        <div className="text-[9.868px] font-medium leading-[4.917px]">
          Cập nhật phiên bản mới nhất của{" "}
          <span className="font-semibold">Ứng dụng</span>
        </div>

        <div>
          <Image
            src="/svg/arrow-right.svg"
            alt="arrow-right"
            width={8.879}
            height={8.879}
          />
        </div>
      </div>
    </div>
  );
};

export default Branding;
