import Image from "next/image";
import Hero from "./hero/Hero";
import Search from "./search/Search";
import Categories from "./category/Categories";

const HomeFeature = () => {
  return (
    <div className="max-w-[375px] mx-auto md:min-w-[1200px] lg:max-w-full relative">
      <Hero />

      <div className="md:hidden">
        <Search
          placeholder="Tìm thuốc, dịch vụ, Bác sĩ, Phòng k..."
          inputClassName="bg-transparent outline-none w-full text-sm font-normal leading-[22px] w-[227px]"
          className="mt-[11px] p-3 flex items-center bg-white rounded-[40px] w-[359px] mx-auto h-[48px]"
        />
      </div>

      <Categories />

      <div>Kết nối cùng Y Viet</div>
      <div>Hướng Dẫn tạo tài khoản</div>
      <div>Future Applications</div>

      <div className="fixed bottom-10 right-10">
        <Image
          src="/gif/mascot.gif"
          alt="Y VIET Mascot"
          width={80.622}
          height={77}
          className="w-[120px] h-[115px]"
        />
      </div>
    </div>
  );
};

export default HomeFeature;
