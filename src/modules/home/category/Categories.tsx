import Image from "next/image";

const categories = [
  {
    id: "1",
    title: "Bác sĩ \n điều dưỡng",
    image: "/img/categories/category-1.png",
    desc: "Kết nối Bác sĩ để được \n tư vấn sức khỏe",
  },
  {
    id: "2",
    title: "Bệnh viện \n phòng khám",
    image: "/img/categories/category-2.png",
    desc: "Tra cứu nhanh chóng \n Đặt khám dễ dàng",
  },
  {
    id: "3",
    title: "Trung tâm \n xét nghiệm",
    image: "/img/categories/category-4.png",
    desc: "Xét nghiệm tổng quát \n và chuyên sâu",
  },
  {
    id: "4",
    title: "Nhà thuốc \n cửa hàng",
    image: "/img/categories/category-3.png",
    desc: "Tìm thuốc tiện lợi \n với <b>Bo AI</b>",
  },
];

const Categories = () => {
  return (
    <div className="mt-[29px] px-[7px]">
      <div className="flex items-center gap-[5.12px]">
        {categories?.map((c, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={c.id}
              className={`w-[24%]  bg-[rgba(255,255,255,0.21)] hover:bg-[rgba(255,255,255,0.7)] rounded-xl px-[3px] pt-[10px] pb-[13.48px] text-white flex flex-col items-center transition-all duration-300 hover:cursor-pointer group ${
                !!isEven ? "" : "mt-[10.52px]"
              }`}
            >
              <div>
                <Image src={c.image} width={51} height={51} alt={c.title} />
              </div>

              <div className="text-[8.5px] font-bold text-center uppercase mt-[5.98px] group-hover:text-[#0180AA] whitespace-pre-line">
                {c.title}
              </div>

              <div
                className="mt-[6.38px] text-[6px] font-medium text-center whitespace-pre-line group-hover:text-[#0180AA]"
                dangerouslySetInnerHTML={{ __html: c.desc }}
              ></div>

              <button className="mt-[7.23px] bg-[#E9EBED] rounded-[37.5px] py-[3px] px-[9px] h-[15px] text-[5.625px] font-roboto font-medium text-[#4B4B4B]">
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
