import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    console.log(email);
    console.log(password);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#161410]">
      <div className="flex flex-col justify-center gap-2">
        <img src="./logo.png" alt="Logo" className="mb-4" />
        <Input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title="Login" />
        <Link to="/register" className="w-full">
          <Button title="Ainda não tem conta? Registre-se" variant="outline" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
