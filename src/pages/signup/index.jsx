import SignInput from "../../components/SignInput";
import icon from "../../assets/icon.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className="sign-ctn">
      <h1 className="sign-ttl color-ttl">Cadastro de usuários com Express</h1>

      <div className="sign-card">
        <img src={icon} alt="Ícone" />

        <div className="sign-card-ctn">
          <h2 className="sign-card-ttl color-ttl">Cadastrar</h2>

          <div className="sign-card-input">
            <SignInput type={"text"} placeholder={"Nome"} />
            <SignInput type={"email"} placeholder={"E-mail"} />
            <SignInput type={"password"} placeholder={"Senha"} />
          </div>

          <button
            className="sign-card-btn color-ttl"
            onClick={() => navigate("/usuarios")}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
