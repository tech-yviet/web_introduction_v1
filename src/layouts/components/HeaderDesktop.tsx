import Image from "next/image";

const HeaderDesktop = () => {
  return (
    <div className="hidden md:flex items-center justify-between md:px-[28px]">
      <div>
        <button className="flex items-center gap-3">
          <Image src="/svg/logo-pc.svg" alt="logo" width={50} height={50} />

          <span className="text-xl font-black tracking-[0.2px] uppercase">
            Y Viet
          </span>
        </button>
      </div>

      <div className="flex items-center justify-between gap-[49.02px]">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-[78.638px] bg-button-gradient-2 text-[15px] font-medium leading-[15.726px] text-white font-roboto hover:bg-button-hover">
            Trang chủ
          </button>

          <button className="inline-flex gap-2 items-center justify-center px-6 py-2.5 rounded-[78.638px]  text-[15px] font-medium leading-[15.726px] text-white font-roboto hover:bg-button-hover">
            <span className="font-roboto font-medium leading-[15.728px]">
              Danh sách chi tiết
            </span>

            <Image
              src="/svg/chevron-down.svg"
              alt="arrow-down"
              width={18}
              height={18}
            />
          </button>

          <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-[78.638px] text-[15px] font-medium leading-[15.726px] text-white font-roboto hover:bg-button-hover">
            Đăng ký đối tác
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <Image
              src="/img/Flag_of_Vietnam.svg.png"
              alt="language"
              width={30}
              height={20}
            />
          </button>

          <button className="px-4 py-2 text-center border border-white rounded-md bg-button text-[15px] font-medium leading-5 w-[128px]">
            Mở ứng dụng
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
