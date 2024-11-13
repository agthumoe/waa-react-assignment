import { forwardRef, useId } from "react";

const Field = forwardRef(({ name, placeholder, label, type = "text" }, ref) => {
  const id = useId();
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="bg-gray-50 border border-indigo-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Field;
