"use client";

import { FC, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import {
  ButtonGroup,
  IconButton,
  Pagination,
} from "@chakra-ui/react";
import Image from "next/image";
import { appA } from "@/store/modules/app";
import CardDoctor from "./components/CardDoctor";
import isEmpty from "lodash/isEmpty";
import { FilterDesktop } from "./components/FilterDesktop";
import SearchMobileDoctor from "./components/SearchMobileDoctor";
import FilterMobileSpecialties from "./components/FilterMobileSpecialties";
import NavigationTabs from "./components/NavigationTabs";
import FilterSpecialties from "./components/FilterSpecialties";

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

export const ALL_FILTER_ID = "ALL";

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
          <NavigationTabs />

          <SearchMobileDoctor
            handleSearch={handleSearch}
            handleKeyDown={handleKeyDown}
            handleToggleFilterMobileDrawer={handleToggleFilterMobileDrawer}
            handleToggleMobileDrawer={handleToggleMobileDrawer}
            doctorNameFilter={doctorNameFilter}
          />

          <FilterMobileSpecialties
            specialtiesFilter={specialtiesFilter}
            handleSelectMainSpecialty={handleSelectMainSpecialty}
          />

          <div className="md:mt-[36px] md:flex gap-6 h-full font-inter">
            <div className="hidden md:block w-[32%]">
              <FilterSpecialties
                specialtiesFilter={specialtiesFilter}
                handleSearchMainSpecialtyInput={handleSearchMainSpecialtyInput}
                setSearchMainSpecialty={setSearchMainSpecialty}
                searchMainSpecialty={searchMainSpecialty}
                checkedFilters={checkedFilters}
                handleCheckboxChange={handleCheckboxChange}
              />

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
