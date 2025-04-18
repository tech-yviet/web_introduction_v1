import Image from "next/image";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Branding from "./components/Branding";
import Introduction from "./components/Introduction";
import Future from "./components/Future";

const HomeFeature = () => {
  return (
    <div className="max-w-[375px] h-full mx-auto md:min-w-[1200px] lg:max-w-full relative overflow-hidden ">
      <Hero />

      <div className="md:hidden">
        <Search
          placeholder="Tìm thuốc, dịch vụ, Bác sĩ, Phòng k..."
          inputClassName="bg-transparent outline-none w-full text-sm font-normal leading-[22px] w-[227px]"
          className="mt-[11px] p-3 flex items-center bg-white rounded-[40px] w-[359px] mx-auto h-[48px]"
        />
      </div>

      <Categories />
      <Branding />
      <Introduction />
      <Future />

      <div className="fixed bottom-10 right-2 md:right-10 z-20">
        <Image
          src="/gif/mascot.gif"
          alt="Y VIET Mascot"
          width={80.622}
          height={77}
          className="md:w-[120px] md:h-[115px]"
        />
      </div>

      <div className="absolute top-[302px] -left-[175px] bg-[url('/svg/wave-pattern-mobile.svg')]  w-[582.317px] h-[475.346px] md:bg-[url('/svg/wave-pattern-desktop.svg')] md:w-[1909.376px] md:h-[1629.617px] md:top-[815px] md:-left-[188px]"></div>
    </div>
  );
};

export default HomeFeature;
