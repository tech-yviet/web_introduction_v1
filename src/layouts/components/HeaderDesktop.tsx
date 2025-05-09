"use client";

import Image from "next/image";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { DETAIL_LIST } from "@/variables";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/utils/className";
import { PATH_PAGE } from "@/core/routes";

const HeaderDesktop = ({ isFixed = false }: { isFixed?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDoctors, setIsDoctors] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigateToHome = () => {
    router.push(PATH_PAGE.home);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (pathname === PATH_PAGE.doctors) {
      setIsDoctors(true);
      setIsHome(false);
    }

    if (pathname === PATH_PAGE.home) {
      setIsHome(true);
      setIsDoctors(false);
    }
  }, [pathname]);

  return (
    <div
      className={`hidden md:fixed top-0 right-0 left-0  md:flex items-center justify-center w-full z-50 font-roboto  h-[66px] ${
        isScrolled || isFixed ? "bg-gradient-8 shadow-lg rounded-b-[20px] " : ""
      }`}
    >
      <div
        className={`w-full max-w-[1200px] mx-auto transition-all duration-600 ${
          isScrolled ? "rounded-b-[20px]" : ""
        }`}
      >
        <div className="flex items-center justify-between w-full px-[28px]">
          <div>
            <button
              onClick={handleNavigateToHome}
              className="flex items-center gap-3"
            >
              <Image src="/svg/logo-pc.svg" alt="logo" width={50} height={50} />

              <span className="text-xl font-black tracking-[0.2px] uppercase text-white font-inter">
                Y Viet
              </span>
            </button>
          </div>

          <div className="flex items-center justify-between gap-[49.02px]">
            <div className="flex items-center gap-3">
              <button
                onClick={handleNavigateToHome}
                className={`inline-flex items-center justify-center px-6 py-2.5 rounded-[78.638px]  text-[15px] font-medium leading-[15.726px] text-white font-roboto hover:bg-button-hover ${
                  isHome ? "bg-button-gradient-2" : ""
                }`}
              >
                Trang chủ
              </button>

              <div className="relative">
                <Menu.Root
                  open={isMenuOpen}
                  onOpenChange={(details) => setIsMenuOpen(details.open)}
                >
                  <Menu.Trigger asChild>
                    <Button
                      onPointerEnter={() => setIsMenuOpen(true)}
                      className={cn(
                        "gap-2 items-center justify-center px-6 py-2.5 rounded-[78.638px] text-[15px] font-medium leading-[15.726px] text-white font-roboto",
                        {
                          "bg-button-hover": isMenuOpen,
                          "bg-button-gradient-2": isDoctors,
                        }
                      )}
                    >
                      <span className="font-roboto font-medium leading-[15.728px]">
                        Danh sách chi tiết
                      </span>

                      <Image
                        src="/svg/chevron-down.svg"
                        alt="arrow-down"
                        width={18}
                        height={18}
                      />
                    </Button>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner className="w-[229px]">
                      <div
                        className="absolute w-full h-4 -top-4 z-50"
                        onPointerEnter={() => setIsMenuOpen(true)}
                      />
                      <Menu.Content
                        className={`rounded-[16px] pt-[14px] pb-[14px] px-0 ${
                          !!isFixed ? "bg-gradient-9" : "bg-gradient-7"
                        }`}
                        onPointerEnter={() => setIsMenuOpen(true)}
                        onPointerLeave={() => setIsMenuOpen(false)}
                      >
                        {DETAIL_LIST.map((item) => (
                          <Menu.Item
                            key={item.id}
                            value={item.id}
                            className="hover:cursor-pointer px-4 text-white font-roboto hover:bg-[rgba(0,0,0,0.10)] hover:font-semibold transition-all duration-200"
                            onClick={() => {
                              router.push(item.href);
                            }}
                          >
                            {item.title}
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
              </div>

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

              <button
                className={cn(
                  "px-4 py-2 text-center border text-white border-white rounded-md bg-button text-[15px] font-medium leading-5 w-[128px]",
                  {
                    "bg-white text-[#0274FF] box-shadow-button-gradient hover:opacity-80":
                      isFixed,
                  }
                )}
              >
                Mở ứng dụng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
