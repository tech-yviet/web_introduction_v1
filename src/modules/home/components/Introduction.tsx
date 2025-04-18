import Image from "next/image";

const Introduction = () => {
  return (
    <div className="px-[7px] md:max-w-[1200px] md:mx-auto md:mt-[52px] relative z-10 font-inter">
      <div className="rounded-[3113.76px] border-[0.331px] text-white px-[10px] py-[8px] flex items-center gap-1 hover:cursor-pointer max-w-[245px] mx-auto md:px-[33.5px] md:py-[10px] md:max-w-max">
        <div className="text-[9.868px] font-medium leading-[4.917px] md:text-sm md:font-semibold md:leading-4">
          Cập nhật phiên bản mới nhất của{" "}
          <span className="font-semibold">Ứng dụng</span>
        </div>

        <div>
          <Image
            src="/svg/arrow-right.svg"
            alt="arrow-right"
            width={8.879}
            height={8.879}
            className="md:w-3 md:h-3"
          />
        </div>
      </div>

      <div className="mt-4 text-white">
        <div className="font-roboto text-center text-[30px] font-black leading[120%] text-shadow md:mt-8 md:text-[96px] md:text-shadow-2">
          Kết nối cùng Y Viet
        </div>

        <div className="mt-3 text-center text-[8px] font-medium leading-[11px] mx-auto md:mt-8 md:text-[20px] md:leading-[28px] md:w-auto">
          <div>
            Điểm dừng đầu tiên để bạn kết nối các dịch vụ tư vấn y khoa chất
            lượng cao
          </div>
          <div>
            Đơn giản hóa trải nghiệm chăm sóc sức khỏe của bạn chỉ với{" "}
            <span className="font-bold">“một lần chạm”</span>
          </div>
        </div>

        <div className="mt-[11px] flex items-center justify-center gap-2 md:mt-8">
          <button className="hover:cursor-pointer px-4 py-2 rounded-[32px] bg-[rgba(255,255,255,0.38)] shadow-[0px_0.311px_0.623px_-0.311px_rgba(0,0,0,0.10),_0px_0.311px_0.934px_0px_rgba(0,0,0,0.10)] text-[10px] font-medium leading-[6.228px] md:rounded-[20px] md:text-[14px] md:leading-[20px]">
            Tìm Bác sĩ
          </button>

          <button className="hover:cursor-pointer px-4 py-2 rounded-[32px] border-[0.089px] shadow-[0px_0.311px_0.623px_-0.311px_rgba(0,0,0,0.10),_0px_0.311px_0.934px_0px_rgba(0,0,0,0.10)] text-[10px] font-medium leading-[6.228px] md:rounded-[20px] md:text-[14px] md:leading-[20px] md:bg-button-gradient-4">
            Tìm thuốc
          </button>
        </div>
      </div>

      <div className="mt-[40px] px-[10px] text-white font-inter md:mt-[87px] md:px-[50px]">
        <div className="flex gap-5 md:px-[54px] md:justify-between md:gap-[58px]">
          <div className="relative pl-[39px] pt-[21px] md:pl-[95px] md:pt-[67px]">
            <div className="absolute top-0 left-0 text-[47px] text-white font-bold leading-[47.231px] opacity-[0.1] md:text-[150px] md:leading-[151.67px]">
              01
            </div>

            <div className="flex items-center gap-[6.13px] md:gap-[15.17px]">
              <div className="w-[18.414px] h-[0.394px] bg-white md:w-[45.501px] md:h-[1.264px]"></div>
              <div className="text-[4px] font-extrabold tracking-[1.181px] uppercase md:text-[11.375px] md:tracking-[3.792px]">
                Get Started
              </div>
            </div>

            <div className="mt-[5.04px] text-sm font-bold md:mt-4 md:text-[40px] md:leading-tight">
              Tạo tài khoản cho <br /> bạn & gia đình
            </div>

            <ul className="mt-2 list-disc px-4 md:mt-4 text-[8px] md:text-[18px]">
              <li>Tải ứng dụng Y VIET và tạo tài khoản</li>

              <li>
                Điền đầy đủ thông tin bệnh sử cá nhân để quá trình tư vấn của
                Bác sĩ được diễn ra thuận lợi và chính xác nhất
              </li>
            </ul>
          </div>

          <div className="pt-[21px] min-w-[130px] relative md:min-w-[439.207px] lg:pt-0">
            <Image
              src="/svg/introduction-mobile-1.svg"
              alt="image-1"
              width={439.207}
              height={658.81}
              className="absolute top-[21px] left-0 z-10 md:top-[5px]"
            />

            <Image
              src="/svg/shadow-introduction-1.svg"
              alt="shadow-image-1"
              width={567.098}
              height={401.028}
              className="absolute top-[71px] -left-[8px] md:top-[218px] md:left-[10px]"
            />
          </div>
        </div>

        <div className="flex gap-5 mt-[33px] md:mt-[185px] md:justify-between md:gap-[58px] md:px-[61px]">
          <div className="pt-[21px] min-w-[130px] relative md:min-w-[439.207px] lg:pt-0">
            <Image
              src="/svg/introduction-mobile-2.svg"
              alt="image-2"
              width={439.207}
              height={658.81}
              className="absolute top-[21px] left-0 z-10 md:top-[5px]"
            />

            <Image
              src="/svg/shadow-introduction-2.svg"
              alt="shadow-image-2"
              width={567.098}
              height={401.028}
              className="absolute -top-[18px] left-0 md:-top-[135px]"
            />
          </div>

          <div className="relative pl-[39px] pt-[21px] md:pl-[114px] md:pt-[67px]">
            <div className="absolute top-0 left-0 text-[47px] text-white font-bold leading-[47.231px] opacity-[0.1] md:text-[150px] md:leading-[151.67px]">
              02
            </div>

            <div className="flex items-center gap-[6.13px] md:gap-[15.17px]">
              <div className="w-[18.414px] h-[0.394px] bg-white md:w-[45.501px] md:h-[1.264px]"></div>
              <div className="text-[4px] font-extrabold tracking-[1.181px] uppercase md:text-[11.375px] md:tracking-[3.792px] md:text-nowrap">
                HEALTHCARE EXPERT CONNECTION
              </div>
            </div>

            <div className="mt-[5.04px] text-sm font-bold md:mt-4 md:text-[40px] md:leading-tight">
              Kết nối Bác sĩ mà <br /> bạn mong muốn
            </div>

            <div className="mt-2 text-[8px] md:mt-4 md:text-[18px] md:leading-[24px]">
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
