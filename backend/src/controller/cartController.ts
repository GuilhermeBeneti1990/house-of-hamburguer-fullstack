import type { Request, Response } from "express";
import { prisma } from "../db";

export const getCartItems = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: user.id },
      include: { product: true },
    });

    res.json(cartItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro interno do servidor" });
    return;
  }
};
