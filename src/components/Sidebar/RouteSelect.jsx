import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiBarChart,
  FiBook,
  FiCalendar,
  FiHelpCircle,
  FiHome,
  FiLogOut,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

export const RouteSelect = ({ open }) => {
  const location = useLocation();

  const menuRoutes = [
    { id: 1, title: "Dashboard", Icon: FiHome, path: "/" },
    { id: 2, title: "Tasks", Icon: FiBook, path: "/tasks" },
    { id: 3, title: "Calendar", Icon: FiCalendar, path: "/calendar" },
    { id: 4, title: "Analytics", Icon: FiBarChart, path: "/analytics" },
    { id: 5, title: "Team", Icon: FiUsers, path: "/team" },
  ];

  const generalRoutes = [
    { id: 6, title: "Settings", Icon: FiSettings, path: "/settings" },
    { id: 7, title: "Help", Icon: FiHelpCircle, path: "/help" },
    { id: 8, title: "Logout", Icon: FiLogOut, path: "/home" },
  ];

  return (
    <div className="space-y-4 ">
      {/* MENU SECTION */}
      <div>
        <p className="px-4 mt-10 text-xs font-semibold text-stone-500 cursor-pointer ">
          MENU
        </p>
        {menuRoutes.map((r) => (
          <RouteItem
            key={r.id}
            {...r}
            selected={location.pathname === r.path}
            open={open}
          />
        ))}
      </div>

      {/* GENERAL SECTION */}
      <div>
        <p className="px-4 mt-10 text-xs font-semibold text-stone-500 ">
          GENERAL
        </p>

        {generalRoutes.map((r) => (
          <RouteItem
            key={r.id}
            {...r}
            selected={location.pathname === r.path}
            open={open}
          />
        ))}
      </div>
    </div>
  );
};

// --------------------------------------------------

const RouteItem = ({ Icon, selected, title, path, open }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full p-1 group">
      {selected && (
        <motion.div
          layoutId="activeRoute"
          className="absolute left-0 top-0.5 h-12 w-2 bg-green-800 rounded-r-xl"
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      )}

      <button
        onClick={() => navigate(path)}
        className={`
          flex items-center m-1 gap-3 w-full rounded px-4 py-2 text-sm relative
          transition-all duration-200
          ${
            selected
              ? " text-black font-bold"
              : "hover:bg-stone-200 text-stone-500"
          }
        `}
      >
        <Icon className={`text-lg ${selected ? "text-green-950" : ""}`} />

        {open && <span className="text-sm">{title}</span>}

        {!open && (
          <div
            className="
      absolute left-10 top-1/2 -translate-y-1/2
              bg-stone-400 text-black text-xs px-3 py-1.5 rounded 
              opacity-0 group-hover:opacity-100 group-hover:visible 
              invisible transition-all duration-200 whitespace-nowrap 
              z-50 shadow-lg
    "
          >
            {title}
          </div>
        )}
      </button>
    </div>
  );
};

export default RouteItem;
