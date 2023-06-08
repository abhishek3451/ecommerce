import { useContext, useEffect, useState } from "react";
import React from "react";
import CartContext from "../component/store/CartContext";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const cartCtx = useContext(CartContext);
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = useState(intialToken);
  const userisLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };
  const logoutHandler = () => {
    // cartCtx.cart = [];

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userisLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
