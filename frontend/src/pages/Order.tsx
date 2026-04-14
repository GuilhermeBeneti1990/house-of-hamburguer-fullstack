import { useState } from "react";
import OrderCard from "../components/OrderCard";

const Order = () => {
  const [category, setCategory] = useState("Pendentes");

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elementSelected =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";
    const elementNotSelected =
      "md:text-md hover:bg flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

    if (categoryName === category) {
      return elementSelected;
    } else {
      return elementNotSelected;
    }
  };
  return (
    <div className="mx-auto w-full px-3 md:w-[737px] md:px-0">
      <div className="mt-1 mb-3 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Pendentes")}
          onClick={() => handleChangeCategory("Pendentes")}
        >
          Pendentes
        </div>
        <div
          className={getCategoryClass("Retirados")}
          onClick={() => handleChangeCategory("Retirados")}
        >
          Retirados
        </div>
        <div
          className={getCategoryClass("Cancelados")}
          onClick={() => handleChangeCategory("Cancelados")}
        >
          Cancelados
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <OrderCard
          id={2}
          name="Guilherme Beneti"
          date="27/12/2026"
          orderTime="21:00"
          totalValue="R$127,50"
        />
      </div>
    </div>
  );
};

export default Order;
