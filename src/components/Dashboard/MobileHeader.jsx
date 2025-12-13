import { FiMenu, FiSearch } from "react-icons/fi";
import { MsgBell } from "../Navbar/MsgBell";
import { CommandMenu } from "../Navbar/CommandMenu";
import { useState } from "react";

export const MobileHeader = ({ setMobileOpen, setSearchVisible }) => {
  const [open, setOpen] = useState();

  const handleOpenCommand = (e) => {
    e.target.blur();
    setOpen(true);
  };

  return (
    <div className="flex items-center justify-between px-4 py-4  md:hidden">
      <button
        onClick={() => setMobileOpen(true)}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <FiMenu className="text-2xl text-gray-800" />
      </button>

      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-3">
        <button
          onClick={handleOpenCommand}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <FiSearch className="text-2xl text-gray-800" />
        </button>

        <div className="p-2 rounded-lg hover:bg-gray-100">
          <MsgBell />
        </div>
      </div>
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
};
