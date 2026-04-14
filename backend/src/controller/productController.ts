import type { Request, Response } from "express";
import { prisma } from "../db";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();

    if (products.length === 0) {
      res.status(404).json({
        message: "Não foram encontrados produtos!",
      });
      return;
    }
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Erro interno do servidor!",
    });
    return;
  }
};
