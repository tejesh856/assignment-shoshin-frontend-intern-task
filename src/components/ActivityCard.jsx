import React from "react";

export default function ActivityCard() {
  return (
    <div className="flex flex-col gap-2  pb-4 bg-[#161E54] rounded-lg shadow-sm text-white max-lg:4/5 w-full">
      <h1 className="px-4 py-4 bg-[#1B204A] rounded-lg font-medium text-xl">
        Recently Activity
      </h1>
      <div className="flex flex-col gap-4 px-4 py-3">
        <span className="text-sm opacity-90">10.40 AM, Tue 19 Nov 2024</span>
        <h2 className="font-medium text-xl">You Posted a New Job</h2>
        <p className="text-sm opacity-90">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>
      <div className="flex justify-between items-center px-4 py-3 text-sm max-lg:flex-col max-lg:items-start max-lg:gap-6">
        <span>Today you makes 12 Activity</span>
        <button className="bg-[#FF5151]  px-3 py-2 rounded">
          See All Activity
        </button>
      </div>
    </div>
  );
}
