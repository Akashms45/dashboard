import React from "react";
import { FiBell, FiMail } from "react-icons/fi";

export const MsgBell = () => {
  return (
    <div className="flex gap-3 items-center ml-4">
      <div className="rounded-full text-xl bg-white p-3  transition">
        <FiMail className="text-xl hover:text-green-900" />
      </div>
      <div className="rounded-full text-xl bg-white p-3  transition ">
        <FiBell className="text-xl hover:text-green-900" />
      </div>
    </div>
  );
};
