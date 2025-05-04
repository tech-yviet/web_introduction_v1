import { Checkbox } from "@chakra-ui/react";
import Image from "next/image";
import { ALL_FILTER_ID } from "../DoctorsFeature";
import { MdOutlineCheck } from "react-icons/md";
import { FiMinus } from "react-icons/fi";

interface FilterSpecialtiesProps {
  specialtiesFilter: any[];
  handleSearchMainSpecialtyInput: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  setSearchMainSpecialty: (value: string) => void;
  searchMainSpecialty: string;
  checkedFilters: Record<string, boolean>;
  handleCheckboxChange: (filter: any) => void;
}

const FilterSpecialties = ({
  specialtiesFilter,
  handleSearchMainSpecialtyInput,
  setSearchMainSpecialty,
  searchMainSpecialty,
  checkedFilters,
  handleCheckboxChange,
}: FilterSpecialtiesProps) => {
  return (
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
            className="outline-none bg-white text-black"
            onChange={(e) => handleSearchMainSpecialtyInput(e)}
            value={searchMainSpecialty}
          />
        </div>

        {!!searchMainSpecialty && (
          <button onClick={() => setSearchMainSpecialty("")} className="pr-2">
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
                      <MdOutlineCheck size={20} className="text-white" />
                    ) : (
                      <FiMinus size={20} className="text-white" />
                    ))}
                </Checkbox.Control>
              ) : checkedFilters[filter.value] ? (
                <Checkbox.Control className={`w-6 h-6 rounded-md bg-[#0274FF]`}>
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
  );
};

export default FilterSpecialties;
