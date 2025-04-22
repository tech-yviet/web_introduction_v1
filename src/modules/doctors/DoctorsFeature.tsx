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

  return (
    <div className="pt-[113px] bg-doctors-gradient-mobile h-screen flex flex-col">
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

        <div>Filter</div>
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
