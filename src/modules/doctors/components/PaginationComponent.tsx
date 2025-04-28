import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";

interface PaginationProps {
  doctors: any[];
  totalPages: number;
  pageSize: number;
  currentPage: number;
  prevPage: number | null;
  nextPage: number | null;
}
const PaginationComponent = ({
  doctors,
  totalPages,
  pageSize,
  currentPage,
  prevPage,
  nextPage,
}: PaginationProps) => {
  return (
    <>
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
                            page.value === currentPage + 1 ? "#0274FF" : "white"
                          }
                          color={
                            page.value === currentPage + 1 ? "white" : "#3590FF"
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
    </>
  );
};

export default PaginationComponent;
