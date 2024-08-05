import React from "react";
import ModalLogin from "./Login";
import { useAuth } from "./AuthContext";

function Header() {
  const { isLogged, setIsLogged } = useAuth();

  return (
    <>
      <nav className="p-4 shadow-lg flex bg-custom-bg items-center">
        {/* Nav for the first */}
        {isLogged.logStatus && isLogged.user ? (
          <div className="flex-grow flex items-center text-2xl text-gray-300 font-bold">
            <img
              src={`${isLogged.user.user_image}`}
              alt={isLogged.user.full_name}
              className="w-12 h-12 rounded-full  mr-4 ml-4"
            />
            <div>{isLogged.user.full_name}</div>
          </div>
        ) : (
          <div className="flex-grow p-4 text-gray-300 italic"></div>
        )}

        {/* Div for Middle Nav*/}
        <div className="flex flex-col items-center mr-20">
          <h1 className="text-3xl font-bold text-dark-gray">LeetCode Blog</h1>
          <p>Well descripted solution for the problems</p>
        </div>

        {/* Div for Login */}
        <div className="flex-grow flex justify-end">
          <ModalLogin isLogged={isLogged.logStatus} setIsLogged={setIsLogged} />
        </div>
      </nav>
    </>
  );
}

export default Header;
