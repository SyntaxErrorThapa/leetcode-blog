import React from "react";

function Header() {
  return (
    <>
      <nav className="p-4 shadow-lg flex flex-col justify-center bg-custom-bg items-center">
        <h1 className="text-3xl font-bold text-dark-gray">LeetCode Blog</h1>
        <p>Well descripted solution for the problems</p>
      </nav>
    </>
  );
}



export default Header;

