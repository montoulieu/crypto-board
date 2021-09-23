import React from "react";

function PayoutProgressBar({ payoutLimit, unpaidAmount, color }) {
  const percent = (unpaidAmount / payoutLimit) * 100;
  // console.log(percent);
  return (
    <div className="mt-auto">
      <div className="relative ">
        <div
          className={`overflow-hidden h-3 text-xs flex rounded-b-md ${
            color == "green" ? "bg-green-200" : "bg-purple-200"
          } `}
        >
          <div
            style={{ width: `${percent.toFixed(1)}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
              color == "green" ? "bg-green-500" : "bg-purple-500"
            }`}
          >
            <span style={{ fontSize: "0.55rem" }}>{percent.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayoutProgressBar;
