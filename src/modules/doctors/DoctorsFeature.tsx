"use client";

import { FC, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import {
  Button,
  ButtonGroup,
  Checkbox,
  IconButton,
  Pagination,
} from "@chakra-ui/react";
import Image from "next/image";
import { appA } from "@/store/modules/app";
import CardDoctor from "./components/CardDoctor";
import isEmpty from "lodash/isEmpty";
import { FilterDesktop } from "./components/FilterDesktop";
import { MdOutlineCheck } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

const LazyMobileDrawer = dynamic(
  () => import("@/components/drawer/MobileDrawer"),
  {
    ssr: false,
  }
);

const LazyFilterMobileDrawer = dynamic(
  () =>
    import("./components/FilterMobileDrawer").then(
      (mod) => mod.FilterMobileDrawer
    ),
  {
    ssr: false,
  }
);

const ALL_FILTER_ID = "ALL";

const $DoctorsFeature: FC<PropsFromRedux> = ({
  doctors,
  mainSpecialties,
  mainSpecialtyFilter,
  doctorNameFilter,
  currentPage,
  totalPages,
  pageSize,
  prevPage,
  nextPage,
}) => {
  const [checkedFilters, setCheckedFilters] = useState<Record<string, boolean>>(
    {}
  );

  const [searchMainSpecialty, setSearchMainSpecialty] = useState<string>("");

  useEffect(() => {
    dispatch(doctorsA.init());

    return () => {
      dispatch(doctorsA.destroy());
    };
  }, []);

  const handleToggleMobileDrawer = () => {
    dispatch(appA.toggleDrawerMenuMobile());
  };

  const specialtiesFilter = useMemo(() => {
    const mergedMainSpecialties = [
      ...(!!searchMainSpecialty
        ? []
        : [{ description: "Tất cả", name: ALL_FILTER_ID }]),
      ...mainSpecialties,
    ];

    let specialties = mergedMainSpecialties.map((specialty, index) => {
      const isAll =
        specialty.name === ALL_FILTER_ID && !!isEmpty(mainSpecialtyFilter);
      const isSelected =
        mainSpecialtyFilter.some((item) => item === specialty.name) || isAll;

      return {
        id: `${index}-${specialty.name}`,
        name: specialty.description,
        value: specialty.name,
        isSelected: isSelected,
      };
    });

    if (!!searchMainSpecialty) {
      specialties = specialties.filter((specialty) =>
        specialty.name.toLowerCase().includes(searchMainSpecialty.toLowerCase())
      );
    }

    return specialties;
  }, [mainSpecialties, mainSpecialtyFilter, searchMainSpecialty]);

  const handleSelectMainSpecialty = (value: string) => {
    if (value === ALL_FILTER_ID) {
      dispatch(doctorsA.resetFilter());
      dispatch(doctorsA.getDoctors());
    } else {
      const updatedMainSpecialtyFilter = mainSpecialtyFilter.some(
        (item) => item == value
      )
        ? mainSpecialtyFilter.filter((item) => item !== value)
        : [...mainSpecialtyFilter, value];
      dispatch(doctorsA.setMainSpecialtyFilter(updatedMainSpecialtyFilter));
      dispatch(doctorsA.getDoctorsByFilter());
    }
  };

  const handleCheckboxChange = (filter: any) => {
    if (filter.value === ALL_FILTER_ID) {
      const hasAnyChecked = specialtiesFilter
        .filter((f) => f.value !== ALL_FILTER_ID)
        .some((f) => checkedFilters[f.value]);

      const newCheckedFilters = { ...checkedFilters } as Record<
        string,
        boolean
      >;

      specialtiesFilter.forEach((specialty) => {
        if (specialty.value !== ALL_FILTER_ID) {
          newCheckedFilters[specialty.value] = !hasAnyChecked;
        }
      });

      setCheckedFilters(newCheckedFilters);

      if (!hasAnyChecked) {
        const visibleSpecialties = specialtiesFilter
          .filter((f) => f.value !== ALL_FILTER_ID)
          .map((f) => f.value);
        dispatch(
          doctorsA.setMainSpecialtyFilter([
            ...mainSpecialtyFilter,
            ...visibleSpecialties,
          ])
        );
        dispatch(doctorsA.getDoctorsByFilter());
      } else {
        const remainingSpecialties = mainSpecialtyFilter.filter(
          (value) =>
            !specialtiesFilter
              .filter((f) => f.value !== ALL_FILTER_ID)
              .map((f) => f.value)
              .includes(value)
        );
        dispatch(doctorsA.setMainSpecialtyFilter(remainingSpecialties));
        dispatch(doctorsA.getDoctorsByFilter());
      }
    } else {
      const newCheckedFilters = {
        ...checkedFilters,
        [filter.value]: !checkedFilters[filter.value],
      } as Record<string, boolean>;

      const allFilter = specialtiesFilter.find(
        (f) => f.value === ALL_FILTER_ID
      );
      if (allFilter) {
        const allOthersChecked = specialtiesFilter
          .filter((f) => f.value !== ALL_FILTER_ID)
          .every((f) => newCheckedFilters[f.value]);

        newCheckedFilters[allFilter.value] = allOthersChecked;
      }

      setCheckedFilters(newCheckedFilters);

      const updatedSpecialties =
        filter.value === ALL_FILTER_ID
          ? []
          : newCheckedFilters[filter.value]
          ? [...mainSpecialtyFilter, filter.value]
          : mainSpecialtyFilter.filter((item) => item !== filter.value);

      dispatch(doctorsA.setMainSpecialtyFilter(updatedSpecialties));
      dispatch(doctorsA.getDoctorsByFilter());
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(doctorsA.setDoctorNameFilter(e.target.value));
  };

  const handleSearchMainSpecialtyInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchMainSpecialty(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(doctorsA.getDoctorsByFilter());
    }
  };

  const handleToggleFilterMobileDrawer = () => {
    dispatch(doctorsA.openFilterMobileDrawer());
  };

  return (
    <>
      <div className="pt-[113px] md:pt-[94px] flex flex-col font-roboto mb-[40px]">
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
                Danh sách chi tiết
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
                  className="bg-transparent outline-none text-sm font-roboto font-normal leading-[22px] w-full min-w-[190px] truncate md:text-base "
                  onChange={handleSearch}
                  value={doctorNameFilter}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <button
                className="md:hidden ml-[11px]"
                onClick={handleToggleFilterMobileDrawer}
              >
                <Image
                  src="/svg/icons/filter.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
              </button>

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
            {specialtiesFilter.map((filter) => (
              <Button
                className={`px-4 rounded-[100px]  text-sm font-medium text-[#0274FF] hover:bg-[#0274FF] hover:text-white ${
                  filter.isSelected
                    ? "bg-[#0274FF] text-white"
                    : "bg-[rgba(255,255,255,0.90)]"
                }`}
                size="xs"
                key={filter.id}
                onClick={() => handleSelectMainSpecialty(filter.value)}
              >
                {filter.name}
              </Button>
            ))}
          </div>

          <div className="md:mt-[36px] md:flex gap-6 h-full font-inter">
            <div className="hidden md:block w-[32%]">
              <div className="bg-white rounded-xl px-[26px] py-[20px] max-h-[484px]">
                <div className="text-[#1F2A37] text-[18px] font-medium">
                  Tìm kiếm chuyên gia
                </div>

                <div className="mt-[15px] flex items-center gap-2 rounded-xl border border-[#B9BDC1] px-3 py-[8px]">
                  <div>
                    <Image
                      src="/svg/icons/search.svg"
                      alt="search"
                      width={20}
                      height={20}
                    />
                  </div>

                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Tìm nhanh chuyên khoa"
                      className="outline-none bg-white"
                      onChange={(e) => handleSearchMainSpecialtyInput(e)}
                      value={searchMainSpecialty}
                    />
                  </div>

                  {!!searchMainSpecialty && (
                    <button
                      onClick={() => setSearchMainSpecialty("")}
                      className="pr-2"
                    >
                      <Image
                        src="/svg/icons/close.svg"
                        alt="close"
                        width={10}
                        height={10}
                      />
                    </button>
                  )}
                </div>

                <div className="max-h-[300px] overflow-auto mt-[31px]">
                  <div className="flex flex-col gap-4">
                    {specialtiesFilter.map((filter) => (
                      <Checkbox.Root
                        key={filter.id}
                        className="flex hover:cursor-pointer gap-3"
                        checked={
                          filter.value === ALL_FILTER_ID
                            ? specialtiesFilter
                                .filter((f) => f.value !== ALL_FILTER_ID)
                                .some((f) => checkedFilters[f.value])
                            : checkedFilters[filter.value]
                        }
                        onCheckedChange={() => handleCheckboxChange(filter)}
                      >
                        <Checkbox.HiddenInput />

                        {filter.value === ALL_FILTER_ID ? (
                          <Checkbox.Control
                            className={`w-6 h-6 rounded-md ${
                              specialtiesFilter
                                .filter((f) => f.value !== ALL_FILTER_ID)
                                .some((f) => checkedFilters[f.value])
                                ? "bg-[#0274FF]"
                                : "bg-white border border-[rgba(185,189,193,0.50)]"
                            }`}
                          >
                            {specialtiesFilter
                              .filter((f) => f.value !== ALL_FILTER_ID)
                              .some((f) => checkedFilters[f.value]) &&
                              (specialtiesFilter
                                .filter((f) => f.value !== ALL_FILTER_ID)
                                .every((f) => checkedFilters[f.value]) ? (
                                <MdOutlineCheck
                                  size={20}
                                  className="text-white"
                                />
                              ) : (
                                <FiMinus size={20} className="text-white" />
                              ))}
                          </Checkbox.Control>
                        ) : checkedFilters[filter.value] ? (
                          <Checkbox.Control
                            className={`w-6 h-6 rounded-md bg-[#0274FF]`}
                          >
                            <MdOutlineCheck size={20} className="text-white" />
                          </Checkbox.Control>
                        ) : (
                          <Checkbox.Control
                            className={`w-6 h-6 rounded-md bg-white border border-[rgba(185,189,193,0.50)]`}
                          />
                        )}
                        <Checkbox.Label className="text-sm text-[#1F2A37]">
                          {filter.name}
                        </Checkbox.Label>
                      </Checkbox.Root>
                    ))}
                  </div>
                </div>
              </div>

              <FilterDesktop />
            </div>

            {!isEmpty(doctors) ? (
              <div className="flex flex-col gap-3 md:flex-1">
                {doctors.map((doctor, index) => (
                  <CardDoctor
                    key={doctor.doctorId}
                    doctor={doctor}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="my-10 md:flex-1">
                <div className="text-center font-medium text-[#1F2A37]">
                  Không tìm thấy kết quả
                </div>
              </div>
            )}
          </div>

          {!isEmpty(doctors) && (
            <div className="mt-4 flex justify-end">
              <Pagination.Root
                count={totalPages}
                pageSize={pageSize}
                page={Number(currentPage || 0) + 1}
                onPageChange={(page) => {
                  console.log(page);
                }}
              >
                <ButtonGroup variant="ghost" size="sm" className="gap-1">
                  <Pagination.PrevTrigger asChild>
                    <IconButton
                      disabled={!prevPage}
                      className="w-[41px] h-[41px] bg-white rounded-[7.455px]"
                    >
                      <Image
                        src="/svg/icons/arrow-left.svg"
                        alt="arrow-left"
                        width={14.909}
                        height={14.909}
                      />
                    </IconButton>
                  </Pagination.PrevTrigger>

                  <Pagination.Context>
                    {({ pages }) =>
                      pages.map((page, index) => {
                        return page.type === "page" ? (
                          <Pagination.Item key={index} {...page}>
                            <IconButton
                              bg={
                                page.value === currentPage + 1
                                  ? "#0274FF"
                                  : "white"
                              }
                              color={
                                page.value === currentPage + 1
                                  ? "white"
                                  : "#3590FF"
                              }
                              className="w-[41px] h-[41px] bg-white rounded-[7.455px] text-[#3590FF] hover:bg-[#0274FF] hover:text-white"
                            >
                              {page.value}
                            </IconButton>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Ellipsis key={index} index={index} />
                        );
                      })
                    }
                  </Pagination.Context>

                  <Pagination.NextTrigger asChild>
                    <IconButton
                      disabled={!nextPage}
                      className="w-[41px] h-[41px] bg-white rounded-[7.455px]"
                    >
                      <Image
                        src="/svg/icons/arrow-right.svg"
                        alt="arrow-right"
                        width={14.909}
                        height={14.909}
                      />
                    </IconButton>
                  </Pagination.NextTrigger>
                </ButtonGroup>
              </Pagination.Root>
            </div>
          )}
        </div>

        <LazyMobileDrawer />
        <LazyFilterMobileDrawer />
      </div>
    </>
  );
};

interface OwnProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const doctors = doctorsS.selectDoctors(state);
  const mainSpecialties = doctorsS.selectMainSpecialties(state);
  const mainSpecialtyFilter = doctorsS.selectMainSpecialtyFilter(state);
  const doctorNameFilter = doctorsS.selectDoctorNameFilter(state);
  const { currentPage, totalPages, pageSize, prevPage, nextPage } =
    doctorsS.selectPagination(state);

  return {
    ...ownProps,
    doctors,
    mainSpecialties,
    mainSpecialtyFilter,
    doctorNameFilter,
    currentPage,
    totalPages,
    pageSize,
    prevPage,
    nextPage,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const DoctorsFeature = connector($DoctorsFeature);
