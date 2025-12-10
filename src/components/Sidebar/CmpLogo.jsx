import React from "react";
import logo from "../../assest/images.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const CmpLogo = ({ open, toggleSidebar }) => {
  return (
    <div className="mb-4 mt-3 pb-4 ">
      <div className="flex items-center gap-1 p-2 rounded ">
        <img
          className="w-10 h-10 rounded shadow shrink-0"
          src={logo}
          alt="logo"
        />

        {open && (
          <span className="text-xl font-bold text-green-900 flex-1 cursor-pointer transition-transform duration-200 hover:scale-105">
            Donezo
          </span>
        )}

        <button
          onClick={toggleSidebar}
          className="p-1 rounded-full hover:bg-stone-300"
        >
          {open ? <FiChevronLeft /> : <FiChevronRight />}
        </button>
      </div>
    </div>
  );
};
