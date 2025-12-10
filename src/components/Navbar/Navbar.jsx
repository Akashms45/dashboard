import React from "react";
import { Search } from "./Search";
import { MsgBell } from "./MsgBell";
import { AccountToggle } from "./AccountToggle";
import { FiMenu } from "react-icons/fi";

export const Navbar = ({ setMobileOpen }) => {
  return (
    <div
      className="
        bg-neutral-100 border rounded-lg shadow 
        h-[9vh] px-6 
        flex items-center justify-between
      "
    >
      <div className="flex item-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded"
        >
          <FiMenu className="text-2xl hover:text-green-800" />
        </button>
        <Search />
      </div>

      <div className="flex items-center gap-4">
        <MsgBell />
        <AccountToggle />
      </div>
    </div>
  );
};
