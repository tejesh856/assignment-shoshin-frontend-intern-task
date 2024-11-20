import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

export default function Schedules() {
  const announcements = [
    {
      text: "Review candidate applications",
      time_text: "Today - 11.30 AM",
      stats: "priority",
    },
    {
      text: "Interview with candidates",
      time_text: "Today - 10.30 AM",
    },
    {
      text: "Short meeting with product designer from IT Department",
      time_text: "Today - 09.15 AM",
    },
  ];

  const priorityAnnouncements = announcements.filter(
    (announcement) => announcement.stats === "priority"
  );
  const otherAnnouncements = announcements.filter(
    (announcement) => !announcement.stats
  );

  return (
    <div className="border border-[#E0E0E0] shadow-sm w-full rounded">
      <div className="flex gap-2 justify-between items-center px-4 py-3">
        <h1 className="text-xl text-[#161E54] font-medium max-lg:text-md">
          Upcoming Schedule
        </h1>
        <div className="flex gap-2 border p-1 text-sm rounded border-[#EFEFEF] text-[#686868]">
          <span>Today, 19 Nov 2024</span>
          <IoIosArrowDown size={20} />
        </div>
      </div>

      {/* Priority section */}
      {priorityAnnouncements.length > 0 && (
        <div className="px-4 py-2">
          <span className="font-light text-sm text-[#686868]">Priority</span>
          {priorityAnnouncements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-center rounded justify-between bg-[#FAFAFA] border border-[#E0E0E0] px-4 py-3 mt-2"
            >
              <div className="flex flex-col gap-1">
                <p className="text-[#303030] text-md">{announcement.text}</p>
                <span className="text-[#686868] text-sm">
                  {announcement.time_text}
                </span>
              </div>
              <HiDotsHorizontal size={20} className="text-[#B2B2B2]" />
            </div>
          ))}
        </div>
      )}

      {/* Other section */}
      {otherAnnouncements.length > 0 && (
        <div className="px-4 py-2">
          <span className="font-light text-sm text-[#686868]">Other</span>
          {otherAnnouncements.map((announcement, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? "max-lg:hidden lg:flex" : "flex"
              } items-center rounded justify-between bg-[#FAFAFA] border border-[#E0E0E0] px-4 py-3 mt-2`}
            >
              <div className="flex flex-col gap-1">
                <p className="text-[#303030] text-md">{announcement.text}</p>
                <span className="text-[#686868] text-sm">
                  {announcement.time_text}
                </span>
              </div>
              <HiDotsHorizontal size={20} className="text-[#B2B2B2]" />
            </div>
          ))}
        </div>
      )}

      <button className="text-[#FF5151] p-3 w-full border-t-[1px] border-[#E0E0E0]">
        Create a New Schedule
      </button>
    </div>
  );
}
