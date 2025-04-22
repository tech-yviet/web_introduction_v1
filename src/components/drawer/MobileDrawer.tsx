"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { dispatch, useAppSelector } from "@/store";
import { appA, appS } from "@/store/modules/app";
import { Button, Drawer, Portal, Accordion } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { PATH_PAGE } from "@/core/routes";

const items = [
  {
    id: "1",
    title: "Thuốc - Sản phẩm",
    link: "/",
    icon: "/svg/icons/circle-thuoc.svg",
  },
  {
    id: "2",
    title: "Tư vấn - Dịch vụ",
    link: "/",
    icon: "/svg/icons/circle-tuvan.svg",
  },
  {
    id: "3",
    title: "Bác sĩ - Điều dưỡng - NVYT",
    link: PATH_PAGE.doctors,
    icon: "/svg/icons/circle-bacsi.svg",
  },
  {
    id: "4",
    title: "Bệnh viện - Phòng khám",
    link: "/",
    icon: "/svg/icons/circle-benhvien.svg",
  },
  {
    id: "5",
    title: "Trung tâm xét nghiệm",
    link: "/",
    icon: "/svg/icons/circle-trungtam.svg",
  },
  {
    id: "6",
    title: "Nhà thuốc - Cửa hàng",
    link: "/",
    icon: "/svg/icons/circle-nhathuoc.svg",
  },
];

const MobileDrawer = () => {
  const router = useRouter();

  const [isNearTop, setIsNearTop] = useState(true);
  const isOpenDrawerMenuMobile = useAppSelector(
    appS.selectIsOpenDrawerMenuMobile
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (!isNearTop && scrollTop === 0) {
        setIsNearTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNearTop]);

  const handleClose = () => {
    dispatch(appA.closeDrawerMenuMobile());
  };

  const handleClickItem = (link: string) => {
    router.push(link);
    dispatch(appA.closeDrawerMenuMobile());
  };

  return (
    <Drawer.Root open={isOpenDrawerMenuMobile} onOpenChange={handleClose}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content className="w-[290px] pt-[15px] font-inter bg-[rgba(255,255,255,0.97)] rounded-tl-[16px] rounded-bl-[16px]">
            <Drawer.Body className="px-[18px]">
              <div>
                <div className="flex justify-end">
                  <Button
                    className="rounded-xl border border-[rgba(2,116,255,0.50)] hover:opacity-70"
                    onClick={handleClose}
                  >
                    <Image
                      src="/svg/icons/eva_close-outline.svg"
                      alt="logo"
                      width={18}
                      height={18}
                    />
                  </Button>
                </div>

                <div>
                  <Button className="flex items-center gap-2">
                    <Image
                      src="/svg/y-viet.svg"
                      alt="logo"
                      width={41}
                      height={41}
                    />
                    <div className="text-[#1B63DE] font-extrabold uppercase text-[20px]">
                      Y Viet
                    </div>
                  </Button>
                </div>

                <div className="mt-[24px]">
                  <div
                    onClick={() => handleClickItem("/")}
                    className="flex items-start gap-[10px] px-4 py-3 hover:bg-[#EAF2FF] rounded-lg hover:cursor-pointer group"
                  >
                    <div>
                      <Image
                        src="/svg/icons/home.svg"
                        alt="home"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className="font-roboto text-sm font-semibold text-[#1F2A37]  group-hover:text-[#0A6DFD]">
                      Trang chủ
                    </div>
                  </div>

                  <Accordion.Root collapsible defaultValue={["b"]}>
                    <Accordion.Item value="detail">
                      <Accordion.ItemTrigger className="px-4 py-3 hover:bg-[#EAF2FF] rounded-lg hover:cursor-pointer w-full flex items-center justify-between">
                        <div className="flex items-center gap-[10px]">
                          <div>
                            <Image
                              src="/svg/icons/list-detail.svg"
                              alt="danh sach chi tiet"
                              width={18}
                              height={18}
                            />
                          </div>
                          <div className="font-roboto text-sm font-semibold text-[#1F2A37] group-hover:text-[#0A6DFD]">
                            Danh sách chi tiết
                          </div>
                        </div>
                        <Accordion.ItemIndicator className="text-[16px] text-[#262E3D]" />
                      </Accordion.ItemTrigger>

                      {items?.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => handleClickItem(item.link)}
                        >
                          <Accordion.ItemContent>
                            <Accordion.ItemBody className="px-4 py-3 hover:bg-[#EAF2FF] rounded-lg hover:cursor-pointer flex items-center gap-[10px]">
                              <div>
                                <Image
                                  src={item.icon}
                                  alt={item.title}
                                  width={20}
                                  height={20}
                                />
                              </div>

                              <div className="font-roboto text-sm text-[#1F2A37] group-hover:text-[#0A6DFD]">
                                {item.title}
                              </div>
                            </Accordion.ItemBody>
                          </Accordion.ItemContent>
                        </div>
                      ))}
                    </Accordion.Item>
                  </Accordion.Root>

                  <div className="flex items-center gap-[10px] px-4 py-3 hover:bg-[#EAF2FF] rounded-lg hover:cursor-pointer group">
                    <div>
                      <Image
                        src="/svg/icons/dangkydoitac.svg"
                        alt="dang ky doi tac"
                        width={18}
                        height={18}
                      />
                    </div>
                    <div className="font-roboto text-sm font-semibold text-[#1F2A37]  group-hover:text-[#0A6DFD]">
                      Đăng ký đối tác
                    </div>
                  </div>
                </div>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileDrawer;
