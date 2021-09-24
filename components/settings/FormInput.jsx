import { useEffect } from "react";

function FormInput({ id, label, value, onChange }) {
  const storeValue = (value) => {
    onChange(value);

    if (typeof window !== "undefined") {
      localStorage.setItem(id, value);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      onChange(localStorage.getItem(id));
    }
  }, []);

  return (
    <label className="flex flex-col mb-3">
      <span className="text-gray-300 uppercase font-light text-sm ml-2 mb-2">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => storeValue(e.target.value)}
        className="bg-gray-600 rounded-md p-2 text-white"
      />
    </label>
  );
}

export default FormInput;
