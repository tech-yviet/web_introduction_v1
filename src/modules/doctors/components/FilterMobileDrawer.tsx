"use client";

import { FC, useMemo } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import { Button, Drawer, Portal } from "@chakra-ui/react";
import Image from "next/image";
import Select, { components } from "react-select";
import orderBy from "lodash/orderBy";

const $FilterMobileDrawer: FC<PropsFromRedux> = ({
  isOpen,
  mainSpecialties,
  cities,
  districts,
  cityId,
  trainingUnits,
}) => {
  const handleClose = () => {
    dispatch(doctorsA.closeFilterMobileDrawer());
  };

  const mainSpecialtyOptions = useMemo(() => {
    return orderBy(mainSpecialties, ["numOrder"], ["asc"]).map(
      (mainSpecialty) => ({
        value: mainSpecialty.name,
        label: mainSpecialty.description,
      })
    );
  }, [mainSpecialties]);

  const cityOptions = useMemo(() => {
    return orderBy(cities, ["numOrder"], ["asc"]).map((city) => ({
      value: city.cityCode,
      label: city.nameVi,
    }));
  }, [cities]);

  const districtOptions = useMemo(() => {
    return orderBy(districts, ["numOrder"], ["asc"]).map((district) => ({
      value: district.districtCode,
      label: district.nameVi,
    }));
  }, [districts]);

  const trainingUnitOptions = useMemo(() => {
    return trainingUnits.map((trainingUnit) => ({
      value: trainingUnit.id,
      label: trainingUnit.name,
    }));
  }, [trainingUnits]);

  const scoreOptions = useMemo(() => {
    return [
      { value: "asc", label: "Tăng dần" },
      { value: "desc", label: "Giảm dần" },
    ];
  }, []);

  const genderOptions = useMemo(() => {
    return [
      { value: "MALE", label: "Nam" },
      { value: "FEMALE", label: "Nữ" },
    ];
  }, []);

  const handleSelectCity = (cityId: number) => {
    dispatch(doctorsA.setCityIdFilterMobileDrawer(cityId));
    dispatch(doctorsA.getDistricts(cityId));
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
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: "1px solid #B9BDC1",
                        borderRadius: "8px",
                      }),
                      menu: (base) => ({
                        ...base,
                        boxShadow: "4px 4px 16px 4px rgba(0, 0, 0, 0.10)",
                      }),
                    }}
                    isSearchable={true}
                    isClearable={true}
                    options={mainSpecialtyOptions}
                    placeholder="Tất cả"
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: (props) => {
                        return (
                          <div className="pr-[12px]" {...props}>
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <components.Control
                            {...props}
                            className="w-full rounded-lg py-1.5 border"
                          >
                            {props.children}
                          </components.Control>
                        );
                      },
                      Menu: (props) => {
                        return (
                          <components.Menu {...props} className="border-l " />
                        );
                      },
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Tỉnh/Thành phố</div>

                  <Select
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: "1px solid #B9BDC1",
                        borderRadius: "8px",
                      }),
                      menu: (base) => ({
                        ...base,
                        boxShadow: "4px 4px 16px 4px rgba(0, 0, 0, 0.10)",
                      }),
                    }}
                    isClearable={true}
                    isSearchable={true}
                    options={cityOptions}
                    placeholder="Tất cả"
                    onChange={(e) => {
                      if (!!e) {
                        handleSelectCity(e.value);
                      }
                    }}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: (props) => {
                        return (
                          <div className="pr-[12px]" {...props}>
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <components.Control
                            {...props}
                            className="w-full rounded-lg py-1.5 border"
                          >
                            {props.children}
                          </components.Control>
                        );
                      },
                      Menu: (props) => {
                        return (
                          <components.Menu {...props} className="border-l " />
                        );
                      },
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Quận/Huyện</div>

                  <Select
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: "1px solid #B9BDC1",
                        borderRadius: "8px",
                      }),
                      menu: (base) => ({
                        ...base,
                        boxShadow: "4px 4px 16px 4px rgba(0, 0, 0, 0.10)",
                      }),
                    }}
                    isSearchable={true}
                    options={districtOptions}
                    placeholder="Tất cả"
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: (props) => {
                        return (
                          <div className="pr-[12px]" {...props}>
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <components.Control
                            {...props}
                            className="w-full rounded-lg py-1.5 border"
                          >
                            {props.children}
                          </components.Control>
                        );
                      },
                      Menu: (props) => {
                        return (
                          <components.Menu {...props} className="border-l " />
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
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: "1px solid #B9BDC1",
                        borderRadius: "8px",
                      }),
                      menu: (base) => ({
                        ...base,
                        boxShadow: "4px 4px 16px 4px rgba(0, 0, 0, 0.10)",
                      }),
                    }}
                    isSearchable={true}
                    options={trainingUnitOptions}
                    placeholder="Tất cả"
                    isClearable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: (props) => {
                        return (
                          <div className="pr-[12px]" {...props}>
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <components.Control
                            {...props}
                            className="w-full rounded-lg py-1.5 border"
                          >
                            {props.children}
                          </components.Control>
                        );
                      },
                      Menu: (props) => {
                        return (
                          <components.Menu {...props} className="border-l " />
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
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: "1px solid #B9BDC1",
                        borderRadius: "8px",
                      }),
                      menu: (base) => ({
                        ...base,
                        boxShadow: "4px 4px 16px 4px rgba(0, 0, 0, 0.10)",
                      }),
                    }}
                    isSearchable={true}
                    options={genderOptions}
                    placeholder="Tất cả"
                    isClearable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: (props) => {
                        return (
                          <div className="pr-[12px]" {...props}>
                            <Image
                              src="/svg/icons/arrow-down-ori.svg"
                              alt="arrow-down"
                              width={24}
                              height={24}
                            />
                          </div>
                        );
                      },
                      Control: (props) => {
                        return (
                          <components.Control
                            {...props}
                            className="w-full rounded-lg py-1.5 border"
                          >
                            {props.children}
                          </components.Control>
                        );
                      },
                      Menu: (props) => {
                        return (
                          <components.Menu {...props} className="border-l " />
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
  const { isOpen, cityId } = doctorsS.selectFilterMobileDrawer(state);
  const mainSpecialties = doctorsS.selectMainSpecialties(state);
  const cities = doctorsS.selectCities(state);
  const districts = doctorsS.selectDistricts(state);
  const trainingUnits = doctorsS.selectTrainingUnits(state);

  return {
    ...ownProps,
    isOpen,
    cityId,
    mainSpecialties,
    cities,
    districts,
    trainingUnits,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const FilterMobileDrawer = connector($FilterMobileDrawer);
