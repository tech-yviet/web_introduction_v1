import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-[9px] py-[7.5px] h-[40px]">
      <button className="flex items-center gap-[3px]">
        <Image src="/svg/logo-header.svg" alt="logo" width={30} height={30} />
        <div className="text-[#1B63DE] font-extrabold capitalize">Y Viet</div>
      </button>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2">
          <Image
            src="/img/Flag_of_Vietnam.svg.png"
            alt="language"
            width={24}
            height={16}
          />
        </button>

        <button className="bg-button-gradient box-shadow-button-gradient px-4 py-[2.5px] rounded-md h-[25px] flex justify-center items-center text-[#FAFAFA] text-[11px] font-medium leading-[20px]">
          Mở ứng dụng
        </button>
      </div>
    </div>
  );
};

export default Header;
