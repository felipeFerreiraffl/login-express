import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/signup";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/usuarios" element={<Home />} />
          <Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
