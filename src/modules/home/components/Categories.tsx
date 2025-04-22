"use client";

import { useEffect, useRef, useState } from "react";
import { dispatch } from "@/store";
import { appA } from "@/store/modules/app";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Search from "./Search";
import { PATH_PAGE } from "@/core/routes";
import { useRouter } from "next/navigation";
const categories = [
  {
    id: "1",
    title: "Bác sĩ \n điều dưỡng",
    image: "/svg/categories/category-1.svg",
    desc: "Kết nối Bác sĩ để được \n tư vấn sức khỏe",
    link: PATH_PAGE.doctors,
  },
  {
    id: "2",
    title: "Bệnh viện \n phòng khám",
    image: "/svg/categories/category-2.svg",
    desc: "Tra cứu nhanh chóng \n Đặt khám dễ dàng",
    link: PATH_PAGE.home,
  },
  {
    id: "3",
    title: "Trung tâm \n xét nghiệm",
    image: "/svg/categories/category-3.svg",
    desc: "Xét nghiệm tổng quát \n và chuyên sâu",
    link: PATH_PAGE.home,
  },
  {
    id: "4",
    title: "Nhà thuốc \n cửa hàng",
    image: "/svg/categories/category-4.svg",
    desc: "Tìm thuốc tiện lợi \n với <b>Bo AI</b>",
    link: PATH_PAGE.home,
  },
];

const Categories = () => {
  const refTrackScroll = useRef(null);
  const [isNearTop, setIsNearTop] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (!refTrackScroll.current) return;

    const rect = (
      refTrackScroll.current as HTMLDivElement
    ).getBoundingClientRect();
    const isNearTop = rect.top <= 120;

    setIsNearTop(isNearTop);
  };

  const handleToggleMobileDrawer = () => {
    dispatch(appA.toggleDrawerMenuMobile());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={refTrackScroll}
        className="abc mt-[29px] px-[7px] md:max-w-[1200px] md:mx-auto md:px-[29px] relative z-10"
      >
        <div className="flex items-center gap-[5.12px] md:gap-4 ">
          {categories?.map((c, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`w-[24%] bg-[rgba(255,255,255,0.21)] hover:bg-[rgba(255,255,255,0.7)] rounded-xl px-[3px] pt-[10px] pb-[13.48px] text-white flex flex-col items-center transition-all duration-300 hover:cursor-pointer group md:rounded-[40px] md:pt-[30px] md:pb-[37px] md:px-[12px] md:min-h-[453px] ${
                  !!isEven
                    ? "mb-[10.52px] md:mb-[33px]"
                    : "mt-[10.52px] md:mt-[33px]"
                }`}
                onClick={() => {
                  router.push(c.link);
                }}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={c.image}
                    width={51}
                    height={51}
                    alt={c.title}
                    className="md:w-[160px] md:h-[160px]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut",
                  }}
                  className="text-[8.5px] font-inter font-bold text-center uppercase mt-[5.98px] group-hover:text-[#0180AA] whitespace-pre-line md:mt-5 md:text-2xl"
                >
                  {c.title}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.4,
                    ease: "easeOut",
                  }}
                  className="mt-[6.38px] text-[6px] font-inter font-medium text-center whitespace-pre-line group-hover:text-[#0180AA] md:mt-5 md:text-base"
                  dangerouslySetInnerHTML={{ __html: c.desc }}
                ></motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                    ease: "easeOut",
                  }}
                  className="mt-[7.23px] bg-[#E9EBED] rounded-[37.5px] py-[3px] px-[9px] h-[15px] text-[5.625px] font-roboto font-medium text-[#4B4B4B] md:mt-[30px] md:w-[154px] md:h-[48px] md:text-base md:font-semibold group-hover:bg-button-hover-2 group-hover:text-white"
                >
                  Xem thêm
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {!!isNearTop && (
        <div className="fixed top-[40px] left-0 right-0 bg-white z-50 md:hidden font-inter p-[10px] bg-gradient-6 rounded-b-[16px] flex items-center gap-[15px] ">
          <Search
            placeholder="Tìm thuốc, dịch vụ, Bác sĩ, Phòng k..."
            inputClassName="bg-transparent outline-none w-full text-sm font-normal leading-[22px] w-[227px]"
            className="p-3 flex items-center  bg-white rounded-[40px] flex-1 h-[32px]"
            widthIcon={20}
          />

          <Button onClick={handleToggleMobileDrawer}>
            <Image
              src="/svg/collapse.svg"
              alt="search"
              width={32}
              height={32}
            />
          </Button>
        </div>
      )}
    </>
  );
};

export default Categories;
