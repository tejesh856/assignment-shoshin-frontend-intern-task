import React from "react";

export default function Card({ title, count, content, color, bgcolor }) {
  return (
    <div
      className="flex flex-col justify-between gap-2 px-2 py-4 flex-1 rounded"
      style={{ backgroundColor: bgcolor }}
    >
      <h1 className="text-xl font-normal text-[#161E54]">{title}</h1>
      <h2 className="text-3xl font-medium text-[#161E54]">{count}</h2>
      <p style={{ color: color }} className="text-md">
        {content}
      </p>
    </div>
  );
}
