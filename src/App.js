import React, { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Navbar } from "./components/Navbar/Navbar";
import { Search } from "./components/Navbar/Search";

function App() {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 768 && width < 1024) {
        setOpen(false);
      } else if (width >= 1024) {
        setOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      className="
        grid gap-6 p-4
        grid-cols-1
        md:grid-cols-[auto_1fr]
      "
    >
      {/* DESKTOP SIDEBAR */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* CONTENT AREA */}
      <div className="grid gap-4 grid-rows-[auto_1fr]">
        {/* DESKTOP NAVBAR */}
        <div className="hidden md:block">
          <Navbar setMobileOpen={setMobileOpen} />
        </div>

        {/* MOBILE SEARCH (only when opened) */}
        {showMobileSearch && (
          <div className="px-2 md:hidden">
            <Search open={showMobileSearch} setOpen={setShowMobileSearch} />
          </div>
        )}

        {/* DASHBOARD */}
        <Dashboard
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          setSearchVisible={setShowMobileSearch}
          setOpen={setOpen}
        />
      </div>
    </main>
  );
}

export default App;
