import "./styles.css";

export default function SignInput({ type, placeholder, value, onChange }) {
  return (
    <input
      className="btn-cadastro"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
