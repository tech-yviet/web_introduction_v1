import Image from "next/image";

const data = [
  {
    id: "1",
    rate: 10,
    title: "Công nghệ",
    subTitle: "Technology",
  },
  {
    id: "2",
    rate: 10,
    title: "Đa dụng",
    subTitle: "Flexibility",
  },
  {
    id: "3",
    rate: 10,
    title: "Trợ lý AI",
    subTitle: "AI Assistant",
  },
];

const Hero = () => {
  return (
    <div className="bg-[url('/img/hero-baner.jpg')] bg-cover bg-center bg-no-repeat h-[170px]">
      <div className="bg-hero-banner h-full w-full pl-5 pr-2.5 pb-[15px] pt-[9px] text-white flex flex-col gap-4 ">
        <div className="relative">
          <div className="flex flex-col gap-[7.11px]">
            <div className="flex items-center gap-[7.41px]">
              <div className="w-[16.693px] h-[0.464px] bg-white"></div>
              <div className="text-[4px] font-extrabold uppercase tracking-[1.391px]">
                Smart Health Solutions
              </div>
            </div>

            <div className="h-[49.893px] text-xl font-bold leading-[24.947px]">
              Tìm kiếm thuốc
              <br />
              Kết nối chuyên gia
            </div>
          </div>

          <button className="absolute top-0 right-0">
            <Image
              src="/svg/collapse.svg"
              alt="search"
              width={32}
              height={32}
            />
          </button>
        </div>

        <div className="flex items-end gap-[9px]">
          <div className="flex flex-col gap-[7.84px] w-[120px] h-[60px] px-[12.04px] py-[6.78px] rounded-[5.423px] bg-[rgba(0,_0,_0,_0.38)]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[4.07px]">
                <div className="text-xs font-bold">150⁺</div>
                <div className="text-[4px] font-normal text-center">
                  Chuyên khoa
                </div>
              </div>

              <div className="w-[0.508px] h-[8.907px] bg-white"></div>

              <div className="flex flex-col gap-[4.07px]">
                <div className="text-xs font-bold">500</div>
                <div className="text-[4px] font-normal  text-center">
                  Bác Sĩ
                </div>
              </div>

              <div className="w-[0.508px] h-[8.907px] bg-white"></div>

              <div className="flex flex-col gap-[4.07px]">
                <div className="text-xs font-bold">200</div>
                <div className="text-[4px] font-normal ">Nhà thuốc</div>
              </div>
            </div>

            <div className="flex items-center gap-[2.72px] justify-center">
              <div className="text-[6px] font-semibold leading-[9.152px] tracking-[0.102px]">
                Mở ứng dụng Y Viet
              </div>

              <button>
                <Image
                  src="/svg/externalLink.svg"
                  alt="externalLink"
                  width={9.381}
                  height={5.85}
                />
              </button>
            </div>
          </div>

          <div className="bg-hero-banner-2 flex-1 h-[28px] rounded-[5.135px] flex items-center">
            <div className="w-[54.88px] flex items-center justify-center">
              <div className="">
                <div className="text-[4.5px] font-bold">
                  Giải pháp y tế
                </div>
                <div className="text-[4.5px] font-normal tracking-[0.096px]">
                  Health Solutions
                </div>
              </div>
            </div>

            <div className="flex-1 w-3/4 h-full bg-[url('/svg/bg-hero-2.svg')] bg-cover bg-center bg-no-repeat px-[5.13px]">
              <div className="flex items-center justify-between">
                {data.map((i) => {
                  return (
                    <div
                      key={i.id}
                      className="flex justify-center h-[28px] items-center"
                    >
                      <div className="flex items-start gap-[5.14px]">
                        <div className="flex items-center">
                          <Image
                            src="/svg/star-1.svg"
                            alt="star"
                            width={6.419}
                            height={6.512}
                          />

                          <div className="text-[5px] text-[#12041E] font-semibold leading-[8.666px] tracking-[0.096px]">
                            {i.rate}
                          </div>
                        </div>

                        <div className="text-[4.5px] font-bold pt-[1px]">
                          <div className="text-[#12041E]">{i.title}</div>
                          <div className="text-[#0274FF]">{i.subTitle}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
