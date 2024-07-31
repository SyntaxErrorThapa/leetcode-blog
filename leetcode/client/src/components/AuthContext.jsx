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
          return response.json(); // Parse the response body to JSON
        }
        throw new Error("Not authenticated");
      })
      .then((data) => {
        if (data.isLogged) {
          // Assuming user is an array and we are interested in the first user object
          setIsLogged({ logStatus: data.isLogged, user: data.user });
        } else {
          setIsLogged({ logStatus: false, user: null });
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
