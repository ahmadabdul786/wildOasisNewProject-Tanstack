function Input({ id,type, placeholder, autoComplete, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      autoComplete={autoComplete}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}