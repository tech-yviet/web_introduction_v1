import { Button } from "@chakra-ui/react";

interface FilterMobileSpecialtiesProps {
  specialtiesFilter: any[];
  handleSelectMainSpecialty: (value: string) => void;
}

const FilterMobileSpecialties = ({
  specialtiesFilter,
  handleSelectMainSpecialty,
}: FilterMobileSpecialtiesProps) => {
  return (
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
  );
};

export default FilterMobileSpecialties;
