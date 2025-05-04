import { Button } from "@chakra-ui/react";
import Image from "next/image";

interface SearchMobileDoctorProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleToggleFilterMobileDrawer: () => void;
  handleToggleMobileDrawer: () => void;
  doctorNameFilter: string;
}

const SearchMobileDoctor = ({
  handleSearch,
  handleKeyDown,
  handleToggleFilterMobileDrawer,
  handleToggleMobileDrawer,
  doctorNameFilter,
}: SearchMobileDoctorProps) => {
  return (
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
            className="bg-transparent outline-none text-sm font-roboto font-normal leading-[22px] w-full min-w-[190px] truncate md:text-base text-black"
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
        <Image src="/svg/collapse.svg" alt="search" width={32} height={32} />
      </Button>
    </div>
  );
};

export default SearchMobileDoctor;
