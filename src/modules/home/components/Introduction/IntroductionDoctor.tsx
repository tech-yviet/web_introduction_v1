import Image from "next/image";
import { motion } from "framer-motion";

const IntroductionDoctor = () => {
  return (
    <div className="mt-[40px] px-[10px] text-white font-inter md:mt-[87px] md:px-[50px]">
      <div className="flex gap-5 md:px-[54px] md:justify-between md:gap-[58px]">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative pl-[39px] pt-[21px] md:pl-[95px] md:pt-[67px]"
        >
          <div className="absolute top-0 left-0 text-[47px] text-white font-bold leading-[47.231px] opacity-[0.1] md:text-[150px] md:leading-[151.67px]">
            01
          </div>

          <div className="flex items-center gap-[6.13px] md:gap-[15.17px]">
            <div className="w-[18.414px] h-[0.394px] bg-white md:w-[45.501px] md:h-[1.264px]"></div>
            <div className="text-[4px] font-extrabold tracking-[1.181px] uppercase md:text-[11.375px] md:tracking-[3.792px]">
              Get Started
            </div>
          </div>

          <div className="mt-[5.04px] text-sm font-bold md:mt-4 md:text-[40px] md:leading-tight">
            Tạo tài khoản cho <br /> bạn & gia đình
          </div>

          <ul className="mt-2 list-disc px-4 md:mt-4 text-[8px] md:text-[18px]">
            <li>Tải ứng dụng Y VIET và tạo tài khoản</li>

            <li>
              Điền đầy đủ thông tin bệnh sử cá nhân để quá trình tư vấn của Bác
              sĩ được diễn ra thuận lợi và chính xác nhất
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pt-[21px] min-w-[136px] relative md:min-w-[439.207px] lg:pt-0"
        >
          <Image
            src="/svg/introduction-mobile-1.svg"
            alt="image-1"
            width={439.207}
            height={658.81}
            className="absolute top-[21px] left-0 z-10 md:top-[5px]"
          />

          <Image
            src="/svg/shadow-introduction-1.svg"
            alt="shadow-image-1"
            width={567.098}
            height={401.028}
            className="absolute top-[71px] -left-[8px] md:top-[218px] md:left-[10px]"
          />
        </motion.div>
      </div>

      <div className="flex gap-5 mt-[33px] md:mt-[185px] md:justify-between md:gap-[58px] md:px-[61px]">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pt-[21px] min-w-[136px] relative md:min-w-[439.207px] lg:pt-0"
        >
          <Image
            src="/svg/introduction-mobile-2.svg"
            alt="image-2"
            width={439.207}
            height={658.81}
            className="absolute top-[21px] left-0 z-10 md:top-[5px]"
          />

          <Image
            src="/svg/shadow-introduction-2.svg"
            alt="shadow-image-2"
            width={567.098}
            height={401.028}
            className="absolute -top-[18px] left-0 md:-top-[135px]"
          />
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative pl-[39px] pt-[21px] md:pl-[114px] md:pt-[67px]"
        >
          <div className="absolute top-0 left-0 text-[47px] text-white font-bold leading-[47.231px] opacity-[0.1] md:text-[150px] md:leading-[151.67px]">
            02
          </div>

          <div className="flex items-center gap-[6.13px] md:gap-[15.17px]">
            <div className="w-[18.414px] h-[0.394px] bg-white md:w-[45.501px] md:h-[1.264px]"></div>
            <div className="text-[4px] font-extrabold tracking-[1.181px] uppercase md:text-[11.375px] md:tracking-[3.792px] md:text-nowrap">
              HEALTHCARE EXPERT CONNECTION
            </div>
          </div>

          <div className="mt-[5.04px] text-sm font-bold md:mt-4 md:text-[40px] md:leading-tight">
            Kết nối Bác sĩ mà <br /> bạn mong muốn
          </div>

          <div className="mt-2 text-[8px] md:mt-4 md:text-[18px] md:leading-[24px]">
            Tìm và đặt hẹn Bác sĩ mà bạn mong muốn dựa trên chuyên khoa, địa
            điểm, học vấn và kinh nghiệm, cũng như đánh giá và nhận xét từ các
            bệnh nhân đã được điều trị bởi Bác sĩ trước đó
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroductionDoctor;
