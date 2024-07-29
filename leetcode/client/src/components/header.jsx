import React from "react";
import Button from '@mui/material/Button'

function Header() {
  return (
    <>
      <nav className="p-4 shadow-lg flex flex-row justify-center bg-custom-bg items-center">
        {/* Div for Middle Nav*/}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-dark-gray">LeetCode Blog</h1>
          <p>Well descripted solution for the problems</p>
        </div>

      {/* Div for Login */}
      <div className=" ">
      <Button variant="outlined">Login</Button>
      </div>
      </nav>
    </>
  );
}

export default Header;
