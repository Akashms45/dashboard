import { Sidebar } from "../../components/sidebar";
import { Navbar } from "../../components/navbar";

export const Tasks = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex">
          <Sidebar />
        </div>

        <div className="flex ">
          <Navbar />
        </div>
        <div className="flex">
          <div className="h-12 sm:h-16 md:h-[816px] w-screen bg-neutral-100 shadow-inner flex   px-2 sm:px-4 md:px-6 ml-72 mr-5 rounded-xl ">
            <h1 className="p-2 mt-4 text-4xl font-bold">Tasks</h1>
          </div>
        </div>
      </div>
    </>
  );
};
