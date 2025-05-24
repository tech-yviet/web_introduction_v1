"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderDesktop from "./components/HeaderDesktop";
import { Button, Portal, Menu } from "@chakra-ui/react";

export const Header = ({ isFixed = false }: { isFixed?: boolean }) => {
  const router = useRouter();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-between  px-[9px] py-[7.5px] h-[40px] md:hidden font-inter">
        <button
          className="flex items-center gap-2"
          onClick={() => router.push("/")}
        >
          <Image
            src="/svg/logo-header-mobile.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <div className="text-[#1B63DE] font-extrabold uppercase">Y Viet</div>
        </button>

        <div className="flex items-center gap-3">
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline" size="sm" className="p-0 outline-none">
                <Image
                  src="/img/Flag_of_Vietnam.svg.png"
                  alt="language"
                  width={24}
                  height={16}
                />
              </Button>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="vi" className="hover:cursor-pointer">
                    Tiếng Việt
                  </Menu.Item>

                  <Menu.Item value="en" className="hover:cursor-pointer">
                    English
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>

          <button className="bg-button-gradient box-shadow-button-gradient px-4 py-[2.5px] rounded-md h-[25px] flex justify-center items-center text-[#FAFAFA] text-[11px] font-semibold leading-[20px] hover:opacity-80">
            Mở ứng dụng
          </button>
        </div>
      </div>

      <HeaderDesktop isFixed={isFixed} />
    </>
  );
};

export default Header;
