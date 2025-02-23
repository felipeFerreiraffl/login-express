import UserCard from "../../components/UserCard";
import "./styles.css";
import { IoMdPersonAdd } from "react-icons/io";

export default function Home() {
  return (
    <div className="users-ctn">
      <h1 className="users-title users-txt-color">Usuários</h1>

      <IoMdPersonAdd
        className="users-add"
        size={24}
        color="var(--basic-white)"
      />

      <div className="users-cards">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}
