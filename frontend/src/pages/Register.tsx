import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function onSubmit() {}

  return (
    <div className="flex h-screen items-center justify-center bg-[#161410]">
      <div className="flex flex-col justify-center gap-2">
        <img src="./logo.png" alt="Logo" className="mb-4" />
        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />
        <Button title="Registrar" />
        <Link to="/login" className="w-full">
          <Button title="Já tenho uma conta, fazer login" variant="outline" />
        </Link>
      </div>
    </div>
  );
};

export default Register;
