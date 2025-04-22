"use client";

import { FC, useEffect } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA } from "@/store/modules/doctors";
import Footer from "@/layouts/Footer";
import { Button } from "@chakra-ui/react";
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

  const filterDoctors = [
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

  return (
    <div className="pt-[113px] bg-doctors-gradient-mobile h-screen flex flex-col font-roboto">
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

        <div className="flex items-center gap-2 mb-4 overflow-x-auto">
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

        <div>Danh sách bác sĩ</div>
        <div>Pagination</div>
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
