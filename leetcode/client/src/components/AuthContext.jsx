import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState({ logStatus: false, user: null });

  useEffect(() => {
    const apiUrl = "https://server.leetcodejournal.com";
    axios
      .get(`${apiUrl}/auth/status`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          if (data.isLogged) {
            setIsLogged({ logStatus: data.isLogged, user: data.user });
          } else {
            setIsLogged({ logStatus: false, user: null });
          }
        } else {
          throw new Error("Not authenticated");
        }
      })
      .catch((error) => {
        console.error("Error fetching authentication status:", error);
        setIsLogged({ logStatus: false, user: null });
      });
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
