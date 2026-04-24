import { type Request, type Response } from "express";
import { Router } from "express";
import { auth, login, logout, register } from "./controller/userController";
import { authMiddleware } from "./middlewares/auth";
import { deleteProduct, getProducts } from "./controller/productController";
import { getCartItems } from "./controller/cartController";

export const router = Router();

router.get("/healthcheck", (req: Request, res: Response) => {
  console.log("API is running!");
  res.status(200).json({
    message: "API is running",
  });
});

// Users Routes
router.post("/login", login);
router.post("/register", register);
router.get("/me", authMiddleware, auth);
router.post("/logout", authMiddleware, logout);

// Product Routes
router.get("/products", getProducts);
router.delete("/products/:id", authMiddleware, deleteProduct);

// Cart
router.get("/cart", authMiddleware, getCartItems);
