"use client";

import React, { FC, useMemo } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Select, { components } from "react-select";
import orderBy from "lodash/orderBy";
import keyBy from "lodash/keyBy";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import AsyncSelect from "react-select/async";
import axiosInstance from "@/core/axiosInstance";
import { API_DOCTORS } from "@/core/config";
import debounce from "lodash/debounce";

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

const datePickerCustomStyles = `
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker-popper {
    width: 100% !important;
    left: 0 !important;
    margin-top: 8px !important;
    position: relative !important;
    transform: none !important;
  }

  .react-datepicker {
    font-family: inherit;
    border: 1px solid #38B6FF;
    border-radius: 11.162px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 20px;
    padding-bottom: 10px;
    width: 100%;
    background: white;
  }

  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
    padding: 0;
  }

  .react-datepicker__month-container {
    width: 100%;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    margin-bottom: 8px;
  }

  .react-datepicker__day-name {
    color: #0274FF;
    font-weight: 500;
    width: 36px;
    margin: 0;
    text-align: center;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }

  .react-datepicker__day {
    margin: 0;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-datepicker__day:not([aria-disabled=true]):hover {
    background-color: #E6F0FF;
    border-radius: 50%;
    cursor: pointer;
  }

  .react-datepicker__day:hover {
    background-color: #E6F0FF;
  }

  .react-datepicker__day--selected {
    background-color: #0274FF !important;
    color: white !important;
  }

  .react-datepicker__day--highlighted {
    background-color: transparent;
    color: inherit;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #0274FF !important;
    color: white !important;
  }

  .react-datepicker__day--highlighted::after {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    width: 8px;
    height: 8px;
    background-color: #22C55E;
    border-radius: 50%;
  }

  .react-datepicker__navigation {
    top: 16px;
    color: #0274FF;
  }

  .react-datepicker__navigation--previous {
    left: 20px;
  }

  .react-datepicker__navigation--next {
    right: 20px;
  }

  .react-datepicker__current-month {
    font-weight: 500;
    font-size: 16px;
    color: #0274FF;
    margin-bottom: 16px;
  }

  .month-year-select {
    background: white;
    // border: 1px solid #E5E7EB;
    // border-radius: 8px;
    padding: 8px;
    font-size: 14px;
    color: #1F2937;
    cursor: pointer;
    outline: none;
  }

  .month-year-menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1000;
    padding: 16px;
    min-width: 280px;
    display: flex;
    gap: 16px;
  }

  .month-year-section {
    flex: 1;
  }

  .month-year-section-title {
    color: #6B7280;
    font-size: 12px;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .month-year-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .month-year-item {
    padding: 8px;
    cursor: pointer;
    color: #1F2937;
    font-size: 14px;
    text-align: center;
    border-radius: 4px;
  }

  .month-year-item:hover {
    background-color: #E6F0FF;
  }

  .month-year-item.selected {
    background-color: #0274FF;
    color: white;
    font-weight: 500;
    
  }

  .react-datepicker__day--disabled {
    color: #ccc !important;
    cursor: not-allowed !important;
  }

  .react-datepicker__day--disabled:hover {
    background-color: transparent !important;
  }
`;

const $FilterDesktop: FC<PropsFromRedux> = ({
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
  orderDate,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const handleSelectDate = (date: Date | null) => {
    if (!!date) {
      dispatch(doctorsA.setOrderDateFilter(date));
    } else {
      dispatch(doctorsA.setOrderDateFilter(null));
    }
  };

  const handleSelectMainSpecialty = (mainSpecialty: string) => {
    dispatch(doctorsA.setMainSpecialtyFilter([mainSpecialty]));
  };

  const handleSelectCity = (cityId: number | null) => {
    dispatch(doctorsA.setCityIdFilter(cityId));
    dispatch(doctorsA.setDistrictIdFilter(null));

    if (!!cityId) {
      dispatch(doctorsA.getDistricts(cityId));
    } else {
      dispatch(doctorsA.setDistricts([]));
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

  const debouncedLoadOptions = useMemo(
    () =>
      debounce(
        async (inputValue: string, callback: (options: any[]) => void) => {
          try {
            const response = await axiosInstance.get(
              `${API_DOCTORS.introduction.trainingUnits}`,
              {
                params: {
                  ...(inputValue && {
                    search: inputValue,
                  }),
                },
              }
            );

            if (response.status === 200) {
              const options = response.data.data.content.map((unit: any) => ({
                value: unit.id,
                label: unit.name,
              }));
              callback(options);
            } else {
              callback([]);
            }
          } catch (error) {
            console.log(error);
            callback([]);
          }
        },
        500
      ),
    []
  );

  const loadOptions = (inputValue: string) =>
    new Promise<any[]>((resolve) => {
      debouncedLoadOptions(inputValue, resolve);
    });

  return (
    <>
      <div className="bg-white rounded-xl px-[26px] py-[20px] min-h-[542px] mt-[24px]">
        <div className="text-[#1F2A37] text-[18px] font-medium">
          Tuỳ chọn nâng cao
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
                <div className="w-full h-full font-inter py-2 pl-[4px]">
                  <input
                    type="text"
                    placeholder="Ngày đặt lịch hẹn"
                    className="outline-none w-full"
                    {...props}
                  />
                </div>
              );
            },
          }}
          className=" mt-[24px] rounded-lg"
        />

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
                <div className="w-full h-full font-inter py-2 pl-[4px]">
                  <input
                    type="text"
                    placeholder="Tỉnh/Thành phố"
                    className="outline-none w-full"
                    {...props}
                  />
                </div>
              );
            },
          }}
          className=" mt-[24px] rounded-lg"
        />

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
                <div className="w-full h-full font-inter py-2 pl-[4px]">
                  <input
                    type="text"
                    placeholder="Quận/Huyện"
                    className="outline-none w-full"
                    {...props}
                  />
                </div>
              );
            },
          }}
          className=" mt-[24px] rounded-lg"
        />

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
                <div className="w-full h-full font-inter py-2 pl-[4px]">
                  <input
                    type="text"
                    placeholder="Bệnh viện/ Phòng khám công tác"
                    className="outline-none w-full"
                    {...props}
                  />
                </div>
              );
            },
          }}
          className=" mt-[24px] rounded-lg"
        />

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
                <div className="w-full h-full font-inter py-2 pl-[4px]">
                  <input
                    type="text"
                    placeholder="Điểm đánh giá"
                    className="outline-none w-full"
                    {...props}
                  />
                </div>
              );
            },
          }}
          className=" mt-[24px] rounded-lg"
        />

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
                <div className="w-full h-full font-inter py-2 pl-[4px]">
                  <input
                    type="text"
                    placeholder="Giới tính"
                    className="outline-none w-full"
                    {...props}
                  />
                </div>
              );
            },
          }}
          className=" mt-[24px] rounded-lg"
        />

        <div className="mt-[24px] flex gap-2 font-roboto">
          <Button className="w-1/2 text-center rounded-[100px] bg-[#EEE] text-[#1F2A37] font-medium hover:opacity-80">
            Xóa lọc
          </Button>

          <Button className="w-1/2 text-center rounded-[100px] bg-[#0274FF] text-white font-medium hover:opacity-80">
            Lọc
          </Button>
        </div>
      </div>
    </>
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
    orderDate,
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
    orderDate,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const FilterDesktop = connector($FilterDesktop);
