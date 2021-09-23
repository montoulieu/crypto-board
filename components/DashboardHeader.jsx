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
      {menuOpen && (
        <div className="flex flex-col absolute bg-gray-800 w-full bottom-0 inset-x-0">
          <div className="p-5">
            <label className="flex flex-col">
              Chia Pool
              <select>
                <option>Flexpool</option>
                <option>Space Pool</option>
              </select>
            </label>
            <label className="flex flex-col">
              Chia Address
              <input type="text" />
            </label>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardHeader;
