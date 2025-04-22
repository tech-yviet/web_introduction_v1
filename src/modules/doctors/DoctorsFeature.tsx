"use client";

import { FC, useEffect, useMemo } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA } from "@/store/modules/doctors";
import Footer from "@/layouts/Footer";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { appA } from "@/store/modules/app";

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

const $DoctorsFeature: FC<PropsFromRedux> = () => {
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

  const doctors = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      id: `${index}`,
      doctorFirstName: "BS",
      doctorLastName: "Trịnh Thụy Thùy ",
      subSpecialtyNameVi: "Nội tổng quát",
      subMainType: "INTERNAL_MEDICINE",
      address: "Bệnh viện Đại học Y Dược TP.HCM",
      appointmentCount: 18,
      hasWorkingTime: true,
      image: "/img/bs-nu.png",
    }));
  }, []);

  return (
    <div className="pt-[113px] bg-doctors-gradient-mobile  flex flex-col font-roboto">
      <div className="flex-1 px-4">
        <div className="fixed top-[40px] left-0 right-0 bg-white z-50 md:hidden font-inter px-[10px] py-[6px] bg-gradient-6 rounded-b-[16px] flex items-center gap-[15px]">
          <div className="p-3 flex items-center  bg-white rounded-[40px] flex-1 h-[32px]">
            <div className="mr-[8px]">
              <Image
                src="/svg/proicons_search.svg"
                alt="search"
                width={20}
                height={20}
              />
            </div>

            <div className="flex-1">
              <input
                type="text"
                placeholder="Tìm Bác sĩ - Điều dưỡng - NV..."
                className="bg-transparent outline-none w-full text-sm font-normal leading-[22px] "
              />
            </div>

            <div className="ml-[11px]">
              <Image
                src="/svg/icons/filter.svg"
                alt="filter"
                width={16}
                height={16}
              />
            </div>

            <div className="mx-[8px]">
              <Image
                src="/svg/trailing-caret.svg"
                alt="filter"
                width={1}
                height={1}
              />
            </div>

            <div>
              <Image
                src="/svg/Microphone.svg"
                alt="microphone"
                width={20}
                height={20}
              />
            </div>
          </div>

          <Button onClick={handleToggleMobileDrawer}>
            <Image
              src="/svg/collapse.svg"
              alt="search"
              width={32}
              height={32}
            />
          </Button>
        </div>

        <div className="flex items-center gap-2 mb-4 overflow-x-auto scrollbar-hide">
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

        <div className="grid grid-cols-1 gap-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex items-center gap-[8.73px] bg-white rounded-[12.4px] border-doctors-card py-[6.35px] pl-[6.27px] box-shadow-doctors-card hover:cursor-pointer"
            >
              <div className="bg-[#E6F1FF] rounded-[9.3px] px-[2.5px] pt-[5px]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.doctorFirstName} ${doctor.doctorLastName}`}
                  width={88}
                  height={88}
                />
              </div>

              <div className="flex-1">
                <div className="text-[#1F2A37] font-medium mb-2">{`${doctor.doctorFirstName} ${doctor.doctorLastName}`}</div>

                <div className="flex flex-col gap-[4.75px]  font-inter text-xs text-[#8E8E8E]">
                  <div className="flex items-center gap-[6.2px]">
                    <div>
                      <Image
                        src="/svg/icons/school.svg"
                        alt="school"
                        width={15}
                        height={15}
                      />
                    </div>

                    <div className=" ">{doctor.subSpecialtyNameVi}</div>
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

                    <div>{doctor.address}</div>
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

                      <div>{doctor.appointmentCount} lượt đặt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                className={`w-[41px] h-[41px] bg-white rounded-[7.455px] text-[#3590FF] hover:bg-[#0274FF] hover:text-white`}
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

      <LazyMobileDrawer />
    </div>
  );
};

interface OwnProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    ...ownProps,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const DoctorsFeature = connector($DoctorsFeature);
