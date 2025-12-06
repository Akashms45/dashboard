import { Sidebar } from "../../components/sidebar";
import { Navbar } from "../../components/navbar";

export const Calendar = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-none">
          <Sidebar />
        </div>

        <div className="flex-1 ">
          <Navbar />
          <div className="flex">
            <div className="h-12 sm:h-16 md:h-[805px] w-full bg-neutral-100 shadow-inner  px-2 sm:px-4 md:px-6 ml-1  rounded-xl ">
              <h1 className="p-2 mt-4 text-4xl font-bold">Calendar</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
