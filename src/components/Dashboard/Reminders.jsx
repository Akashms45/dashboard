import React from "react";
import { MdVideoCameraFront } from "react-icons/md";

export const Reminders = () => {
  return (
    <div className="border bg-white rounded-xl p-8 min-h-[200px] ">
      <h1 className="font-bold mb-3 text-lg truncate">Reminders</h1>

      <h2 className="truncate text-green-800 text-2xl font-semibold leading-tight">
        Meeting with Arc Company
      </h2>

      <p className="text-gray-500 text-sm mt-2 truncate">
        Time : 02.00 pm – 04.00 pm
      </p>

      <button
        className="
          mt-7 w-full flex items-center justify-center gap-2
          py-4 rounded-full text-white font-semibold
          bg-green-700 hover:bg-green-800
          transition-all duration-200 truncate
        "
      >
        <MdVideoCameraFront className="text-xl" />
        <span className="text-xl truncate">Start Meeting</span>
      </button>
    </div>
  );
};
