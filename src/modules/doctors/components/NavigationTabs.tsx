import Image from "next/image";

const NavigationTabs = () => {
  return (
    <div className="hidden md:flex">
      <div className="flex items-center gap-2 bg-white px-4 py-[10px] rounded-bl-[12px] rounded-tl-[12px]">
        <div>
          <Image
            src="/svg/icons/grid-view.svg"
            alt="grid-view"
            width={20}
            height={20}
          />
        </div>

        <div className="text-sm font-inter font-medium text-[#0274FF]">
          Danh sách chi tiết
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-[10px] bg-gradient-10 rounded-br-[12px] rounded-tr-[12px]">
        <div>
          <Image src="/svg/icons/menu.svg" alt="menu" width={20} height={20} />
        </div>

        <div className="text-sm font-inter font-semibold text-white">
          Danh sách Bác sĩ - Điều dưỡng - NVYT
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
