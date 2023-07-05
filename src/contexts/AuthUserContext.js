import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { authFirebase } from "../services/firebase";

export const AuthUserContext = createContext();

export function AuthUserProvider({ children }) {
  const user = {
    login: true,
  };

  const signup = (userCredentials) => {
    const { email, password } = userCredentials;
    createUserWithEmailAndPassword(authFirebase, email, password);
  };

  return (
    <AuthUserContext.Provider value={{ user, signup }}>
      {children}
    </AuthUserContext.Provider>
  );
}
