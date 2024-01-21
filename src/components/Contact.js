import React from "react";
import { text } from "../ultils/dataContact";
import logo from "../assets/logo.png";

const Contact = () => {
  return (
    <div className="bg-gray-200	rounded-md shadow-md p-4 w-full flex flex-col justify-between grid grid-cols-3 gap-6">
      <div className="flex flex-col items-center justify-around w-full ">
        <img src={logo} className="w-full h-24 object-contain" />
        <span className="text-black-500 text-[14px] font-sans">
          {"Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ"}
        </span>
      </div>
      <div className="flex "></div>
      <div className="flex ">
        <div className="flex flex-col justify-center gap-1">
          <span className="text-black-500 text-[14px] font-sans">
            {"Copyright © 2024 - 2023 PhongtroQuangDat.com"}
          </span>
          <span className="text-black-500 text-[14px] font-sans">
            {"Địa chỉ: 102 Mai Chí Thọ, Phường An Phú, Q2, Tp. Hồ Chí Minh"}
          </span>
          <span className="text-black-500 text-[14px] font-sans">
            {"SDT: 0342743273"}
          </span>
          <span className="text-black-500 text-[14px] font-sans">
            {"Gmail: phongtroquangdat@gmail.com"}
          </span>
          <div className="flex gap-7">
            <a href="https://www.instagram.com/dat.224/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
            <img
            src={
                'https://res.cloudinary.com/dluanqwnn/image/upload/v1702459418/phongtro/f3jq8umy9hs4qgwxn70y.png'
            }
            className="w-full h-10 object-contain"
          />
            </a>
            <a href="https://www.facebook.com/ledat.26.04">
            <img
            src={
                'https://res.cloudinary.com/dluanqwnn/image/upload/v1702459501/phongtro/lemdpxvmbxen3fkumeo2.png'
            }
            className="w-full h-10 object-contain"
          />
            </a>
            <a href="https://www.tiktok.com/@lqd245">
            <img
            src={
                'https://seeklogo.com/images/T/tiktok-share-icon-black-logo-29FFD062A0-seeklogo.com.png'
            }
            className="w-full h-10 object-contain"
          />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
