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

const CustomPlaceholder = (props: any) => {
  return (
    <components.Placeholder {...props}>
      <div className="text-[#B9BDC1] font-inter">{props.children}</div>
    </components.Placeholder>
  );
};

const $FilterDesktop: FC<PropsFromRedux> = ({
  cities,
  districts,
  trainingUnits,
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

        <div className="relative mt-[24px]">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            autoFocus={false}
            onChange={(date) => {
              if (!!date) {
                handleSelectDate(date);
              }
            }}
            showPopperArrow={false}
            formatWeekDay={(day) => {
              const weekDays: { [key: string]: string } = {
                Monday: "T2",
                Tuesday: "T3",
                Wednesday: "T4",
                Thursday: "T5",
                Friday: "T6",
                Saturday: "T7",
                Sunday: "CN",
              };
              return weekDays[day] || day;
            }}
            minDate={new Date()}
            customInput={
              <div
                className="w-full flex items-center justify-between rounded-lg border border-[#B9BDC1] py-2.5 px-3"
                onClick={(e) => {
                  if (!!orderDate) {
                    e.preventDefault();
                    handleSelectDate(null);
                  }
                }}
              >
                <input
                  type="text"
                  className="w-full outline-none border-none placeholder:text-[#B9BDC1]"
                  placeholder="Ngày đặt lịch hẹn"
                  autoFocus={false}
                  value={
                    !!orderDate ? dayjs(orderDate).format("DD/MM/YYYY") : ""
                  }
                />

                {!!orderDate && (
                  <button
                    className="p-2 mr-1 z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectDate(null);
                    }}
                  >
                    <Image
                      src="/svg/icons/close.svg"
                      alt="close"
                      width={10}
                      height={10}
                    />
                  </button>
                )}

                <Image
                  src="/svg/icons/arrow-down-ori.svg"
                  alt="arrow-down"
                  width={24}
                  height={24}
                />
              </div>
            }
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
              changeMonth,
              changeYear,
            }) => {
              const currentDate = new Date();
              const isCurrentMonthOrBefore =
                date.getFullYear() === currentDate.getFullYear() &&
                date.getMonth() <= currentDate.getMonth();

              return (
                <div className="flex items-center justify-between mb-[20px]">
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    type="button"
                    className={`text-[#0274FF] ${
                      isCurrentMonthOrBefore
                        ? "opacity-30 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <Image
                      src="/svg/icons/chevron-left.svg"
                      alt="previous"
                      width={20}
                      height={20}
                    />
                  </button>

                  <div className="relative" ref={menuRef}>
                    <div
                      className="text-[#0274FF] font-bold font-inter cursor-pointer"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      Tháng {date.getMonth() + 1}, {date.getFullYear()}
                    </div>
                    {showMenu && (
                      <div className="month-year-menu">
                        <div className="month-year-section">
                          <div className="month-year-section-title">Tháng</div>
                          <div className="month-year-grid">
                            {Array.from({ length: 12 }, (_, i) => {
                              const currentDate = new Date();
                              const currentYear = currentDate.getFullYear();
                              const currentMonth = currentDate.getMonth();
                              const isDisabled =
                                date.getFullYear() === currentYear &&
                                i < currentMonth;
                              const isSelected = date.getMonth() === i;

                              return (
                                <div
                                  key={i}
                                  className={`month-year-item ${
                                    isSelected ? "selected" : ""
                                  } ${isDisabled ? "disabled" : ""}`}
                                  onClick={() => {
                                    if (!isDisabled) {
                                      changeMonth(i);
                                      setShowMenu(false);
                                    }
                                  }}
                                  style={{
                                    cursor: isDisabled
                                      ? "not-allowed"
                                      : "pointer",
                                    color: isDisabled
                                      ? "#ccc"
                                      : isSelected
                                      ? "#fff"
                                      : "#1F2937",
                                  }}
                                >
                                  {i + 1}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="month-year-section">
                          <div className="month-year-section-title">Năm</div>
                          <div className="month-year-grid">
                            {Array.from({ length: 12 }, (_, i) => {
                              const currentYear = new Date().getFullYear();
                              return currentYear + i;
                            }).map((year) => (
                              <div
                                key={year}
                                className={`month-year-item ${
                                  date.getFullYear() === year ? "selected" : ""
                                }`}
                                onClick={() => {
                                  changeYear(year);
                                  setShowMenu(false);
                                }}
                              >
                                {year}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    type="button"
                    className="text-[#0274FF]"
                  >
                    <Image
                      src="/svg/icons/chevron-left.svg"
                      alt="next"
                      width={20}
                      height={20}
                      className="rotate-180"
                    />
                  </button>
                </div>
              );
            }}
          />
        </div>

        <Select
          styles={customStyles}
          isClearable={true}
          isSearchable={true}
          options={cityOptions}
          placeholder="Tỉnh/Thành phố"
          className="mt-[24px]"
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: CustomDropdownIndicator,
            Control: CustomControl,
            Option: CustomOption,
            MenuList: CustomMenuList,
            Placeholder: CustomPlaceholder,
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

        <Select
          styles={customStyles}
          isClearable={true}
          options={districtOptions}
          isSearchable={true}
          placeholder="Quận/Huyện"
          className="mt-[24px]"
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: CustomDropdownIndicator,
            Control: CustomControl,
            Option: CustomOption,
            MenuList: CustomMenuList,
            Placeholder: CustomPlaceholder,
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

        <AsyncSelect
          loadOptions={loadOptions}
          cacheOptions={false}
          styles={customStyles}
          defaultOptions={trainingUnitOptions}
          className="mt-[24px]"
          placeholder="Bệnh viện/ Phòng khám công tác"
          isClearable={true}
          value={!!unitName ? { value: "", label: unitName } : null}
          onChange={(option: any) => {
            if (option) {
              handleSelectUnitName(option.label);
            } else {
              handleSelectUnitName("");
            }
          }}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: CustomDropdownIndicator,
            Control: CustomControl,
            Option: CustomOption,
            MenuList: CustomMenuList,
            Placeholder: CustomPlaceholder,
          }}
          noOptionsMessage={() => "Không tìm thấy kết quả"}
          loadingMessage={() => "Đang tìm kiếm..."}
        />

        <Select
          styles={customStyles}
          isSearchable={true}
          placeholder="Điểm đánh giá"
          className="mt-[24px]"
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: CustomDropdownIndicator,
            Control: CustomControl,
            Option: CustomOption,
            MenuList: CustomMenuList,
            Placeholder: CustomPlaceholder,
          }}
        />

        <Select
          styles={customStyles}
          isSearchable={true}
          options={genderOptions}
          placeholder="Giới tính"
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
            Placeholder: CustomPlaceholder,
          }}
          className="mt-[24px]"
        />

        <div className="mt-[24px] flex gap-2 font-roboto">
          <Button
            onClick={handleResetFilter}
            className="w-1/2 text-center rounded-[100px] bg-[#EEE] text-[#1F2A37] font-medium hover:opacity-80"
          >
            Xóa lọc
          </Button>

          <Button
            onClick={handleApplyFilter}
            className="w-1/2 text-center rounded-[100px] bg-[#0274FF] text-white font-medium hover:opacity-80"
          >
            Lọc
          </Button>
        </div>
      </div>
    </>
  );
};

interface OwnProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const { cityId, unitName, genderType, districtId, orderDate } =
    doctorsS.selectFilterDoctors(state);
  const mainSpecialties = doctorsS.selectMainSpecialties(state);
  const cities = doctorsS.selectCities(state);
  const districts = doctorsS.selectDistricts(state);
  const trainingUnits = doctorsS.selectTrainingUnits(state);

  return {
    ...ownProps,
    cityId,
    mainSpecialties,
    cities,
    districts,
    trainingUnits,
    unitName,
    genderType,
    districtId,
    orderDate,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const FilterDesktop = connector($FilterDesktop);
