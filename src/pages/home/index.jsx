import "./styles.css";
import { IoMdPersonAdd } from "react-icons/io";

export default function Home() {
  return (
    <div className="users-ctn">
      <h1>Usuários</h1>

      <IoMdPersonAdd
        className="users-add"
        size={24}
        color="var(--basic-white)"
      />

      <div></div>
    </div>
  );
}
