import React from "react";

export const DayBar = () => {
  const days = [
    { label: "S", height: "h-20", color: "gray" },
    { label: "M", height: "h-28", color: "solid", class: "bg-green-700" },
    { label: "T", height: "h-20", color: "solid", class: "bg-green-300" },
    { label: "W", height: "h-32", color: "solid", class: "bg-green-900" },
    { label: "T", height: "h-28", color: "gray" },
    { label: "F", height: "h-20", color: "gray" },
    { label: "S", height: "h-24", color: "gray" },
  ];

  const grayPattern =
    "bg-[repeating-linear-gradient(135deg,#d1d5db_0px,#d1d5db_3px,transparent_3px,transparent_6px)]";

  return (
    <div className="rounded-xl border bg-white p-6 min-h-[200px]">
      <h1 className="font-bold mb-4 text-lg truncate">Project Analytics</h1>

      {/* Short container just like the screenshot */}
      <div className="flex justify-between items-end h-40">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col-reverse items-center">
            {/* Label */}
            <span className="mt-2 text-sm truncate">{day.label}</span>

            {/* Bar */}
            <div
              className={`
                w-10 rounded-full border truncate
                ${day.height}
                ${day.color === "gray" ? grayPattern : day.class}
              `}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
