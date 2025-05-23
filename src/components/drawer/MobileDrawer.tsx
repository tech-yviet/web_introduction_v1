"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { dispatch, useAppSelector } from "@/store";
import { appA, appS } from "@/store/modules/app";
import { Button, Drawer, Portal, Accordion } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";
import { PATH_PAGE } from "@/core/routes";
import { cn } from "@/utils/className";
import { ReactSVG } from "react-svg";

const MobileDrawer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isNearTop, setIsNearTop] = useState(true);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const isOpenDrawerMenuMobile = useAppSelector(
    appS.selectIsOpenDrawerMenuMobile
  );

  const items = useMemo(() => {
    return [
      {
        id: "1",
        title: "Thuốc - Sản phẩm",
        link: "/",
        icon: "/svg/icons/circle-thuoc.svg",
        isActive: pathname === "/thuoc-san-pham",
      },
      {
        id: "2",
        title: "Tư vấn - Dịch vụ",
        link: "/",
        icon: "/svg/icons/circle-tuvan.svg",
        isActive: pathname === "/tuvan-dich-vu",
      },
      {
        id: "3",
        title: "Bác sĩ - Điều dưỡng - NVYT",
        link: PATH_PAGE.doctors,
        icon: "/svg/icons/circle-bacsi.svg",
        isActive: pathname === PATH_PAGE.doctors,
      },
      {
        id: "4",
        title: "Bệnh viện - Phòng khám",
        link: "/",
        icon: "/svg/icons/circle-benhvien.svg",
        isActive: pathname === "/benh-vien-phong-kham",
      },
      {
        id: "5",
        title: "Trung tâm xét nghiệm",
        link: "/",
        icon: "/svg/icons/circle-trungtam.svg",
        isActive: pathname === "/trung-tam-xet-nghiem",
      },
      {
        id: "6",
        title: "Nhà thuốc - Cửa hàng",
        link: "/",
        icon: "/svg/icons/circle-nhathuoc.svg",
        isActive: pathname === "/nha-thuoc-cua-hang",
      },
    ];
  }, [pathname]);

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
            <Drawer.Body className="px-[18px] pt-0">
              <div>
                <div className="flex justify-end">
                  <Button
                    size="2xs"
                    className="rounded-[8px] border border-[rgba(2,116,255,0.50)] hover:opacity-70"
                    onClick={handleClose}
                  >
                    <Image
                      src="/svg/icons/eva_close-outline.svg"
                      alt="logo"
                      width={12}
                      height={12}
                    />
                  </Button>
                </div>

                <div>
                  <Button className="flex items-center gap-2">
                    <Image
                      src="/svg/logo-header-mobile.svg"
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
                    className={cn(
                      "flex items-start gap-[10px] px-4 py-3 hover:bg-[#EAF2FF] rounded-lg hover:cursor-pointer group",
                      {
                        "bg-[#EAF2FF]": pathname === "/",
                      }
                    )}
                  >
                    <div>
                      {/* <Image
                        src="/svg/icons/home.svg"
                        alt="home"
                        width={18}
                        height={18}
                      /> */}

                      <ReactSVG
                        src="/svg/icons/home.svg"
                        className="w-[18px] h-[18px]"
                        beforeInjection={(svg) => {
                          svg.setAttribute("width", "100%");
                          svg.setAttribute("height", "100%");
                        }}
                      />
                    </div>
                    <div
                      className={cn(
                        "font-roboto text-sm font-semibold text-[#1F2A37]  group-hover:text-[#0A6DFD]",
                        {
                          "text-[#0A6DFD]": pathname === "/",
                        }
                      )}
                    >
                      Trang chủ
                    </div>
                  </div>

                  <Accordion.Root
                    collapsible
                    onValueChange={(val) => {
                      if (val.value.includes("detail")) {
                        setIsAccordionOpen(true);
                      } else {
                        setIsAccordionOpen(false);
                      }
                    }}
                  >
                    <Accordion.Item value="detail">
                      <Accordion.ItemTrigger
                        className={cn(
                          "px-4 py-3 hover:bg-[#EAF2FF] rounded-lg hover:cursor-pointer w-full flex items-center justify-between",
                          {
                            "bg-[#EAF2FF]":
                              !isAccordionOpen &&
                              items.some((item) => item.isActive),
                          }
                        )}
                      >
                        <div className="flex items-center gap-[10px]">
                          <div>
                            {/* <Image
                              src="/svg/icons/list-detail.svg"
                              alt="danh sach chi tiet"
                              width={18}
                              height={18}
                            /> */}

                            <ReactSVG
                              src="/svg/icons/list-detail.svg"
                              className="w-[18px] h-[18px]"
                              beforeInjection={(svg) => {
                                svg.setAttribute("width", "100%");
                                svg.setAttribute("height", "100%");
                              }}
                            />
                          </div>
                          <div
                            className={cn(
                              "font-roboto text-sm font-semibold text-[#1F2A37] group-hover:text-[#0A6DFD]",
                              {
                                "text-[#0A6DFD]":
                                  !isAccordionOpen &&
                                  items.some((item) => item.isActive),
                              }
                            )}
                          >
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
                            <Accordion.ItemBody
                              className={cn(
                                "px-4 py-3 hover:bg-[#EAF2FF] rounded-lg hover:cursor-pointer flex items-center gap-[10px]",
                                {
                                  "bg-[#EAF2FF]": item.isActive,
                                }
                              )}
                            >
                              <div>
                                {/* <Image
                                  src={item.icon}
                                  alt={item.title}
                                  width={20}
                                  height={20}
                                /> */}

                                <ReactSVG
                                  src={item.icon}
                                  className="w-[20px] h-[20px]"
                                  beforeInjection={(svg) => {
                                    svg.setAttribute("width", "100%");
                                    svg.setAttribute("height", "100%");
                                  }}
                                />
                              </div>

                              <div
                                className={cn(
                                  "font-roboto text-sm text-[#1F2A37] group-hover:text-[#0A6DFD]",
                                  {
                                    "text-[#0A6DFD]": item.isActive,
                                  }
                                )}
                              >
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
                      {/* <Image
                        src="/svg/icons/dangkydoitac.svg"
                        alt="dang ky doi tac"
                        width={18}
                        height={18}
                      /> */}

                      <ReactSVG
                        src="/svg/icons/dangkydoitac.svg"
                        className="w-[18px] h-[18px]"
                        beforeInjection={(svg) => {
                          svg.setAttribute("width", "100%");
                          svg.setAttribute("height", "100%");
                        }}
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
