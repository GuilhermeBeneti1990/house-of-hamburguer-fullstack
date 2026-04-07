import express, { type Request, type Response } from "express";
import { connection } from "./db";
import cors from "cors";
import { router } from "./routes";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(router);
connection();

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
