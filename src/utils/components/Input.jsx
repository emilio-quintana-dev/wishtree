const Input = ({
  name,
  handleChange,
  placeholder,
  required,
  type,
  error,
  value,
}) => {
  return (
    <input
      className={`form-input w-full text-gray-800 focus:border-bright-purple ${
        error && "border-red-600"
      }`}
      id={name}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value ? value : undefined}
    />
  );
};

export default Input;
