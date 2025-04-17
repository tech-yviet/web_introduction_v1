import Image from "next/image";

const Introduction = () => {
  return (
    <div className="px-[7px] md:max-w-[1200px] md:mx-auto md:mt-[52px]">
      <div className="rounded-[3113.76px] border-[0.331px] text-white px-[10px] py-[8px] flex items-center gap-1 hover:cursor-pointer max-w-[245px] mx-auto md:px-[33.5px] md:py-[10px]">
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

      <div className="mt-[30px] px-[10px] text-white font-inter">
        <div className="flex gap-5">
          <div className="relative pl-[39px] pt-[21px]">
            <div className="absolute top-0 left-0 text-[47px] text-white font-bold leading-[47.231px] opacity-[0.1]">
              01
            </div>

            <div className="flex items-center gap-[6.13px]">
              <div className="w-[18.414px] h-[0.394px] bg-white"></div>
              <div className="text-[4px] font-extrabold tracking-[1.181px] uppercase">
                Get Started
              </div>
            </div>

            <div className="mt-[5.04px] text-sm font-bold">
              Tạo tài khoản cho <br /> bạn & gia đình
            </div>

            <ul className="mt-2 list-disc px-4">
              <li className="text-[8px] font-normal">
                Tải ứng dụng Y VIET và tạo tài khoản
              </li>

              <li className="text-[8px] font-normal">
                Điền đầy đủ thông tin bệnh sử cá nhân để quá trình tư vấn của
                Bác sĩ được diễn ra thuận lợi và chính xác nhất
              </li>
            </ul>
          </div>

          <div className="pt-[21px] min-w-[130px] relative">
            <Image
              src="/svg/introduction-mobile-1.svg"
              alt="image-1"
              width={136.772}
              height={205.158}
              className="absolute top-[21px] left-0 z-10"
            />

            <Image
              src="/svg/shadow-introduction-1.svg"
              alt="shadow-image-1"
              width={200}
              height={124.883}
              className="absolute top-[71px] -left-[8px]"
            />
          </div>
        </div>

        <div className="flex gap-5 mt-[33px] ">
          <div className="pt-[21px] min-w-[130px] relative">
            <Image
              src="/svg/introduction-mobile-2.svg"
              alt="image-2"
              width={136.772}
              height={205.158}
              className="absolute top-[21px] left-0 z-10"
            />

            <Image
              src="/svg/shadow-introduction-2.svg"
              alt="shadow-image-2"
              width={200}
              height={124.883}
              className="absolute -top-[18px] left-0"
            />
          </div>

          <div className="relative pl-[39px] pt-[21px]">
            <div className="absolute top-0 left-0 text-[47px] text-white font-bold leading-[47.231px] opacity-[0.1]">
              02
            </div>

            <div className="flex items-center gap-[6.13px]">
              <div className="w-[18.414px] h-[0.394px] bg-white"></div>
              <div className="text-[4px] font-extrabold tracking-[1.181px] uppercase">
                HEALTHCARE EXPERT CONNECTION
              </div>
            </div>

            <div className="mt-[5.04px] text-sm font-bold">
              Kết nối Bác sĩ mà <br /> bạn mong muốn
            </div>

            <div className="mt-2 text-[8px] ">
              Tìm và đặt hẹn Bác sĩ mà bạn mong muốn dựa trên chuyên khoa, địa
              điểm, học vấn và kinh nghiệm, cũng như đánh giá và nhận xét từ các
              bệnh nhân đã được điều trị bởi Bác sĩ trước đó
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
