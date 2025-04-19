"use client";

import { useState } from "react";

import Image from "next/image";
import dynamic from "next/dynamic";

import HeaderDesktop from "@/layouts/components/HeaderDesktop";
import Search from "../components/Search";
import { Button } from "@chakra-ui/react";

const LazyMobileDrawer = dynamic(() => import("./MobileDrawer"), {
  ssr: false,
});

const data = [
  {
    id: "1",
    rate: 10,
    title: "Công nghệ",
    subTitle: "Technology",
  },
  {
    id: "2",
    rate: 10,
    title: "Đa dụng",
    subTitle: "Flexibility",
  },
  {
    id: "3",
    rate: 10,
    title: "Trợ lý AI",
    subTitle: "AI Assistant",
  },
];

const Hero = () => {
  const [isOpenMobileDrawer, setIsOpenMobileDrawer] = useState(false);

  const handleToggleMobileDrawer = () => {
    setIsOpenMobileDrawer((prev) => !prev);
  };

  return (
    <div className="bg-[url('/img/hero-baner.jpg')] bg-cover bg-center bg-no-repeat h-[170px] md:w-full md:h-[639px]">
      <div className="bg-hero-banner h-full w-full pl-5 pr-2.5 pb-[15px] pt-[9px] text-white flex flex-col gap-4">
        <div className="w-full md:max-w-[1200px] h-full mx-auto ">
          <HeaderDesktop />

          <div className="relative md:mt-[66px] md:px-[70px]">
            <div className="flex flex-col gap-[7.11px]">
              <div className="flex items-center gap-[7.41px] md">
                <div className="w-[16.693px] h-[0.464px] bg-white md:w-[45.501px] md:h-[1.264px]"></div>
                <div className="text-[4px] font-extrabold uppercase tracking-[1.391px] md:text-[11.5px] md:tracking-[3.792px]">
                  Smart Health Solutions
                </div>
              </div>

              <div className="h-[49.893px] text-xl font-bold leading-[24.947px] md:text-[55.5px] md:leading-[68px] md:h-[136px]">
                Tìm kiếm thuốc
                <br />
                Kết nối chuyên gia
              </div>
            </div>

            <Button
              className="absolute top-0 right-0 md:hidden"
              onClick={handleToggleMobileDrawer}
            >
              <Image
                src="/svg/collapse.svg"
                alt="search"
                width={32}
                height={32}
              />
            </Button>

            <div className="hidden md:flex md:mt-[33px] items-center gap-8">
              <Search
                inputClassName="w-full text-base font-normal leading-[22px] text-black bg-transparent outline-none"
                placeholder="Nhập để tìm thuốc, sản phẩm, dịch vụ, Bác sĩ, Bệnh viện, Phòng khám,..."
                className="py-3 px-4 flex items-center bg-white rounded-[40px] w-[729px] h-[48px] "
              />

              <button className="px-8 py-[11px] bg-button-gradient-3 rounded-[32px] box-shadow-button-gradient-2 font-roboto text-[16px] font-semibold">
                Tìm kiếm
              </button>
            </div>
          </div>

          <div className="flex  items-end gap-[9px] mt-[16px] md:mt-[50px] md:gap-[33px] md:px-[70px] relative">
            <div className="flex flex-col md:justify-between gap-[7.84px] w-[120px] h-[60px] px-[12.04px] py-[6.78px] rounded-[5.42 3px] bg-[rgba(0,_0,_0,_0.38)] md:w-[354px] md:h-[178px] md:px-[35.5px] md:rounded-2xl md:gap-[23.11px] md:pt-8 md:pb-10">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-[4.07px] md:gap-4 md:h-auto">
                  <div className="text-xs font-bold md:text-[36px]">150⁺</div>
                  <div className="text-[4px] font-normal text-center md:text-[12px]">
                    Chuyên khoa
                  </div>
                </div>

                <div className="w-[0.508px] h-[8.907px] bg-white md:w-[1.5px] md:h-[26.276px]"></div>

                <div className="flex flex-col gap-[4.07px] md:gap-4">
                  <div className="text-xs font-bold md:text-[36px]">500</div>
                  <div className="text-[4px] font-normal  text-center md:text-[12px]">
                    Bác Sĩ
                  </div>
                </div>

                <div className="w-[0.508px] h-[8.907px] bg-white md:w-[1.5px] md:h-[26.276px]"></div>

                <div className="flex flex-col gap-[4.07px] md:gap-4">
                  <div className="text-xs font-bold md:text-[36px]">200</div>
                  <div className="text-[4px] font-normal text-center md:text-[12px]">
                    Nhà thuốc
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[2.72px] justify-center md:gap-2">
                <div className="text-[6px] font-semibold leading-[9.152px] tracking-[0.102px] md:text-[18px] md:leading-[27px] md:tracking-[0.3px]">
                  Mở ứng dụng Y Viet
                </div>

                <button>
                  <Image
                    src="/svg/externalLink.svg"
                    alt="externalLink"
                    width={9.381}
                    height={5.85}
                    className="md:w-[28.635px] md:h-[17.959px]"
                  />
                </button>
              </div>
            </div>

            <div className="bg-hero-banner-2 flex-1 h-[28px] rounded-[5.135px] flex items-center md:h-[86px] md:rounded-2xl overflow-hidden">
              <div className="w-[54.88px] flex items-center justify-center md:w-[171px]">
                <div>
                  <div className="text-[4.5px] font-bold md:text-sm">
                    Giải pháp y tế
                  </div>
                  <div className="text-[4.5px] font-normal tracking-[0.096px] md:text-sm">
                    Health Solutions
                  </div>
                </div>
              </div>

              <div className="flex-1 w-3/4 h-full bg-[url('/svg/bg-hero-2.svg')] bg-cover bg-center bg-no-repeat px-[5.13px] md:px-4 md:bg-hero-banner-3 md:rounded-2xl">
                <div className="flex items-center justify-between">
                  {data.map((i) => {
                    return (
                      <div
                        key={i.id}
                        className="flex justify-center h-[28px] items-center md:h-[86px]"
                      >
                        <div className="flex items-start gap-[5.14px] md:gap-4">
                          <div className="flex items-center">
                            <Image
                              src="/svg/star-1.svg"
                              alt="star"
                              width={6.419}
                              height={6.512}
                              className="md:w-[20px] md:h-[20px]"
                            />

                            <div className="text-[5px] text-[#12041E] font-semibold leading-[8.666px] tracking-[0.096px] md:text-base md:leading-[27px] md:tracking-[0.3px]">
                              {i.rate}
                            </div>
                          </div>

                          <div className="text-[4.5px] font-bold pt-[1px] md:pt-1">
                            <div className="text-[#12041E] md:text-sm">
                              {i.title}
                            </div>
                            <div className="text-[#0274FF] md:text-sm">
                              {i.subTitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LazyMobileDrawer
        isOpen={isOpenMobileDrawer}
        onClose={() => setIsOpenMobileDrawer(false)}
      />
    </div>
  );
};

export default Hero;
