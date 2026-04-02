import express from "express";
import { connection, prisma } from "./db";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

connection();

app.get("/healthcheck", (req, res) => {
  console.log("API is running!");
  res.status(200).json({
    message: "API is running",
  });
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "E-mail e senha são obrigatórios!",
      });
      return;
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      res.status(404).json({
        message: "Usuário não encontrado!",
      });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Erro interno do servidor!",
    });
    return;
  }
});

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
