import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";

export default function Announcements() {
  const announcements = [
    {
      text: "Outing schedule for every departement",
      time_text: "5 Minutes ago",
    },
    {
      text: "Meeting HR Department",
      time_text: "Yesterday, 12:30 PM",
    },
    {
      text: "IT Department need two more talents for UX/UI Designer position",
      time_text: "Yesterday, 09:15 AM",
    },
  ];
  return (
    <div className="border border-[#E0E0E0] shadow-sm w-full rounded">
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-xl text-[#161E54] font-medium">Announcement</h1>
        <div className="flex gap-4 border p-1 text-sm rounded border-[#EFEFEF] text-[#686868]">
          <span>Today, 19 Nov 2024</span>
          <IoIosArrowDown size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-5 px-4 py-3">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="flex items-center rounded justify-between bg-[#FAFAFA] border border-[#E0E0E0] px-4 py-3"
          >
            <div className="flex flex-col gap-1">
              <p className="text-[#303030] text-lg">{announcement.text}</p>
              <span className="text-[#686868] text-sm">
                {announcement.time_text}
              </span>
            </div>
            <div className="flex gap-4">
              <TiPin
                size={20}
                className={` ${[
                  index === 0 ? "text-[#686868]" : "text-[#B2B2B2]",
                ]}`}
              />
              <HiDotsHorizontal size={20} className="text-[#B2B2B2]" />
            </div>
          </div>
        ))}
      </div>
      <button className="text-[#FF5151] p-3 w-full border-t-[1px] border-[#E0E0E0]">
        See All Anouncements
      </button>
    </div>
  );
}
