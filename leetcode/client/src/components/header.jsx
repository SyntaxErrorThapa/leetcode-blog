import React from "react";
import ModalLogin from "./Login";
import { useAuth } from "./AuthContext";

function Header() {
  const {isLogged} = useAuth();

  return (
    <>
      <nav className="p-4 shadow-lg flex bg-custom-bg items-center">
        {/* Nav for the first */}
        <div className="flex-grow"></div>

        {/* Div for Middle Nav*/}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-dark-gray">LeetCode Blog</h1>
          <p>Well descripted solution for the problems</p>
        </div>

        {/* Div for Login */}
        <div className="flex-grow flex justify-end">
          <ModalLogin isLogged={isLogged.logStatus}/>
        </div>
      </nav>
    </>
  );
}

export default Header;
