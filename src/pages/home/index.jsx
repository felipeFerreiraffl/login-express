import { IoMdPersonAdd } from "react-icons/io";
import UserCard from "../../components/UserCard";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="users-ctn">
      <h1 className="users-title users-txt-color">Usuários</h1>

      <IoMdPersonAdd
        className="users-add"
        color="var(--basic-white)"
        onClick={() => navigate("/")}
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
