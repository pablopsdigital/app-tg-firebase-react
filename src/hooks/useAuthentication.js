import { useContext } from "react";
import { AuthUserContext } from "../contexts/AuthUserContext";

export const useAuthentication = () => {
  const context = useContext(AuthUserContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
