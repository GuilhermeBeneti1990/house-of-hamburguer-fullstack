import { ShoppingCart } from "lucide-react";

const Product = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <img
          src="./duplo-da-casa.png"
          alt=""
          className="h-[83px] w-[100px] md:h-[166px] md:w-[200px]"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold text-white uppercase md:text-lg">
            Duplo da Casa
          </p>
          <p className="md:text-md flex-1 text-xs text-[#848484]">
            Dois suculentos hambúrgueres de 120g, queijo cheddar derretido,
            maionese da casa e picles no pão brioche tostado
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">R$28,90</p>
            <ShoppingCart size={18} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
