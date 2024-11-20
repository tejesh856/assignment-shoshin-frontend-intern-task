import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdDashboard, MdPersonAddAlt1 } from "react-icons/md";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { PiCircleFill } from "react-icons/pi";
import { TbCirclesFilled } from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { RiSettings4Fill } from "react-icons/ri";

export default function Sidebar({ toggle, settoggle }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        settoggle(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settoggle]);

  return (
    <div
      ref={sidebarRef}
      className={`flex flex-col gap-14 bg-[#FAFAFA] ${
        toggle
          ? "max-lg:px-8 max-lg:items-start max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:h-full"
          : "max-lg:px-0 max-lg:items-center"
      } px-8 py-6 border-0 border-r-[1px] shadow-sm`}
    >
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <p
          className={`text-2xl text-[#0A337A] ${
            toggle ? "max-lg:block" : "max-lg:hidden"
          }`}
        >
          Vasitum
        </p>
      </div>
      <div
        className={`flex flex-col ${
          toggle ? "max-lg:items-start" : "max-lg:items-center"
        } gap-4 text-[#686868c4]`}
      >
        <span className="text-sm text-[#68686880] max-lg:text-center font-normal">
          MAIN MENU
        </span>
        <div className="flex flex-col gap-6">
          <Link
            to="/"
            className="text-md flex items-center gap-5 text-[#FF5151]"
          >
            <MdDashboard size={20} />
            <span className={`${toggle ? "max-lg:block" : "max-lg:hidden"}`}>
              Dashboard
            </span>
          </Link>
          <Link to="/" className="text-md flex items-center gap-5 ">
            <MdPersonAddAlt1 size={20} className="text-[#B2B2B2]" />
            <span className={`${toggle ? "max-lg:block" : "max-lg:hidden"}`}>
              Recruitment
            </span>
          </Link>
          <Link to="/" className="text-md flex items-center gap-5">
            <BiSolidCalendarEvent size={20} className="text-[#B2B2B2]" />
            <span className={`${toggle ? "max-lg:block" : "max-lg:hidden"}`}>
              Schedule
            </span>
          </Link>
          <Link to="/" className="text-md flex items-center gap-5">
            <FaUsers size={20} className="text-[#B2B2B2]" />
            <span className={`${toggle ? "max-lg:block" : "max-lg:hidden"}`}>
              Employee
            </span>
          </Link>
          <Link to="/" className="text-lg flex items-center gap-5">
            <div className="flex items-center justify-center relative">
              <PiCircleFill size={23} className="text-[#B2B2B2]" />
              <TbCirclesFilled
                size={14}
                className="text-[#FAFAFA] absolute top-1 left-1"
              />
            </div>
            <span className={`${toggle ? "max-lg:block" : "max-lg:hidden"}`}>
              Department
            </span>
          </Link>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          toggle ? "max-lg:items-start" : "max-lg:items-center"
        } gap-4 text-[#686868c4]`}
      >
        <span
          className={`text-sm text-[#68686880] font-medium ${
            toggle ? "max-lg:text-start" : "max-lg:text-center"
          }`}
        >
          OTHER
        </span>
        <div className="flex flex-col gap-6">
          <Link className="text-md flex items-center gap-5 ">
            <BsHeadset size={20} className="text-[#B2B2B2]" />
            <span className={`${toggle ? "max-lg:block" : "max-lg:hidden"}`}>
              Support
            </span>
          </Link>
          <Link className="text-md flex items-center gap-5">
            <RiSettings4Fill size={20} className="text-[#B2B2B2]" />
            <span className={`${toggle ? "max-lg:block" : "max-lg:hidden"}`}>
              Settings
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
