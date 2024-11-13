import PropTypes from "prop-types";
import { forwardRef, useId } from "react";

const TextAreaField = forwardRef(({ name, placeholder, label }, ref) => {
  const id = useId();
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 font-medium text-gray-900">
        {label}
      </label>
      <textarea
        rows={4}
        id={id}
        name={name}
        className="bg-gray-50 border border-indigo-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default TextAreaField;
