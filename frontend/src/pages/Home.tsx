import { useEffect, useState } from "react";
import Product from "../components/Product";
import type { IProduct } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
  const [products, setProducts] = useState<IProduct[]>([]);

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

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

  const filterProducts = products.filter((product) => {
    return product.category === category;
  });

  useEffect(() => {
    getProducts();
  }, []);

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
      <div className="my-1 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Hamburguer")}
          onClick={() => handleChangeCategory("Hamburguer")}
        >
          Hamburguer
        </div>
        <div
          className={getCategoryClass("Bebidas")}
          onClick={() => handleChangeCategory("Bebidas")}
        >
          Bebidas
        </div>
        <div
          className={getCategoryClass("Porções")}
          onClick={() => handleChangeCategory("Porções")}
        >
          Porções
        </div>
      </div>
      <p className="mt-2 mb-2 font-bold text-[#F2DAAC] uppercase">{category}</p>
      <div className="flex flex-col gap-1 md:gap-3">
        {filterProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
            category={product.category}
          />
        ))}
        {filterProducts.length === 0 && <p>Não há produtos desta categoria</p>}
      </div>
    </div>
  );
};

export default Home;
