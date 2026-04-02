import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit() {
    try {
      if (!email || !password) {
        setError("E-mail e senha são obrigatórios!");
        return;
      }
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 404) {
        setError("Usuário não encontrado!");
      }

      if (response.status === 400) {
        setError("E-mail e senha são obrigatórios!");
      }

      if (response.status === 200) {
        setError("");
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-[#161410]">
      <div className="flex flex-col justify-center gap-2">
        <img src="./logo.png" alt="Logo" className="mb-4" />
        <div className="mb-4 flex flex-col gap-2">
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
          <p className="text-sm font-bold text-red-500">{error}</p>
        </div>
        <Button title="Login" onClick={onSubmit} />
        <Link to="/register" className="w-full">
          <Button title="Ainda não tem conta? Registre-se" variant="outline" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
