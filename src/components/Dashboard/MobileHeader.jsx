// src/components/MobileHeader/MobileHeader.jsx
import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { MsgBell } from "../Navbar/MsgBell";
import { CommandMenu } from "../Navbar/CommandMenu";

export const MobileHeader = ({ setMobileOpen, setSearchVisible }) => {
  const [open, setOpen] = useState();

  const handleOpenCommand = (e) => {
    e.target.blur();
    setOpen(true);
  };

  return (
    <div className="flex items-center justify-between px-4 py-4  md:hidden">
      {/* MENU BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <FiMenu className="text-2xl text-gray-800" />
      </button>

      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-3">
        {/* SEARCH BUTTON */}
        <button
          onClick={handleOpenCommand}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <FiSearch className="text-2xl text-gray-800" />
        </button>

        {/* NOTIFICATION BELL */}
        <div className="p-2 rounded-lg hover:bg-gray-100">
          <MsgBell />
        </div>
      </div>
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
};
