"use client";

import Image from "next/image";
import { Accordion } from "@chakra-ui/react";
import { DETAIL_LIST, SUPPORT_LIST } from "@/variables";
import { useRouter } from "next/navigation";
import FooterDesktop from "./components/FooterDesktop";

export const Footer = () => {
  const router = useRouter();

  return (
    <>
      <div className="min-h-[510px] bg-white pt-[20px] pb-[12.29px]  bg-footer rounded-t-[20px] font-inter md:hidden">
        <div className="pl-[26px] pr-[21.89px]">
          <div className="flex items-center gap-[10px]">
            <Image
              src={"/svg/y-viet.svg"}
              alt="y-viet"
              width={52}
              height={52}
            />
            <div className="text-[20px] font-extrabold text-[#0152B5]">
              Y VIET
            </div>
          </div>

          <div className="mt-4 flex items-center gap-[16.88px]">
            <div>
              <Image
                src={"/svg/qr-code.svg"}
                alt="qr-code"
                width={93.093}
                height={93.093}
              />
            </div>

            <div className="flex flex-col gap-[11.11px]">
              <div>
                <Image
                  src={"/svg/ios.svg"}
                  alt="ios"
                  width={127.112}
                  height={42.371}
                />
              </div>

              <div>
                <Image
                  src={"/svg/android.svg"}
                  alt="android"
                  width={127.112}
                  height={42.371}
                />
              </div>
            </div>
          </div>

          <div className="mt-[21px] w-full">
            <Accordion.Root
              multiple
              collapsible
              defaultValue={["b"]}
              className="w-full"
            >
              <Accordion.Item value="support">
                <Accordion.ItemTrigger className=" border-t-[0.5px] border-white px-[12.85px] py-[10px] w-full">
                  <div className="w-full">
                    <div className="text-sm font-bold text-[#2E64D6]">
                      Hỗ trợ khách hàng
                    </div>
                  </div>
                  <Accordion.ItemIndicator className="text-[16px] text-[#2E64D6]" />
                </Accordion.ItemTrigger>

                {SUPPORT_LIST?.map((item, index) => (
                  <div key={item.id}>
                    <Accordion.ItemContent>
                      <Accordion.ItemBody
                        className={`${
                          index === 0 ? "mt-[4px]" : "mt-[6px]"
                        } py-0 px-3  rounded-lg hover:cursor-pointer `}
                      >
                        <div className="font-roboto text-sm text-[#1F2A37] hover:text-[#0A6DFD] leading-[22px]">
                          {item.title}
                        </div>
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </div>
                ))}

                <Accordion.ItemContent>
                  <Accordion.ItemBody className="mt-[6px] py-0 px-3 rounded-lg hover:cursor-pointer ">
                    <div className="font-roboto text-sm text-[#1F2A37] hover:text-[#0A6DFD]">
                      <span className="font-bold">Hotline:</span> 0827 222 115
                    </div>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>

                <Accordion.ItemContent className="pb-[23.85px]">
                  <Accordion.ItemBody className="mt-[6px] py-0 px-3 rounded-lg hover:cursor-pointer ">
                    <div className="font-roboto text-sm text-[#1F2A37] hover:text-[#0A6DFD]">
                      <span className="font-bold">Email:</span> info@yviet.ai.vn
                    </div>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>

              <Accordion.Item
                value="detail"
                className="border-y-[0.5px] border-white"
              >
                <Accordion.ItemTrigger className="px-[12.85px] py-[10px] w-full">
                  <div className="w-full">
                    <div className="text-sm font-bold text-[#2E64D6]">
                      Danh sách chi tiết
                    </div>
                  </div>
                  <Accordion.ItemIndicator className="text-[16px] text-[#2E64D6]" />
                </Accordion.ItemTrigger>

                {DETAIL_LIST?.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      router.push(item.href);
                    }}
                  >
                    <Accordion.ItemContent>
                      <Accordion.ItemBody
                        className={`${index === 0 ? "mt-[4px]" : "mt-[6px]"} 
                      
                      ${
                        index === DETAIL_LIST.length - 1
                          ? "mb-[24px] py-0"
                          : "py-0"
                      }
                      px-3 hover:text-[#0274ff]  rounded-lg hover:cursor-pointer `}
                      >
                        <div className="font-roboto text-sm text-[#1F2A37] hover:text-[#0A6DFD] leading-[22px]">
                          {item.title}
                        </div>
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </div>
                ))}
              </Accordion.Item>
            </Accordion.Root>
          </div>

          <div className="mt-[14px] px-[12.84px] text-[#3A3541] text-sm leading-[27px]">
            <div className="font-bold">CÔNG TY TNHH BO VISION</div>
            <div>
              <span className="font-bold">Địa chỉ:</span> 9/8 Đường 223, xã Hòa
              Phú, huyện Củ Chi, TP. Hồ Chí Minh
            </div>
            <div>
              <span className="font-bold">Số ĐKKD:</span> 0318895338 do Sở KH&ĐT
              TP.HCM cấp lần đầu ngày 02/04/2025
            </div>
          </div>
        </div>

        <div className="mt-[18px] border-t-[0.8px] border-white pl-[41px] pr-[21.88px] pt-[9.24px]  flex items-center justify-between">
          <div className="font-roboto text-xs text-[#4B4B4B]">
            Y Viet 2025 © All Rights Reserved
          </div>

          <div className="flex items-center gap-[7.2px]">
            <div>
              <Image
                src={"/svg/icons/facebook.svg"}
                alt="facebook"
                width={31.475}
                height={31.475}
              />
            </div>

            <div>
              <Image
                src={"/svg/icons/zalo.svg"}
                alt="zalo"
                width={31.475}
                height={31.475}
              />
            </div>
          </div>
        </div>
      </div>

      <FooterDesktop />
    </>
  );
};

export default Footer;
