import { useEffect } from "react";

function FormInput({ id, label, value, placeholder, onChange }) {
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
      <span className="text-gray-300 uppercase font-light text-sm ml-4 mb-2 tracking-wide">
        {label}
      </span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => storeValue(e.target.value)}
        className="bg-gray-600 rounded-md pl-4 p-2 text-white"
      />
    </label>
  );
}

export default FormInput;
