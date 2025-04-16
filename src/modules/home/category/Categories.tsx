import Image from "next/image";

const categories = [
  {
    id: "1",
    title: "Bác sĩ \n điều dưỡng",
    image: "/svg/categories/category-1.svg",
    desc: "Kết nối Bác sĩ để được \n tư vấn sức khỏe",
  },
  {
    id: "2",
    title: "Bệnh viện \n phòng khám",
    image: "/svg/categories/category-2.svg",
    desc: "Tra cứu nhanh chóng \n Đặt khám dễ dàng",
  },
  {
    id: "3",
    title: "Trung tâm \n xét nghiệm",
    image: "/svg/categories/category-3.svg",
    desc: "Xét nghiệm tổng quát \n và chuyên sâu",
  },
  {
    id: "4",
    title: "Nhà thuốc \n cửa hàng",
    image: "/svg/categories/category-4.svg",
    desc: "Tìm thuốc tiện lợi \n với <b>Bo AI</b>",
  },
];

const Categories = () => {
  return (
    <div className="mt-[29px] px-[7px] md:max-w-[1200px] md:mx-auto md:px-[29px]">
      <div className="flex items-center gap-[5.12px] md:gap-4 ">
        {categories?.map((c, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={c.id}
              className={`w-[24%] bg-[rgba(255,255,255,0.21)] hover:bg-[rgba(255,255,255,0.7)] rounded-xl px-[3px] pt-[10px] pb-[13.48px] text-white flex flex-col items-center transition-all duration-300 hover:cursor-pointer group md:rounded-[40px] md:pt-[30px] md:pb-[37px] md:px-[12px] md:min-h-[453px] ${
                !!isEven
                  ? "mb-[10.52px] md:mb-[33px]"
                  : "mt-[10.52px] md:mt-[33px]"
              }`}
            >
              <div>
                <Image
                  src={c.image}
                  width={51}
                  height={51}
                  alt={c.title}
                  className="md:w-[160px] md:h-[160px]"
                />
              </div>

              <div className="text-[8.5px] font-bold text-center uppercase mt-[5.98px] group-hover:text-[#0180AA] whitespace-pre-line md:mt-5 md:text-2xl">
                {c.title}
              </div>

              <div
                className="mt-[6.38px] text-[6px] font-medium text-center whitespace-pre-line group-hover:text-[#0180AA] md:mt-5 md:text-base"
                dangerouslySetInnerHTML={{ __html: c.desc }}
              ></div>

              <button className="mt-[7.23px] bg-[#E9EBED] rounded-[37.5px] py-[3px] px-[9px] h-[15px] text-[5.625px] font-roboto font-medium text-[#4B4B4B] md:mt-[30px] md:w-[154px] md:h-[48px] md:text-base md:font-semibold">
                Xem thêm
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
