import { useState } from "react";
import IconUser from "./logos/IconUser";

function DashboardHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const date = new Date();

  const currentDate = `${date.toLocaleString("default", {
    weekday: "long",
  })}, ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}`;

  return (
    <>
      <header className="container mx-auto pt-5 pb-2">
        <div className="sm:w-3/4 md:w-2/3 flex mx-auto">
          <div>
            <div className="font-semibold uppercase text-gray-500 mb-2">
              {currentDate}
            </div>
            <h1 className="text-4xl font-bold mx-auto mb-3">Crypto Board</h1>
          </div>
          <div className="ml-auto mt-auto">
            <button
              className="text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IconUser />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`flex flex-col absolute bg-gray-800 w-full sm:w-2/3 mx-auto h-5/6 z-20 inset-x-0 bottom-0 transition-all duration-500 rounded-t-xl ${
          menuOpen ? "" : "opacity-0 h-0 overflow-hidden translate-y-full"
        }`}
      >
        <header className="p-3 relative text-center">
          Settings
          <button
            className="absolute right-3 text-blue-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Done
          </button>
        </header>
        <div className="p-5">
          {/* <label className="flex flex-col">
              Chia Pool
              <select>
                <option>Flexpool</option>
                <option>Space Pool</option>
              </select>
            </label> */}
          <label className="flex flex-col">
            <span className="text-gray-300 uppercase font-light text-sm ml-2 mb-2">
              Chia Address
            </span>
            <input
              type="text"
              className="bg-gray-600 rounded-md p-2 text-white"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
