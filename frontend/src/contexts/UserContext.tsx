import { createContext, useState, type ReactNode } from "react";
import type { IUserContext } from "../types/User";

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
