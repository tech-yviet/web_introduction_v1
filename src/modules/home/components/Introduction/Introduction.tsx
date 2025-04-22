"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import IntroductionDoctor from "./IntroductionDoctor";
import IntroductionMedicine from "./IntroductionMedicine";
import { motion } from "framer-motion";

const Introduction = () => {
  const refToScroll = useRef(null);
  const [isNearTop, setIsNearTop] = useState(false);
  const [isFindDoctor, setIsFindDoctor] = useState(true);
  const [timeInterval, setTimeInterval] = useState(6000);

  const handleScroll = () => {
    if (!refToScroll.current) return;

    const rect = (
      refToScroll.current as HTMLDivElement
    ).getBoundingClientRect();
    const isNearTop = rect.top <= 300;

    setIsNearTop(isNearTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isNearTop) return;

    const interval = setInterval(() => {
      setIsFindDoctor((prev) => !prev);
      setTimeInterval(6000);
    }, timeInterval);

    return () => clearInterval(interval);
  }, [isNearTop, timeInterval]);

  const handleChangeFindDoctor = () => {
    setIsFindDoctor(true);
    setTimeInterval(15000);
  };

  const handleChangeFindMedicine = () => {
    setIsFindDoctor(false);
    setTimeInterval(15000);
  };

  return (
    <div className="max-w-[375px] mx-auto px-[7px] md:max-w-[1200px] md:mx-auto md:mt-[52px] relative z-10 font-inter">
      <motion.div
        ref={refToScroll}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-[3113.76px] border-[0.331px] text-white px-[10px] py-[8px] flex items-center gap-1 hover:cursor-pointer max-w-[245px] mx-auto md:px-[33.5px] md:py-[10px] md:max-w-max"
      >
        <div className="text-[9.868px] font-medium leading-[4.917px] md:text-sm md:font-semibold md:leading-4">
          Cập nhật phiên bản mới nhất của{" "}
          <span className="font-semibold">Ứng dụng</span>
        </div>

        <div>
          <Image
            src="/svg/arrow-right.svg"
            alt="arrow-right"
            width={8.879}
            height={8.879}
            className="md:w-3 md:h-3"
          />
        </div>
      </motion.div>

      <div className="mt-4 text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={refToScroll}
          className="font-roboto text-center text-[30px] font-black leading[120%] text-shadow md:mt-8 md:text-[96px] md:text-shadow-2"
        >
          Kết nối cùng Y Viet
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 text-center text-[8px] font-medium leading-[11px] mx-auto md:mt-8 md:text-[20px] md:leading-[28px] md:w-auto"
        >
          <div>
            Điểm dừng đầu tiên để bạn kết nối các dịch vụ tư vấn y khoa chất
            lượng cao
          </div>
          <div>
            Đơn giản hóa trải nghiệm chăm sóc sức khỏe của bạn chỉ với{" "}
            <span className="font-bold">&quot;một lần chạm&quot;</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-[11px] flex items-center justify-center gap-2 md:mt-8 md:gap-4"
        >
          <button
            onClick={handleChangeFindDoctor}
            className={`hover:cursor-pointer hover:opacity-80 px-4 py-2 rounded-[32px] text-[10px] font-medium leading-[6.228px] md:rounded-[20px] md:text-[14px] md:leading-[20px] ${
              isFindDoctor
                ? "bg-[rgba(255,255,255,0.38)] shadow-[0px_0.311px_0.623px_-0.311px_rgba(0,0,0,0.10),_0px_0.311px_0.934px_0px_rgba(0,0,0,0.10)]"
                : "border-[0.089px] shadow-[0px_0.311px_0.623px_-0.311px_rgba(0,0,0,0.10),_0px_0.311px_0.934px_0px_rgba(0,0,0,0.10)]"
            }`}
          >
            Tìm Bác sĩ
          </button>

          <button
            onClick={handleChangeFindMedicine}
            className={`hover:cursor-pointer hover:opacity-80 px-4 py-2 rounded-[32px] text-[10px] font-medium leading-[6.228px] md:rounded-[20px] md:text-[14px] md:leading-[20px] ${
              !isFindDoctor
                ? "bg-[rgba(255,255,255,0.38)] shadow-[0px_0.311px_0.623px_-0.311px_rgba(0,0,0,0.10),_0px_0.311px_0.934px_0px_rgba(0,0,0,0.10)]"
                : "border-[0.089px] shadow-[0px_0.311px_0.623px_-0.311px_rgba(0,0,0,0.10),_0px_0.311px_0.934px_0px_rgba(0,0,0,0.10)]"
            }`}
          >
            Tìm thuốc
          </button>
        </motion.div>
      </div>

      {!!isFindDoctor ? <IntroductionDoctor /> : <IntroductionMedicine />}
    </div>
  );
};

export default Introduction;
