import { ShoppingCart } from "lucide-react";
import type { IProduct } from "../types/Product";
import { formatterPrice } from "../utils/formatter";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Product = ({
  id,
  name,
  description,
  price,
  img,
  category,
  setProducts,
}: IProduct) => {
  const { user } = useContext(UserContext);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      if (!id) {
        console.log("Id não enviado!");
        return;
      }
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Erro ao realizar requisição!");
        return;
      }

      getProducts();
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <img
          src={`./${img}`}
          alt=""
          className="h-[83px] w-[100px] md:h-[166px] md:w-[200px]"
        />
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-white uppercase md:text-lg">
              {name}
            </p>
            {user?.admin && (
              <div
                className="flex cursor-pointer items-center rounded-md border-1 px-1 text-xs text-red-500 uppercase"
                onClick={() => handleDeleteProduct(id)}
              >
                Deletar
              </div>
            )}
          </div>
          <p className="md:text-md flex-1 text-xs text-[#848484]">
            {description}
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>
            <ShoppingCart size={18} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
