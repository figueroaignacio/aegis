import { useContext } from "react";
import { AuthContext } from "~/context/auth-context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside of an AuthProvider");
  }
  return context;
};
