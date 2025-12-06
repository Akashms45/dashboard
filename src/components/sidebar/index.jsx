import { NavLink } from "react-router-dom";
import logo from "../../assest/images.png";

export const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const baseStyle =
      "flex items-center gap-2 px-1 py-1 w-1 rounded-r-lg group";
    return isActive
      ? `bg-green-700 font-semibold text-slate-800 ${baseStyle}`
      : `hover:bg-green-700 text-neutral-500 hover:text-slate-800 ${baseStyle}`;
  };

  return (
    <aside className="m-5 h-[920px] w-64 bg-neutral-100 shadow-inner rounded-xl">
      <div className="flex items-center p-4 ml-4">
        <img
          src={logo}
          alt="DONAZO logo"
          className="w-16 h-16 object-contain rounded-full"
        />
        <h1 className="ml-2 text-3xl font-bold text-green-700">Donezo</h1>
      </div>

      <div className="flex flex-col mt-20 gap-4">
        <h2 className="text-base font-semibold tracking-wide text-gray-600 uppercase  p-1 ml-6">
          MENU
        </h2>

        <NavLink className={getStyles} to="/">
          {({ isActive }) => (
            <>
              <span
                className={`material-icons ml-6 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-500 group-hover:text-green-700"
                }`}
              >
                dashboard
              </span>
              <span className="text-xl ml-2">Dashboard</span>
            </>
          )}
        </NavLink>

        <NavLink className={getStyles} to="/tasks">
          {({ isActive }) => (
            <>
              <span
                className={`material-icons ml-6 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-500 group-hover:text-green-700"
                }`}
              >
                sticky_note_2
              </span>
              <span className="text-xl ml-2">Tasks</span>
            </>
          )}
        </NavLink>

        <NavLink className={getStyles} to="/calendar">
          {({ isActive }) => (
            <>
              <span
                className={`material-icons ml-6 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-500 group-hover:text-green-700"
                }`}
              >
                event
              </span>
              <span className="text-xl ml-2">Calendar</span>
            </>
          )}
        </NavLink>

        <NavLink className={getStyles} to="/analytics">
          {({ isActive }) => (
            <>
              <span
                className={`material-icons ml-6 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-500 group-hover:text-green-700"
                }`}
              >
                signal_cellular_alt
              </span>
              <span className="text-xl ml-2">Analytics</span>
            </>
          )}
        </NavLink>

        <NavLink className={getStyles} to="/team">
          {({ isActive }) => (
            <>
              <span
                className={`material-icons ml-6 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-500 group-hover:text-green-700"
                }`}
              >
                people
              </span>
              <span className="text-xl ml-2">Team</span>
            </>
          )}
        </NavLink>
      </div>

      <div className="flex flex-col mt-16 gap-4">
        <h2 className="text-base font-semibold tracking-wide text-gray-600 uppercase  p-1 ml-6">
          GENERAL
        </h2>

        <NavLink className={getStyles} to="/Settings">
          {({ isActive }) => (
            <>
              <span
                className={`material-symbols-rounded ml-6 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-500 group-hover:text-green-700"
                }`}
              >
                settings
              </span>
              <span className="text-xl ml-2">Settings</span>
            </>
          )}
        </NavLink>

        <NavLink className={getStyles} to="/help">
          {({ isActive }) => (
            <>
              <span
                className={`material-icons ml-6 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-500 group-hover:text-green-700"
                }`}
              >
                support
              </span>
              <span className="text-xl ml-2">Help</span>
            </>
          )}
        </NavLink>

        <NavLink className={getStyles} to="/logout">
          {({ isActive }) => (
            <>
              <span
                className={`material-symbols-outlined ml-6 ${
                  isActive
                    ? "text-green-700"
                    : "text-gray-500 group-hover:text-green-700"
                }`}
              >
                logout
              </span>
              <span className="text-xl ml-2">Logout</span>
            </>
          )}
        </NavLink>
      </div>
    </aside>
  );
};
