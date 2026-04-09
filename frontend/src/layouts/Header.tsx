import { Link, useLocation } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import { Box, LayoutDashboard, LogOut, Plus, ShoppingCart } from "lucide-react";

const Header = () => {
  const BASE_URL = "http://localhost:3000";
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  const authUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/me`, {
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Não autorizado!");
        return;
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const logOut = async () => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Não foi possível deslogar!");
        return;
      }

      setUser(null);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    authUser();
  }, []);

  const getNavItemClass = (path: string) => {
    const baseClass =
      "w-[35px] flex h-[35px] cursor-pointer items-center justify-center rounded border-1";

    if (location.pathname === path) {
      return `${baseClass} text-[#161410] bg-[#F2DAAC]`;
    } else {
      return baseClass;
    }
  };

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="Logo" />
        </Link>
        {user ? (
          <div className="flex items-center gap-8 text-white">
            {user.admin && (
              <div className="hidden items-center gap-2 text-[#F2DAAC] md:flex">
                <Link to="/">
                  <div className={getNavItemClass("/")}>
                    <Box size={18} />
                  </div>
                </Link>
                <Link to="/pedidos">
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutDashboard size={18} />
                  </div>
                </Link>
                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded border-1">
                  <Plus size={18} />
                </div>
              </div>
            )}
            <div className="relative cursor-pointer">
              <ShoppingCart size={18} />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] text-[#161410]">
                1
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>{user.name}</p>
              <LogOut
                size={18}
                className="cursor-pointer"
                onClick={() => logOut()}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
