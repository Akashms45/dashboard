import React, { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Navbar } from "../src/components/Navbar/Navbar";
import { resize } from "framer-motion";

function App() {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      {/* Sidebar */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Content */}
      <div className="grid gap-4 grid-rows-[80px_1fr]">
        <div className="hidden sm:block">
          <Navbar setMobileOpen={setMobileOpen} />
        </div>

        <Dashboard />
      </div>
    </main>
  );
}

export default App;
