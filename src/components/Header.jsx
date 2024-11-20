import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { GrStatusGoodSmall } from "react-icons/gr";
import profilepic from "../assets/profilepic.png";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header({ settoggle }) {
  const handletoggle = () => {
    settoggle(true);
  };
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b-[1px] shadow-sm text-[#B2B2B2]">
      <div className="flex items-center">
        <div className="lg:hidden max-lg:mr-4" onClick={handletoggle}>
          <GiHamburgerMenu size={20} className="text-[#B2B2B2]" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="bg-[#FAFAFA] border outline-none border-r-0 border-[#E0E0E0] px-4 py-2 rounded rounded-tr-none rounded-br-none"
        />
        <div className="bg-[#FAFAFA] border border-l-0 border-[#E0E0E0] rounded rounded-tl-none rounded-bl-none px-4 py-2">
          <FiSearch size={24} />
        </div>
      </div>
      <div className="flex items-center gap-6 max-lg:gap-2">
        <div className="flex items-start relative cursor-pointer">
          <IoIosNotifications size={25} />
          <GrStatusGoodSmall
            size={10}
            className="absolute top-0 left-3 text-[#FF5151]"
          />
        </div>
        <RiMessage2Fill size={20} className="cursor-pointer" />
        <div className="flex items-center gap-4 max-lg:gap-2">
          <img
            src={profilepic}
            alt="profile-pic"
            className="rounded-full cursor-pointer"
          />
          <span className="text-black cursor-pointer max-lg:hidden">
            Tejesh Reddy
          </span>
          <FaChevronDown size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
