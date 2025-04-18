import Image from "next/image";

const Future = () => {
  return (
    <div className="mt-[60px] font-inter px-[20px] text-white relative md:max-w-[1200px] md:mx-auto md:mt-[119px]">
      <div className="text-[28px] font-bold leading-[110%] w-[176px] text-right">
        Future <br />
        Applications
      </div>

      <div className="bg-[rgba(255,255,255,0.20)] mt-[13px] ml-[78.37px] px-[5.08px] py-1 rounded-[11.292px] w-[112px]  text-[6px] text-center font-medium">
        Prepare for the New Age of Health
      </div>

      <div className="mt-[82px]">
        <Image
          src="/svg/future/iPhone-14.svg"
          alt="iPhone-14"
          width={796.5}
          height={501.397}
        />
      </div>

      <div className="w-[68.157px] h-[68.157px] bg-[radial-gradient(50%_50%_at_50%_50%,_#BAEFF8_0%,_#95D5FA_100%)] shadow-[3.529px_2.823px_1.412px_0px_#BAE6FF_inset] rounded-[13.7px] px-[11.64px] pt-[9.53px] pb-[9.69px] absolute top-[12px] right-[87px]">
        <div>
          <Image
            src="/svg/future/chuyenkhoa.svg"
            alt="icon-1"
            width={21.916}
            height={23.16}
          />
        </div>

        <div className="mt-[6.89px] pl-[3.18px] text-[6.5px] font-semibold leading-[120%] text-[#1D1B1B]">
          Hơn 150 chuyên khoa
        </div>
      </div>

      <div className="w-[66.102px] h-[66.102px] bg-[url('/svg/future/bg-hoidap.svg')] bg-cover bg-center shadow-[3.529px_2.823px_1.412px_0px_#8CCCF1_inset] rounded-[13.7px] pl-[10px] pt-[19.5px] pb-[9.69px] absolute top-[84px] left-[24px]">
        <div>
          <Image
            src="/svg/future/hoidap.svg"
            alt="icon-2"
            width={18.755}
            height={18.851}
          />
        </div>

        <div className="mt-[4.21px] pl-[3.18px] text-[6.5px] font-semibold leading-[120%] text-[#1D1B1B]">
          Hỏi đáp 24/7
        </div>
      </div>

      <div className="w-[78.089px] h-[78.089px] bg-[url('/svg/future/bg-ai-support.svg')] bg-cover bg-center shadow-[3.529px_2.823px_1.412px_0px_rgba(125,171,203,0.40)_inset] rounded-[13.7px] pl-[10px] pt-[16px] pb-[9.69px] absolute top-[121px] left-[100px]">
        <div className="pl-2">
          <Image
            src="/svg/future/ai-support.svg"
            alt="icon-3"
            width={19.084}
            height={26.938}
          />
        </div>

        <div className="mt-[7.06px] pl-[3.18px] pr-1 text-[6.5px] font-semibold leading-[120%] text-[#1D1B1B]">
          AI hỗ trợ phân tích kết quả khám
        </div>
      </div>

      <div className="w-[61.649px] h-[61.649px] bg-[url('/svg/future/bg-bacsi.svg')] bg-cover bg-center shadow-[3.529px_2.823px_1.412px_0px_rgba(134,205,255,0.30)_inset] rounded-[13.7px] pl-[14.32px] pt-[14.96px] pb-[9.69px] absolute top-[104px] left-[190px]">
        <div>
          <Image
            src="/svg/future/bacsi.svg"
            alt="icon-4"
            width={21.156}
            height={20.863}
          />
        </div>

        <div className="mt-[4.4px] pl-[3.18px] pr-1 text-[6.5px] font-semibold leading-[120%] text-[#1D1B1B]">
          500⁺ Bác sĩ
        </div>
      </div>

      <div className="w-[78.089px] h-[78.089px] bg-[url('/svg/future/bg-giaiphap.svg')] bg-cover bg-center shadow-[3.529px_2.823px_1.412px_0px_rgba(134,205,255,0.30)_inset] rounded-[13.7px] pl-[14.09px] pt-[22.87px] pb-[9.69px] absolute top-[175px] left-[203px]">
        <div className="pl-[3.19px]">
          <Image
            src="/svg/future/giaiphap.svg"
            alt="icon-5"
            width={26.804}
            height={20.746}
          />
        </div>

        <div className="mt-[2.48px] pl-[3.18px] pr-1 text-[6.5px] font-semibold leading-[120%] text-[#1D1B1B]">
          Giải pháp tối ưu khi tìm thuốc
        </div>
      </div>

      <div className="w-[78.089px] h-[78.089px] bg-[url('/svg/future/bg-luutru.svg')] bg-cover bg-center shadow-[8.384px_6.707px_3.354px_0px_rgba(127, 226, 240, 0.40)_inset] rounded-[13.7px] pl-[13.06px] pt-[17.15px] pb-[9.69px] absolute top-[85px] left-[262px]">
        <div className="pl-[3.19px]">
          <Image
            src="/svg/future/luutru.svg"
            alt="icon-6"
            width={26.804}
            height={20.746}
          />
        </div>

        <div className="mt-[4.87px] pl-[3.18px] pr-1 text-[6.5px] font-semibold leading-[120%] text-[#1D1B1B]">
          Lưu trữ & bảo mật hồ sơ khám
        </div>
      </div>
    </div>
  );
};

export default Future;
