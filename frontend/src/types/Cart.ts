import type { IProduct } from "./Product";

export interface ICart {
  id: string;
  userId: string;
  productId: string;
  product: IProduct;
}

export interface ICartContext {
  cartItems: ICart[];
  setCartItems: React.Dispatch<React.SetStateAction<ICart[]>>;
}
