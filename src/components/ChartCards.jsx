import React from "react";
export default function ChartCards({
  title,
  count,
  men,
  women,
  increament,
  image,
}) {
  return (
    <div className="flex gap-4 justify-between shadow-sm border border-[#E0E0E0] px-2 py-3 rounded">
      <div className="flex flex-col gap-4 justify-between">
        <h1 className="text-lg font-normal text-[#161E54]">{title}</h1>
        <h1 className="text-2xl font-medium text-[#161E54]">{count}</h1>
        <div className="text-[#686868] text-sm flex flex-col gap-1">
          <span>{men} Men</span>
          <span>{women} Women</span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <img src={image} alt="chart" />
        <p className="bg-[#FFEFE7] p-1 text-sm font-light rounded ">
          +{increament}% Past month
        </p>
      </div>
    </div>
  );
}
