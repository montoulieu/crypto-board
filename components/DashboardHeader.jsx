import { useState, useEffect } from "react";
import IconUser from "./logos/IconUser";
import FormInput from "./settings/FormInput";
import useSettingsStore from "../hooks/useSettingsStore";

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
          <FormInput
            id="chia-address"
            label="Chia Address"
            value={useSettingsStore((state) => state.chiaWalletAddress)}
            onChange={useSettingsStore((state) => state.setChiaWalletAddress)}
          />
          <FormInput
            id="ethereum-address"
            label="Ethereum Address"
            value={useSettingsStore((state) => state.ethereumWalletAddress)}
            onChange={useSettingsStore(
              (state) => state.setEthereumWalletAddress
            )}
          />
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
