import { DETAIL_LIST, SUPPORT_LIST } from "@/variables";
import Image from "next/image";
import Link from "next/link";

const FooterDesktop = () => {
  return (
    <div className="hidden md:block mt-[40px] min-w-[1200px] bg-footer h-[372px] rounded-t-[32px] pt-[49px] px-[44px] font-inter">
      <div className="flex gap-8 px-[44px] md:max-w-[1200px] md:mx-auto">
        <div className="w-1/4">
          <div className="flex items-center gap-[18px]">
            <Image
              src={"/svg/y-viet.svg"}
              alt="y-viet"
              width={65}
              height={65}
            />
            <div className="text-[20px] font-extrabold text-[#0152B5] md:text-[28px]">
              Y VIET
            </div>
          </div>

          <div className="mt-4 text-[#3A3541] text-sm leading-[26.978px]">
            <div className="font-bold">CÔNG TY TNHH BO VISION</div>
            <div>
              <span className="font-bold">Địa chỉ:</span> 9/8 Đường 223, xã Hòa
              Phú, huyện Củ Chi, TP. Hồ Chí Minh
            </div>
            <div>
              <span className="font-bold">Số ĐKKD:</span> 0318895338 do Sở KH&ĐT
              TP.HCM cấp lần đầu ngày 02/04/2025
            </div>
          </div>
        </div>

        <div className="w-1/4">
          <div className="text-sm font-bold text-[#2E64D6]">
            Hỗ trợ khách hàng
          </div>

          <div className="mt-[16px] flex flex-col gap-4">
            {SUPPORT_LIST.map((item) => (
              <div
                key={item.id}
                className="text-sm text-[#3A3541] hover:text-[#0274FF] whitespace-pre-line"
              >
                <Link href={item.href}>{item.title}</Link>
              </div>
            ))}
          </div>

          <div className="my-4 text-sm text-[#3A3541]">
            <span className="font-bold">Hotline:</span> 0827 222 115
          </div>
          <div className="text-sm text-[#3A3541]">
            <span className="font-bold">Email:</span> info@yviet.ai.vn
          </div>
        </div>

        <div className="w-1/4">
          <div className="text-sm font-bold text-[#2E64D6]">
            Danh sách chi tiết
          </div>

          <div className="mt-[16px] flex flex-col gap-4">
            {DETAIL_LIST.map((item) => (
              <div
                key={item.id}
                className="text-sm text-[#3A3541] hover:text-[#0274FF] whitespace-pre-line"
              >
                <Link href={item.href}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/4">
          <div className="text-sm font-bold text-[#2E64D6]">
            Mở ứng dụng Y Viet
          </div>

          <div className="mt-[25px] flex items-center gap-[16.88px]">
            <div>
              <Image
                src={"/svg/qr-code.svg"}
                alt="qr-code"
                width={92.659}
                height={92.86}
              />
            </div>

            <div className="flex flex-col gap-[11.11px]">
              <div>
                <Image
                  src={"/svg/ios.svg"}
                  alt="ios"
                  width={126.519}
                  height={42.335}
                />
              </div>

              <div>
                <Image
                  src={"/svg/android.svg"}
                  alt="android"
                  width={126.519}
                  height={42.335}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-[44px]">
        <div className="mt-[18px] border-t border-white pl-[47.21px] pr-[21.88px] pt-[12.98px]  flex items-center justify-between">
          <div className="flex items-end gap-[7.2px]">
            <div>
              <Image
                src={"/svg/icons/facebook.svg"}
                alt="facebook"
                width={31.475}
                height={31.475}
              />
            </div>

            <div>
              <Image
                src={"/svg/icons/zalo.svg"}
                alt="zalo"
                width={28.865}
                height={28.865}
              />
            </div>
          </div>

          <div className=" text-[13.801px] text-[#4B4B4B]">
            Y Viet 2025 © All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
