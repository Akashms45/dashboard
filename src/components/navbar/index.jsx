import logo from "../../assest/profilepic.jpg";

export const Navbar = () => {
  return (
    <nav
      className="h-12 sm:h-16 md:h-24 w-full
  bg-neutral-100 shadow-inner flex items-center justify-between 
  px-2 sm:px-34 md:px-12 ml-1 m-5 rounded-xl "
    >
      <div className="shadow-inner flex bg-white items-center gap-2 bg-gray-100 px-8 py-3 rounded-full">
        <span className="material-icons-outlined mr-5 text-gray-500 ">
          search
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-64 bg-transparent outline-none text-md text-gray-700"
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="material-icons-outlined text-gray-600 cursor-pointer hover:text-green-700 bg-white p-3 rounded-full">
          email
        </span>
        <span className=" material-icons-outlined text-gray-600 cursor-pointer hover:text-green-700 bg-white p-3 rounded-full">
          notifications
        </span>

        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="profile_pic"
            className="w-18 h-20 rounded-full object-cover border"
          />
          <div className="flex flex-col ">
            <p className="text-xl font-semibold text-gray-800">Name</p>
            <p className="text-lg text-gray-500">example@mail.com </p>
          </div>
        </div>
      </div>
    </nav>
  );
};
