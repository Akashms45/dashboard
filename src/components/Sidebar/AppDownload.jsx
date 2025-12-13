import { motion } from "framer-motion";
import logo from "../../assest/images.png";

export const AppDownload = ({ open }) => {
  return (
    <div className="mt-36 mb-4 px-3">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="w-full rounded-xl bg-gradient-to-tr from-green-900 via-green-100 to-green-900 border shadow-sm p-3 flex flex-col items-center text-center"
        >
          <img
            src={logo}
            alt="App preview"
            className="w-8 h-8 rounded-lg shadow mb-2 ml-auto transition-transform duration-200 hover:scale-105"
          />
          <h3 className="text-base font-semibold mr-auto text-stone-800">
            Download our <br />
            Mobile app
          </h3>
          <p className="text-xs mr-auto text-stone-600 mt-1">
            Get easy in another way
          </p>

          <button className="mt-3 w-3/4 rounded-lg bg-green-600 text-xs font-medium text-black py-1.5 hover:bg-green-700 active:scale-95 transition-transform">
            Download
          </button>
        </motion.div>
      )}
    </div>
  );
};
