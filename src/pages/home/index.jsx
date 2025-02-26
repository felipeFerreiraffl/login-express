import { useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal";
import UserCard from "../../components/UserCard";
import "./styles.css";

export default function Home() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="users-ctn">
      <h1 className="users-title users-txt-color">Usuários</h1>

      <IoMdPersonAdd
        className="users-add"
        color="var(--basic-white)"
        onClick={() => navigate("/")}
      />

      <div className="users-cards">
        <UserCard onClick1={() => setModalOpen(true)} />
        <UserCard onClick1={() => setModalOpen(true)} />
        <UserCard onClick1={() => setModalOpen(true)} />
        <UserCard onClick1={() => setModalOpen(true)} />
        <UserCard onClick1={() => setModalOpen(true)} />
        <UserCard onClick1={() => setModalOpen(true)} />
      </div>

      {modalOpen && <Modal onClick2={() => setModalOpen(false)} />}
    </div>
  );
}
