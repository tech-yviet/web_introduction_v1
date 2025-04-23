import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { IDoctor } from "@/store/modules/doctors/types";

interface CardDoctorProps {
  doctor: IDoctor;
  index: number;
}

const CardDoctor: FC<CardDoctorProps> = ({ doctor, index }) => {
  return (
    <motion.div
      key={doctor.doctorId}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex gap-[8.73px] bg-white rounded-[12.4px] border-doctors-card py-[6.35px] pl-[6.27px] box-shadow-doctors-card hover:cursor-pointer md:py-3 md:pl-3 md:pr-[20px] md:gap-[19.67px] hover:bg-card-doctor-hover-desktop transition-all duration-100 group"
    >
      <div className="bg-[#E6F1FF] rounded-[9.3px] px-[2.5px] pt-[5px]">
        <Image
          src={doctor?.urlAvatar}
          alt={`${doctor.fullName}`}
          width={88}
          height={88}
          className="md:w-[107px] md:h-[107px]"
        />
      </div>

      <div className="flex-1">
        <div className="text-[#1F2A37] font-medium mb-2 md:text-lg md:mb-[10px]">{`${doctor.fullName}`}</div>

        <div className="flex flex-col gap-[4.75px] font-inter text-xs text-[#8E8E8E] md:text-sm md:gap-[6px]">
          <div className="flex items-center gap-[6.2px]">
            <div>
              <Image
                src="/svg/icons/school.svg"
                alt="school"
                width={15}
                height={15}
                className="md:w-[16px] md:h-[16px]"
              />
            </div>

            <div>{doctor.mainSpecialty}</div>
          </div>

          <div className="flex items-center gap-[6.2px]">
            <div>
              <Image
                src="/svg/icons/location.svg"
                alt="location"
                width={15}
                height={16}
                className="md:w-[16px] md:h-[16px]"
              />
            </div>

            <div>{doctor.unitName}</div>
          </div>

          <div className="flex items-center gap-[17.68px] md:gap-[63.07px]">
            <div className="flex items-center gap-[6.2px] md:gap-[8px]">
              <div>
                <div>
                  <Image
                    src="/svg/icons/star.svg"
                    alt="star"
                    width={13}
                    height={13}
                    className="md:w-[15.933px] md:h-[15.933px]"
                  />
                </div>
              </div>

              <div>9.5/10</div>
            </div>

            <div className="flex items-center gap-[6.2px] md:gap-[12px]">
              <div>
                <div>
                  <Image
                    src="/svg/icons/calendar.svg"
                    alt="calendar"
                    width={11.625}
                    height={11.625}
                    className="md:w-[15px] md:h-[15px]"
                  />
                </div>
              </div>

              <div>{doctor.numberOfOrders} lượt đặt</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-end">
        <Button className="bg-[#0274FF] min-w-[138px] text-white rounded-[100px] font-medium font-roboto box-shadow-button-gradient-3 group-hover:bg-button-hover-3 transition-all duration-300">
          Xem chi tiết
        </Button>
      </div>
    </motion.div>
  );
};

export default CardDoctor;
