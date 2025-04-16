import Image from "next/image";

interface SearchProps {
  className?: string;
  inputClassName?: string;
  placeholder?: string;
}

const Search = ({ className, inputClassName, placeholder }: SearchProps) => {
  return (
    <div className={className}>
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
          placeholder={placeholder}
          className={inputClassName}
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
