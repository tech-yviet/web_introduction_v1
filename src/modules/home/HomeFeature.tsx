import Hero from "./hero/Hero";
import Search from "./search/Search";

const HomeFeature = () => {
  return (
    <div className="max-w-[375px] mx-auto md:min-w-[1200px] lg:max-w-full">
      <Hero />

      <div className="md:hidden">
        <Search
          placeholder="Tìm thuốc, dịch vụ, Bác sĩ, Phòng k..."
          inputClassName="bg-transparent outline-none w-full text-sm font-normal leading-[22px] w-[227px]"
          className="mt-[11px] p-3 flex items-center bg-white rounded-[40px] w-[359px] mx-auto h-[48px]"
        />
      </div>

      <div>Categories</div>
      <div>Kết nối cùng Y Viet</div>
      <div>Hướng Dẫn tạo tài khoản</div>
      <div>Future Applications</div>
    </div>
  );
};

export default HomeFeature;
