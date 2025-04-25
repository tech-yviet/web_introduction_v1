"use client";

import React, { FC, useMemo } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import { Button, Drawer, Portal } from "@chakra-ui/react";
import Image from "next/image";
import Select, { components } from "react-select";
import orderBy from "lodash/orderBy";
import keyBy from "lodash/keyBy";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";

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
  const [showMenu, setShowMenu] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

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
    <>
      <style>{datePickerCustomStyles}</style>
      <Drawer.Root
        open={isOpen}
        onOpenChange={handleClose}
        placement="bottom"
        preventScroll
        initialFocusEl={() => null}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner autoFocus={false}>
            <Drawer.Content
              autoFocus={false}
              className="max-h-[95vh] px-[16px] rounded-t-[16px]"
            >
              <Drawer.Header
                autoFocus={false}
                className="px-0 pb-0 pt-[16px] flex flex-col gap-0"
              >
                <div className="flex items-center justify-center">
                  <div className="w-[48px] h-[6px] bg-[#E9EBED] rounded-md"></div>
                </div>

                <div className="mt-6 text-lg font-roboto font-medium text-[#1F2A37] text-center">
                  Chọn theo
                </div>
              </Drawer.Header>

              <Drawer.Body autoFocus={false} className="p-0 scrollbar-hide">
                <div className="mt-4 font-inter text-[#1F2A37] flex flex-col gap-4 px-1">
                  <div>
                    <div className="text-sm mb-1">Ngày đặt lịch hẹn</div>
                    <div className="relative">
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Tất cả"
                        autoFocus={false}
                        onChange={(date) => {
                          if (!!date) {
                            setSelectedDate(date);
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
                        selected={selectedDate}
                        minDate={new Date()}
                        customInput={
                          <div
                            className="w-full flex items-center justify-between rounded-lg border border-[#B9BDC1] py-2 px-3"
                            onClick={(e) => {
                              if (!!selectedDate) {
                                e.preventDefault();
                                setSelectedDate(null);
                              }
                            }}
                          >
                            <input
                              type="text"
                              className="w-full outline-none border-none"
                              placeholder="Tất cả"
                              autoFocus={false}
                              value={
                                !!selectedDate
                                  ? dayjs(selectedDate).format("DD/MM/YYYY")
                                  : ""
                              }
                            />

                            {!!selectedDate && (
                              <button
                                className="p-2 mr-1 z-10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedDate(null);
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
                                  Tháng {date.getMonth() + 1},{" "}
                                  {date.getFullYear()}
                                </div>
                                {showMenu && (
                                  <div className="month-year-menu">
                                    <div className="month-year-section">
                                      <div className="month-year-section-title">
                                        Tháng
                                      </div>
                                      <div className="month-year-grid">
                                        {Array.from({ length: 12 }, (_, i) => {
                                          const currentDate = new Date();
                                          const currentYear =
                                            currentDate.getFullYear();
                                          const currentMonth =
                                            currentDate.getMonth();
                                          const isDisabled =
                                            date.getFullYear() ===
                                              currentYear && i < currentMonth;
                                          const isSelected =
                                            date.getMonth() === i;

                                          return (
                                            <div
                                              key={i}
                                              className={`month-year-item ${
                                                isSelected ? "selected" : ""
                                              } ${
                                                isDisabled ? "disabled" : ""
                                              }`}
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
                                      <div className="month-year-section-title">
                                        Năm
                                      </div>
                                      <div className="month-year-grid">
                                        {Array.from({ length: 12 }, (_, i) => {
                                          const currentYear =
                                            new Date().getFullYear();
                                          return currentYear + i;
                                        }).map((year) => (
                                          <div
                                            key={year}
                                            className={`month-year-item ${
                                              date.getFullYear() === year
                                                ? "selected"
                                                : ""
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
                      value={
                        !!districtId ? districtOptionsMap[districtId] : null
                      }
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
                      value={
                        !!unitName ? trainingUnitOptionsMap[unitName] : null
                      }
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
