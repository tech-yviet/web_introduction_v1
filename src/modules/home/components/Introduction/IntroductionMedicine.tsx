import Image from "next/image";

const IntroductionMedicine = () => {
  return (
    <div className="mt-[40px] px-[10px] text-white font-inter md:mt-[87px] md:px-[50px]">
      <div className="flex gap-5 md:justify-between md:gap-[58px] md:px-[61px]">
        <div className="pt-[21px] min-w-[136px] relative md:min-w-[439.207px] lg:pt-0">
          <Image
            src="/svg/introduction/introduction-mobile-3.svg"
            alt="image-2"
            width={439.207}
            height={658.81}
            className="absolute top-0 left-0 z-10 md:top-[5px]"
          />

          <Image
            src="/svg/shadow-introduction-1.svg"
            alt="shadow-image-1"
            width={567.098}
            height={401.028}
            className="absolute top-[51px] -left-[8px] md:top-[218px] md:left-[10px]"
          />
        </div>

        <div className="relative pl-[39px] pt-[21px] md:pl-[114px] md:pt-[67px]">
          <div className="absolute top-0 left-0 text-[47px] text-white font-bold leading-[47.231px] opacity-[0.1] md:text-[150px] md:leading-[151.67px]">
            01
          </div>

          <div className="flex items-center gap-[6.13px] md:gap-[15.17px]">
            <div className="w-[18.414px] h-[0.394px] bg-white md:w-[45.501px] md:h-[1.264px]"></div>
            <div className="text-[4px] font-extrabold tracking-[1.181px] uppercase md:text-[11.375px] md:tracking-[3.792px] md:text-nowrap">
              Get Started
            </div>
          </div>

          <div className="mt-[5.04px] text-sm font-bold md:mt-4 md:text-[40px] md:leading-tight">
            AI nhận diện <br /> thông minh
          </div>

          <div className="mt-2 text-[8px] md:mt-4 md:text-[18px] md:leading-[24px]">
            Chụp hoặc tải lên ảnh đơn thuốc hoặc hộp thuốc, AI tự động phân tích
            và hiển thị chi tiết, giúp bạn kiểm tra đơn thuốc rõ ràng
          </div>
        </div>
      </div>

      <div className="flex gap-4 md:px-[54px] md:justify-between md:gap-[58px] mt-[30px] md:mt-[194px]">
        <div className="relative pl-[39px] pt-[21px] md:pl-[95px] md:pt-[67px]">
          <div className="absolute top-0 left-0 text-[47px] text-white font-bold leading-[47.231px] opacity-[0.1] md:text-[150px] md:leading-[151.67px]">
            02
          </div>

          <div className="flex items-center gap-[6.13px] md:gap-[15.17px]">
            <div className="w-[18.414px] h-[0.394px] bg-white md:w-[45.501px] md:h-[1.264px]"></div>
            <div className="text-[4px] font-extrabold tracking-[1.181px] uppercase md:text-[11.375px] md:tracking-[3.792px]">
              HEALTHCARE Essentials
            </div>
          </div>

          <div className="mt-[5.04px] text-sm font-bold md:mt-4 md:text-[40px] md:leading-tight">
            Gợi ý nhà thuốc <br /> đủ thuốc
          </div>

          <ul className="mt-2 list-disc px-2 md:mt-4 text-[8px] md:text-[18px]">
            <li>
              Ứng dụng đề xuất nhà thuốc uy tín, đạt chuẩn GPP, đảm bảo có sẵn
              thuốc bạn cần
            </li>

            <li>
              Ưu tiên cửa hàng có đủ thuốc và gần nhất để bạn nhận thuốc nhanh
              chóng qua giao hàng hoặc đến mua trực tiếp
            </li>
          </ul>
        </div>

        <div className="pt-[21px] min-w-[136px] relative md:min-w-[439.207px] lg:pt-0">
          <Image
            src="/svg/introduction/introduction-mobile-4.svg"
            alt="image-1"
            width={439.207}
            height={658.81}
            className="absolute top-[16px] left-0 z-10 md:top-[5px]"
          />

          <Image
            src="/svg/shadow-introduction-2.svg"
            alt="shadow-image-2"
            width={567.098}
            height={401.028}
            className="absolute top-[70px] left-0 md:-top-[135px]"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroductionMedicine;
