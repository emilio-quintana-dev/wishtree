const Input = ({ name, handleChange, placeholder, required, type, error }) => {
  return (
    <input
      className={`form-input w-full text-gray-800 focus:border-teal-600 ${
        error && "border-red-600"
      }`}
      id={name}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
};

export default Input;
