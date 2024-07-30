import React, { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState({ logStatus: false, user: null });

  useEffect(() => {
    fetch("/auth/status", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Not authenticated");
      })
      .then((data) => {
        setIsLogged({ logStatus: true, user: data.user });
      })
      .catch((error) => {
        console.error(error);
        setIsLogged({ logStatus: false, user: null });
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
