"use client";

import { FC } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import { Button, Drawer, Portal } from "@chakra-ui/react";
import Image from "next/image";
import Select from "react-select";

const $FilterMobileDrawer: FC<PropsFromRedux> = ({ isOpen }) => {
  const handleClose = () => {
    dispatch(doctorsA.closeFilterMobileDrawer());
  };

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={handleClose}
      placement="bottom"
      preventScroll
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content className="max-h-[95vh] px-[20px] rounded-t-[16px]">
            <Drawer.Header className="px-0 pb-0 pt-[16px] flex flex-col gap-0">
              <div className="flex items-center justify-center">
                <div className="w-[48px] h-[6px] bg-[#E9EBED] rounded-md"></div>
              </div>

              <div className="mt-6 text-lg font-roboto font-medium text-[#1F2A37] text-center">
                Chọn theo
              </div>
            </Drawer.Header>

            <Drawer.Body className="p-0 scrollbar-hide">
              <div className="mt-4 font-inter text-[#1F2A37] flex flex-col gap-4">
                <div>
                  <div className="text-sm mb-1">Ngày đặt lịch hẹn</div>

                  <Select
                    isSearchable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: () => {
                        return (
                          <div className="pr-[12px]">
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Placeholder: () => null,
                      Input: (props) => {
                        return (
                          <div className="w-full h-full font-inter py-2.5 pl-[4px]">
                            <input
                              type="text"
                              placeholder="Tất cả"
                              className="outline-none w-full"
                              {...props}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <div
                            {...props}
                            className="rounded-lg border-[#B9BDC1] border flex items-center"
                          >
                            {props.children}
                          </div>
                        );
                      },
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Chuyên khoa </div>

                  <Select
                    isSearchable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: () => {
                        return (
                          <div className="pr-[12px]">
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Placeholder: () => null,
                      Input: (props) => {
                        return (
                          <div className="w-full h-full font-inter py-2.5 pl-[4px]">
                            <input
                              type="text"
                              placeholder="Tất cả"
                              className="outline-none w-full"
                              {...props}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <div
                            {...props}
                            className="rounded-lg border-[#B9BDC1] border flex items-center"
                          >
                            {props.children}
                          </div>
                        );
                      },
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Tỉnh/Thành phố </div>

                  <Select
                    isSearchable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: () => {
                        return (
                          <div className="pr-[12px]">
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Placeholder: () => null,
                      Input: (props) => {
                        return (
                          <div className="w-full h-full font-inter py-2.5 pl-[4px]">
                            <input
                              type="text"
                              placeholder="Tất cả"
                              className="outline-none w-full"
                              {...props}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <div
                            {...props}
                            className="rounded-lg border-[#B9BDC1] border flex items-center"
                          >
                            {props.children}
                          </div>
                        );
                      },
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Quận/Huyện</div>

                  <Select
                    isSearchable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: () => {
                        return (
                          <div className="pr-[12px]">
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Placeholder: () => null,
                      Input: (props) => {
                        return (
                          <div className="w-full h-full font-inter py-2.5 pl-[4px]">
                            <input
                              type="text"
                              placeholder="Tất cả"
                              className="outline-none w-full"
                              {...props}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <div
                            {...props}
                            className="rounded-lg border-[#B9BDC1] border flex items-center"
                          >
                            {props.children}
                          </div>
                        );
                      },
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">
                    Bệnh viện/Phòng khám công tác
                  </div>

                  <Select
                    isSearchable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: () => {
                        return (
                          <div className="pr-[12px]">
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Placeholder: () => null,
                      Input: (props) => {
                        return (
                          <div className="w-full h-full font-inter py-2.5 pl-[4px]">
                            <input
                              type="text"
                              placeholder="Tất cả"
                              className="outline-none w-full"
                              {...props}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <div
                            {...props}
                            className="rounded-lg border-[#B9BDC1] border flex items-center"
                          >
                            {props.children}
                          </div>
                        );
                      },
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Điểm đánh giá</div>

                  <Select
                    isSearchable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: () => {
                        return (
                          <div className="pr-[12px]">
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Placeholder: () => null,
                      Input: (props) => {
                        return (
                          <div className="w-full h-full font-inter py-2.5 pl-[4px]">
                            <input
                              type="text"
                              placeholder="Tất cả"
                              className="outline-none w-full"
                              {...props}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <div
                            {...props}
                            className="rounded-lg border-[#B9BDC1] border flex items-center"
                          >
                            {props.children}
                          </div>
                        );
                      },
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Giới tính</div>

                  <Select
                    isSearchable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: () => {
                        return (
                          <div className="pr-[12px]">
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Placeholder: () => null,
                      Input: (props) => {
                        return (
                          <div className="w-full h-full font-inter py-2.5 pl-[4px]">
                            <input
                              type="text"
                              placeholder="Tất cả"
                              className="outline-none w-full"
                              {...props}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <div
                            {...props}
                            className="rounded-lg border-[#B9BDC1] border flex items-center"
                          >
                            {props.children}
                          </div>
                        );
                      },
                    }}
                  />
                </div>
              </div>
            </Drawer.Body>

            <Drawer.Footer className="px-0 pt-[20px] font-roboto">
              <Button className="w-1/2 text-center rounded-[100px] bg-[#EEE] text-[#1F2A37] font-medium hover:opacity-80 text-[15px]">
                Xóa lọc
              </Button>

              <Button className="w-1/2 text-center rounded-[100px] bg-[#0274FF] text-white font-medium hover:opacity-80 text-[15px]">
                Lọc thông tin
              </Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild className="absolute top-4 right-4">
              <button className="bg-[#E5E5E5] rounded-full w-[24px] h-[24px] flex items-center justify-center">
                <Image
                  src="/svg/icons/close.svg"
                  alt="close"
                  width={10}
                  height={10}
                />
              </button>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

interface OwnProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const isOpen = doctorsS.selectFilterMobileDrawer(state);

  return {
    ...ownProps,
    isOpen,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const FilterMobileDrawer = connector($FilterMobileDrawer);
