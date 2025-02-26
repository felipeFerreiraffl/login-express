import SignInput from "../SignInput";
import "./styles.css";

export default function Modal({ onClick1, onClick2 }) {
  return (
    <div className="modal-ctn">
      <div className="modal">
        <h1 className="modal-ttl">Atualização de usuário</h1>

        <div className="modal-input-ctn">
          <SignInput type={"text"} placeholder={"Nome"} />
          <SignInput type={"email"} placeholder={"E-mail"} />
          <SignInput type={"password"} placeholder={"Senha"} />
        </div>

        <div className="modal-btn-ctn">
          <button className="modal-btn modal-update" onClick={onClick1}>
            Atualizar
          </button>
          <button className="modal-btn modal-cancel" onClick={onClick2}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
