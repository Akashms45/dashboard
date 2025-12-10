import React, { useState } from "react";
import { FiCommand, FiMail, FiSearch } from "react-icons/fi";
import { CommandMenu } from "./CommandMenu";
import { MsgBell } from "./MsgBell";
import { AccountToggle } from "./AccountToggle";

export const Search = () => {
  const [open, setOpen] = useState();

  const handleOpenCommand = (e) => {
    e.target.blur();
    setOpen(true);
  };

  return (
    <div className="flex items-center justify-between relative">
      <div className="bg-white w-full max-w-sm h-12 rounded-3xl flex items-center px-3 py-2.5 text-sm">
        <FiSearch className="text-lg" />
        <input
          onFocus={handleOpenCommand}
          className="w-full bg-transparent placeholder:text-stone-400 px-2 focus:outline-none cursor-pointer"
          type="text"
          placeholder="Search..."
        />
        <FiCommand className="text-xl border bg-stone-200 p-0.5 rounded" />
      </div>
      <CommandMenu open={open} setOpen={setOpen} />
    </div>
  );
};
