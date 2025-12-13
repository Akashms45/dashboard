import React from "react";
import { CmpLogo } from "./CmpLogo";
import { RouteSelect } from "./RouteSelect";
import { AppDownload } from "./AppDownload";
import { AccountToggle } from "../Navbar/AccountToggle";

export const Sidebar = ({ open, setOpen, mobileOpen, setMobileOpen }) => {
  return (
    <>
      <div
        className={`
        
        bg-neutral-100 border shadow h-auto rounded-lg
        hidden md:block                             
        transition-all duration-500 ease-in-out
        ${open ? "md:w-48" : "md:w-20"}
        ${open ? "lg:w-60" : "lg:w-20"}
      `}
      >
        <CmpLogo open={open} toggleSidebar={() => setOpen(!open)} />
        <RouteSelect open={open} />
        <AppDownload open={open} />
      </div>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="
              absolute left-2 top-2 h-full w-64 bg-neutral-100 
              shadow-xl rounded-xl p-4
            "
          >
            <CmpLogo open={true} toggleSidebar={() => setMobileOpen(false)} />
            <RouteSelect open={true} />
            <div className="mt-56">
              <AccountToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
