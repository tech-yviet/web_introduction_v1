import Image from "next/image";

const Search = () => {
  return (
    <div className="mt-[11px] p-3 flex items-center bg-white rounded-[40px] w-[359px] mx-auto h-[48px]">
      <div className="mr-[8px]">
        <Image
          src="/svg/proicons_search.svg"
          alt="search"
          width={20}
          height={20}
        />
      </div>

      <div className="flex-1">
        <input
          type="text"
          placeholder="Tìm thuốc, dịch vụ, Bác sĩ, Phòng k..."
          className="bg-transparent outline-none w-full text-sm font-normal leading-[22px] w-[227px]"
        />
      </div>

      <div className="ml-[11px]">
        <Image src="/svg/Microphone.svg" alt="filter" width={24} height={24} />
      </div>

      <div className="mx-[10px]">
        <Image
          src="/svg/trailing-caret.svg"
          alt="filter"
          width={1}
          height={1}
        />
      </div>

      <div>
        <Image src="/svg/gallery-add.svg" alt="filter" width={24} height={24} />
      </div>
    </div>
  );
};

export default Search;
