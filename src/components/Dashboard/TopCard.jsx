import React from "react";

export const TopCard = () => {
  return (
    <div className="px-4 py-3">
      {/* HEADER ROW */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between sm:justify-evenly gap-3">
        {/* TITLE */}
        <h1 className="text-2xl hidden md:block font-bold">Dashboard</h1>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <button className="rounded-full font-semibold text-white bg-green-800 px-4 py-2">
            + Add Project
          </button>

          <button className="rounded-full font-semibold border border-green-800 text-green-800 px-4 py-2">
            Import Data
          </button>
        </div>
      </div>

      {/* SUBTITLE (desktop only) */}
      <p className="hidden md:block text-xs text-gray-500 mt-2">
        Plan, prioritize, and accomplish your tasks with ease.
      </p>
    </div>
  );
};
