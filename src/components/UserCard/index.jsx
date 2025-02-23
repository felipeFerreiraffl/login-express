import { IoIosAt, IoMdEye } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import "./styles.css";

export default function UserCard() {
  return (
    <div className="card-user">
      <div className="card-header">
        <p className="card-id">#ID</p>
        <p className="card-name">Nome</p>
        <p>
          <IoMdEye className="card-eye" color="var(--basic-white)" />
        </p>
      </div>

      <div className="card-info-ctn top-mrg">
        <IoIosAt className="card-info-icn" color="var(--basic-white)" />
        <p className="card-info">E-mail</p>
        <div />
      </div>

      <div className="card-info-ctn top-mrg-2">
        <MdOutlinePassword
          className="card-info-icn"
          color="var(--basic-white)"
        />
        <p className="card-info">Senha</p>
        <div />
      </div>

      <div className="card-btn-ctn">
        <button className="card-btn update">Atualizar</button>
        <button className="card-btn delete">Deletar</button>
      </div>
    </div>
  );
}
