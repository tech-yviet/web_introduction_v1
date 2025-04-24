"use client";

import { FC, useMemo } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import { Button, Drawer, Portal } from "@chakra-ui/react";
import Image from "next/image";
import Select, { components } from "react-select";
import orderBy from "lodash/orderBy";
import { keyBy } from "lodash";

const CustomDropdownIndicator = (props: any) => {
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
};

const CustomControl = (props: any) => {
  return (
    <components.Control {...props} className="w-full rounded-lg py-1 border">
      {props.children}
    </components.Control>
  );
};

const CustomOption = (props: any) => {
  return (
    <components.Option
      {...props}
      className="border-b hover:cursor-pointer text-[#1F2A37] font-inter px-[31px]"
    />
  );
};

const CustomMenuList = (props: any) => {
  return (
    <components.MenuList
      {...props}
      className="scrollbar-hide  shadow-slate-200 shadow-[0_0_20px_4px_rgba(0,0,0,0.08)]"
    />
  );
};



const $FilterMobileDrawer: FC<PropsFromRedux> = ({
  isOpen,
  mainSpecialties,
  cities,
  districts,
  trainingUnits,
  mainSpecialtyFilter,
  cityId,
  unitName,
  genderType,
  districtId,
}) => {
  const mainSpecialtyOptions = useMemo(() => {
    return orderBy(mainSpecialties, ["numOrder"], ["asc"]).map(
      (mainSpecialty) => ({
        value: mainSpecialty.name,
        label: mainSpecialty.description,
      })
    );
  }, [mainSpecialties]);

  const mainSpecialtyOptionsMap = useMemo(() => {
    return keyBy(mainSpecialtyOptions, "value");
  }, [mainSpecialtyOptions]);

  const cityOptions = useMemo(() => {
    return orderBy(cities, ["numOrder"], ["asc"]).map((city) => ({
      value: city.cityCode,
      label: city.nameVi,
    }));
  }, [cities]);

  const cityOptionsMap = useMemo(() => {
    return keyBy(cityOptions, "value");
  }, [cityOptions]);

  const districtOptions = useMemo(() => {
    return orderBy(districts, ["numOrder"], ["asc"]).map((district) => ({
      value: district.districtCode,
      label: district.nameVi,
    }));
  }, [districts]);

  const districtOptionsMap = useMemo(() => {
    return keyBy(districtOptions, "value");
  }, [districtOptions]);

  const trainingUnitOptions = useMemo(() => {
    return trainingUnits.map((trainingUnit) => ({
      value: trainingUnit.id,
      label: trainingUnit.name,
    }));
  }, [trainingUnits]);

  const trainingUnitOptionsMap = useMemo(() => {
    return keyBy(trainingUnitOptions, "value");
  }, [trainingUnitOptions]);

  const genderOptions = useMemo(() => {
    return [
      { value: "MALE", label: "Nam" },
      { value: "FEMALE", label: "Nữ" },
    ];
  }, []);

  const genderOptionsMap = useMemo(() => {
    return keyBy(genderOptions, "value");
  }, [genderOptions]);

  const customStyles = useMemo(() => {
    return {
      control: (base: any) => ({
        ...base,
        border: "1px solid #B9BDC1",
        borderRadius: "8px",
      }),
      menu: (base: any) => ({
        ...base,
        width: "97%",
        marginLeft: "1%",
        borderRadius: "10px",
      }),
      menuList: (base: any) => ({
        ...base,
        borderRadius: "10px",
      }),
    };
  }, []);

  const handleSelectMainSpecialty = (mainSpecialty: string) => {
    dispatch(doctorsA.setMainSpecialtyFilter([mainSpecialty]));
  };

  const handleSelectCity = (cityId: number | null) => {
    dispatch(doctorsA.setCityIdFilter(cityId));
    dispatch(doctorsA.setDistrictIdFilter(null));

    if (!!cityId) {
      dispatch(doctorsA.getDistricts(cityId));
    }
  };

  const handleSelectDistrict = (districtId: number | null) => {
    dispatch(doctorsA.setDistrictIdFilter(districtId));
  };

  const handleSelectUnitName = (unitName: string) => {
    dispatch(doctorsA.setUnitNameFilter(unitName));
  };

  const handleSelectGender = (gender: string) => {
    dispatch(doctorsA.setGenderFilter(gender));
  };

  const handleResetFilter = () => {
    dispatch(doctorsA.resetFilter());
    dispatch(doctorsA.getDoctors());
  };

  const handleClose = () => {
    dispatch(doctorsA.closeFilterMobileDrawer());
    dispatch(doctorsA.resetFilter());
  };

  const handleApplyFilter = () => {
    dispatch(doctorsA.getDoctorsByFilter());
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
          <Drawer.Content className="max-h-[95vh] px-[16px] rounded-t-[16px]">
            <Drawer.Header className="px-0 pb-0 pt-[16px] flex flex-col gap-0">
              <div className="flex items-center justify-center">
                <div className="w-[48px] h-[6px] bg-[#E9EBED] rounded-md"></div>
              </div>

              <div className="mt-6 text-lg font-roboto font-medium text-[#1F2A37] text-center">
                Chọn theo
              </div>
            </Drawer.Header>

            <Drawer.Body className="p-0 scrollbar-hide">
              <div className="mt-4 font-inter text-[#1F2A37] flex flex-col gap-4 px-1">
                <div>
                  <div className="text-sm mb-1">Ngày đặt lịch hẹn</div>
                  <Select
                    styles={customStyles}
                    isSearchable={true}
                    isClearable={true}
                    placeholder="Tất cả"
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: CustomDropdownIndicator,
                      Control: CustomControl,
                      Option: CustomOption,
                      MenuList: CustomMenuList,
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Chuyên khoa </div>

                  <Select
                    styles={customStyles}
                    isSearchable={true}
                    isClearable={true}
                    options={mainSpecialtyOptions}
                    placeholder="Tất cả"
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: CustomDropdownIndicator,
                      Control: CustomControl,
                      Option: CustomOption,
                      MenuList: CustomMenuList,
                    }}
                    onChange={(e) => {
                      if (!!e) {
                        handleSelectMainSpecialty(e.value);
                      } else {
                        handleSelectMainSpecialty("");
                      }
                    }}
                    value={
                      !!mainSpecialtyFilter[0]
                        ? mainSpecialtyOptionsMap[mainSpecialtyFilter[0]]
                        : null
                    }
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Tỉnh/Thành phố</div>

                  <Select
                    styles={customStyles}
                    isClearable={true}
                    isSearchable={true}
                    options={cityOptions}
                    placeholder="Tất cả"
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: CustomDropdownIndicator,
                      Control: CustomControl,
                      Option: CustomOption,
                      MenuList: CustomMenuList,
                    }}
                    onChange={(e) => {
                      if (!!e) {
                        handleSelectCity(e.value);
                      } else {
                        handleSelectCity(null);
                      }
                    }}
                    value={!!cityId ? cityOptionsMap[cityId] : null}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Quận/Huyện</div>

                  <Select
                    styles={customStyles}
                    isClearable={true}
                    options={districtOptions}
                    isSearchable={true}
                    placeholder="Tất cả"
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: CustomDropdownIndicator,
                      Control: CustomControl,
                      Option: CustomOption,
                      MenuList: CustomMenuList,
                    }}
                    onChange={(e) => {
                      if (!!e) {
                        handleSelectDistrict(e.value);
                      } else {
                        handleSelectDistrict(null);
                      }
                    }}
                    value={!!districtId ? districtOptionsMap[districtId] : null}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">
                    Bệnh viện/Phòng khám công tác
                  </div>

                  <Select
                    styles={customStyles}
                    isSearchable={true}
                    options={trainingUnitOptions}
                    value={!!unitName ? trainingUnitOptionsMap[unitName] : null}
                    onChange={(e) => {
                      if (!!e) {
                        handleSelectUnitName(e.label);
                      } else {
                        handleSelectUnitName("");
                      }
                    }}
                    placeholder="Tất cả"
                    isClearable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: CustomDropdownIndicator,
                      Control: CustomControl,
                      Option: CustomOption,
                      MenuList: CustomMenuList,
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Điểm đánh giá</div>

                  <Select
                    styles={customStyles}
                    isSearchable={true}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: CustomDropdownIndicator,
                      Control: CustomControl,
                      Option: CustomOption,
                      MenuList: CustomMenuList,
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm mb-1">Giới tính</div>

                  <Select
                    styles={customStyles}
                    isSearchable={true}
                    options={genderOptions}
                    placeholder="Tất cả"
                    isClearable={true}
                    value={!!genderType ? genderOptionsMap[genderType] : null}
                    onChange={(e) => {
                      if (!!e) {
                        handleSelectGender(e.value);
                      } else {
                        handleSelectGender("");
                      }
                    }}
                    components={{
                      IndicatorSeparator: () => null,
                      DropdownIndicator: CustomDropdownIndicator,
                      Control: CustomControl,
                      Option: CustomOption,
                      MenuList: CustomMenuList,
                    }}
                  />
                </div>
              </div>
            </Drawer.Body>

            <Drawer.Footer className="px-0 pt-[20px] font-roboto">
              <Button
                onClick={handleResetFilter}
                className="w-1/2 text-center rounded-[100px] bg-[#EEE] text-[#1F2A37] font-medium hover:opacity-80 text-[15px]"
              >
                Xóa lọc
              </Button>

              <Button
                onClick={handleApplyFilter}
                className="w-1/2 text-center rounded-[100px] bg-[#0274FF] text-white font-medium hover:opacity-80 text-[15px]"
              >
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
  const { isOpen } = doctorsS.selectFilterMobileDrawer(state);
  const {
    cityId,
    mainSpecialties: mainSpecialtyFilter,
    unitName,
    genderType,
    districtId,
  } = doctorsS.selectFilterDoctors(state);
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
    mainSpecialtyFilter,
    unitName,
    genderType,
    districtId,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const FilterMobileDrawer = connector($FilterMobileDrawer);
