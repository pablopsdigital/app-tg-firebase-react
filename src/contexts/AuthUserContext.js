import { createContext } from "react";

export const AuthUserContext = createContext();

export function AuthUserProvider({ children }) {
  const user = {
    login: true,
  };

  return (
    <AuthUserContext.Provider value={{ user }}>
      {children}
    </AuthUserContext.Provider>
  );
}
