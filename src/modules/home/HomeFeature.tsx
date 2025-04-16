import Hero from "./hero/Hero";
import Search from "./search/Search";

const HomeFeature = () => {
  return (
    <div className="max-w-[375px] mx-auto md:min-w-[1200px] lg:max-w-full">
      <Hero />

      <div className="md:hidden">
        <Search />
      </div>

      <div>Categories</div>
      <div>Kết nối cùng Y Viet</div>
      <div>Hướng Dẫn tạo tài khoản</div>
      <div>Future Applications</div>
    </div>
  );
};

export default HomeFeature;
