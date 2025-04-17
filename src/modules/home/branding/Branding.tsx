import Image from "next/image";

const Branding = () => {
  return (
    <div className="flex flex-col items-center mt-[30px]">
      <div className="w-[193px] h-[168px] mx-auto flex items-center justify-center relative text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[65px] text-center font-extrabold tracking-[1.3px] leading-[65px] flex items-center font-inter">
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[65px] text-center font-extrabold leading-[65px] tracking-[1.3px] z-10 text-transparent flex items-center font-inter"
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

      <div className="mt-4 text-white">
        <div className="font-roboto text-center text-[30px] font-black leading[120%] text-shadow">
          Kết nối cùng Y Viet
        </div>

        <div className="mt-3 text-center text-[8px] font-medium leading-[11px] w-[280px] mx-auto">
          <div>
            Điểm dừng đầu tiên để bạn kết nối các dịch vụ tư vấn y khoa chất
            lượng cao
          </div>
          <div>
            Đơn giản hóa trải nghiệm chăm sóc sức khỏe của bạn chỉ với{" "}
            <span className="font-bold">“một lần chạm”</span>
          </div>
        </div>

        <div className="mt-[11px] flex items-center justify-center gap-2">
          <button className="hover:cursor-pointer px-4 py-2 rounded-[32px] bg-[rgba(255,255,255,0.38)] shadow-[0px_0.311px_0.623px_-0.311px_rgba(0,0,0,0.10),_0px_0.311px_0.934px_0px_rgba(0,0,0,0.10)] text-[10px] font-medium leading-[6.228px]">
            Tìm Bác sĩ
          </button>

          <button className="hover:cursor-pointer px-4 py-2 rounded-[32px] border-[0.089px] shadow-[0px_0.311px_0.623px_-0.311px_rgba(0,0,0,0.10),_0px_0.311px_0.934px_0px_rgba(0,0,0,0.10)] text-[10px] font-medium leading-[6.228px]">
            Tìm thuốc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Branding;
