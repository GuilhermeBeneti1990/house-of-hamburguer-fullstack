import type { Request, Response } from "express";
import { prisma } from "../db";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();

    if (products.length === 0) {
      res.status(200).json([]);
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

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { id } = req.params;

    if (!user?.admin) {
      res.status(400).json({
        message: "Usuário não autorizado!",
      });
      return;
    }

    if (!id || typeof id !== "string") {
      res.status(400).json({
        message: "ID inválido!",
      });
      return;
    }

    const deleteProduct = await prisma.product.delete({ where: { id } });

    if (!deleteProduct) {
      res.status(400).json({
        message: "Erro ao deletar o produto, produto não encontrado!",
      });
      return;
    }
  } catch (error: any) {
    console.log(error);
    if (error.code === "P2025") {
      res.status(404).json({
        message: "Produto não encontrado!",
      });
      return;
    }
    res.status(500).json({
      message: "Erro interno do servidor!",
    });
  }
};
