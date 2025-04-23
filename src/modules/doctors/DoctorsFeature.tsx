"use client";

import { FC, useEffect, useMemo } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import Footer from "@/layouts/Footer";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { appA } from "@/store/modules/app";
import HeaderDesktop from "@/layouts/components/HeaderDesktop";
import FooterDesktop from "@/layouts/components/FooterDesktop";

const LazyMobileDrawer = dynamic(
  () => import("@/components/drawer/MobileDrawer"),
  {
    ssr: false,
  }
);

enum FILTER_DOCTORS {
  RANG_HAM_MAT = "rang-ham-mat",
  TIM_MACH = "tim-mach",
  DA_LIEU = "da-lieu",
  ALL = "all",
  HO_HAP = "ho-hap",
  THAN_TIET_NIU = "than-tiet-niu",
  NOI_TIET_DAI_THAO_DUONG = "noi-tiet-dai-thao-duong",
  TIEU_HOA = "tieu-hoa",
  CO_XUONG_KHOP = "co-xung-khop",
}

const $DoctorsFeature: FC<PropsFromRedux> = ({ doctors }) => {
  useEffect(() => {
    dispatch(doctorsA.init());

    return () => {
      dispatch(doctorsA.destroy());
    };
  }, []);

  const handleToggleMobileDrawer = () => {
    dispatch(appA.toggleDrawerMenuMobile());
  };

  const filterDoctors = useMemo(() => {
    return [
      {
        id: "0",
        name: "Tất cả",
        value: FILTER_DOCTORS.ALL,
      },
      {
        id: "1",
        name: "Răng hàm mặt ",
        value: FILTER_DOCTORS.RANG_HAM_MAT,
      },
      {
        id: "2",
        name: "Tim mạch",
        value: FILTER_DOCTORS.TIM_MACH,
      },
      {
        id: "3",
        name: "Da liễu",
        value: FILTER_DOCTORS.DA_LIEU,
      },
      {
        id: "4",
        name: "Hô hấp",
        value: FILTER_DOCTORS.HO_HAP,
      },
      {
        id: "5",
        name: "Than tiết niệu",
        value: FILTER_DOCTORS.THAN_TIET_NIU,
      },
      {
        id: "6",
        name: "Nội tết đại thao duong",
        value: FILTER_DOCTORS.NOI_TIET_DAI_THAO_DUONG,
      },
      {
        id: "7",
        name: "Tieu hóa",
        value: FILTER_DOCTORS.TIEU_HOA,
      },
      {
        id: "8",
        name: "Cơ xương khớp",
        value: FILTER_DOCTORS.CO_XUONG_KHOP,
      },
    ];
  }, []);

  return (
    <>
      <HeaderDesktop isFixed={true} />

      <div className="pt-[113px] md:pt-[94px] bg-doctors-gradient-mobile  flex flex-col font-roboto">
        <div className="flex-1 px-4 md:w-[1200px] md:mx-auto  md:px-[28px]">
          <div className="hidden md:flex">
            <div className="flex items-center gap-2 bg-white px-4 py-[10px] rounded-bl-[12px] rounded-tl-[12px]">
              <div>
                <Image
                  src="/svg/icons/grid-view.svg"
                  alt="grid-view"
                  width={20}
                  height={20}
                />
              </div>

              <div className="text-sm font-inter font-medium text-[#0274FF]">
                Danh sach chi tiet
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-[10px] bg-gradient-10 rounded-br-[12px] rounded-tr-[12px]">
              <div>
                <Image
                  src="/svg/icons/menu.svg"
                  alt="menu"
                  width={20}
                  height={20}
                />
              </div>

              <div className="text-sm font-inter font-semibold text-white">
                Danh sách Bác sĩ - Điều dưỡng - NVYT
              </div>
            </div>
          </div>

          <div className="fixed top-[40px] left-0 right-0 z-50 font-inter px-[10px] py-[10.5px] bg-gradient-6 rounded-b-[16px] flex items-center gap-[15px] md:static md:bg-white-1 md:mt-[36px] md:rounded-[40px] md:max-w-[886px] md:mx-auto md:px-0">
            <div className="p-3 flex items-center  bg-white rounded-[40px] flex-1 h-[32px] md:px-4">
              <div className="mr-[8px]">
                <Image
                  src="/svg/proicons_search.svg"
                  alt="search"
                  width={20}
                  height={20}
                  className="md:w-[24px] md:h-[24px]"
                />
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Tìm Bác sĩ - Điều dưỡng - NVYT"
                  className="bg-transparent outline-none text-sm font-roboto font-normal leading-[22px] w-full min-w-[190px] truncate md:text-base md:text-[#B9BDC1]"
                />
              </div>

              <div className="md:hidden">
                <Image
                  src="/svg/icons/filter.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
              </div>

              <div className="mx-[8px] md:hidden">
                <Image
                  src="/svg/trailing-caret.svg"
                  alt="filter"
                  width={1}
                  height={1}
                />
              </div>

              <div className="md:ml-3">
                <Image
                  src="/svg/Microphone.svg"
                  alt="microphone"
                  width={20}
                  height={20}
                  className="md:w-[24px] md:h-[24px]"
                />
              </div>

              <div className="hidden md:block mx-[12px]">
                <Image
                  src="/svg/trailing-caret.svg"
                  alt="filter"
                  width={1}
                  height={1}
                />
              </div>

              <div className="hidden md:block">
                <Image
                  src="/svg/gallery-add.svg"
                  alt="gallery-add"
                  width={24}
                  height={24}
                />
              </div>
            </div>

            <Button
              onClick={handleToggleMobileDrawer}
              size="xs"
              className="md:hidden"
            >
              <Image
                src="/svg/collapse.svg"
                alt="search"
                width={32}
                height={32}
              />
            </Button>
            
          </div>

          <div className="flex items-center gap-2 mb-4 overflow-x-auto scrollbar-hide md:hidden">
            {filterDoctors.map((filter) => (
              <Button
                className="px-4 rounded-[100px] bg-[rgba(255,255,255,0.90)] text-sm font-medium text-[#0274FF] hover:bg-[#0274FF] hover:text-white"
                size="xs"
                key={filter.id}
              >
                {filter.name}
              </Button>
            ))}
          </div>

          <div className="md:mt-[36px]">
            <div>
              <div>Tim Kiem chuyen khoa</div>
              <div>Tuỳ chọn nâng cao</div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {doctors.map((doctor) => (
                <div
                  key={doctor.doctorId}
                  className="flex items-center gap-[8.73px] bg-white rounded-[12.4px] border-doctors-card py-[6.35px] pl-[6.27px] box-shadow-doctors-card hover:cursor-pointer"
                >
                  <div className="bg-[#E6F1FF] rounded-[9.3px] px-[2.5px] pt-[5px]">
                    <Image
                      src={doctor?.urlAvatar}
                      alt={`${doctor.fullName}`}
                      width={88}
                      height={88}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="text-[#1F2A37] font-medium mb-2">{`${doctor.fullName}`}</div>

                    <div className="flex flex-col gap-[4.75px] font-inter text-xs text-[#8E8E8E]">
                      <div className="flex items-center gap-[6.2px]">
                        <div>
                          <Image
                            src="/svg/icons/school.svg"
                            alt="school"
                            width={15}
                            height={15}
                          />
                        </div>

                        <div>{doctor.mainSpecialty}</div>
                      </div>

                      <div className="flex items-center gap-[6.2px]">
                        <div>
                          <Image
                            src="/svg/icons/location.svg"
                            alt="location"
                            width={15}
                            height={16}
                          />
                        </div>

                        <div>{doctor.unitName}</div>
                      </div>

                      <div className="flex items-center gap-[17.68px]">
                        <div className="flex items-center gap-[6.2px]">
                          <div>
                            <div>
                              <Image
                                src="/svg/icons/star.svg"
                                alt="star"
                                width={13}
                                height={13}
                              />
                            </div>
                          </div>

                          <div>9.5/10</div>
                        </div>

                        <div className="flex items-center gap-[6.2px]">
                          <div>
                            <div>
                              <Image
                                src="/svg/icons/calendar.svg"
                                alt="calendar"
                                width={11.625}
                                height={11.625}
                              />
                            </div>
                          </div>

                          <div>{doctor.numberOfOrders} lượt đặt</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <ButtonGroup className="gap-1">
              <IconButton className="w-[41px] h-[41px] bg-white rounded-[7.455px]">
                <Image
                  src="/svg/icons/arrow-left.svg"
                  alt="arrow-left"
                  width={14.909}
                  height={14.909}
                />
              </IconButton>

              {[1, 2, 3, "...", 25].map((item, index) => (
                <IconButton
                  key={index}
                  className={`${
                    index === 0 ? "bg-[#3590FF] text-white" : "bg-white"
                  } w-[41px] h-[41px] rounded-[7.455px] text-[#3590FF] hover:bg-[#0274FF] hover:text-white`}
                >
                  {item}
                </IconButton>
              ))}

              <IconButton className="w-[41px] h-[41px] bg-white rounded-[7.455px]">
                <Image
                  src="/svg/icons/arrow-right.svg"
                  alt="arrow-right"
                  width={14.909}
                  height={14.909}
                />
              </IconButton>
            </ButtonGroup>
          </div>
        </div>

        <Footer />
        <FooterDesktop />

        <LazyMobileDrawer />
      </div>
    </>
  );
};

interface OwnProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const doctors = doctorsS.selectDoctors(state);

  return {
    ...ownProps,
    doctors,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const DoctorsFeature = connector($DoctorsFeature);
