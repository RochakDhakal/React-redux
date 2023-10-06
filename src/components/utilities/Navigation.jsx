import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
  console.log("Local Storage", localStorage);

  return (
    <>
      <div className="bg-amber-300 h-screen flex justify-center items-center">
        <Link
          to="/counter"
          className="bg-gray-500 rounded-lg p-2 text-3xl text-amber-300 m-1 hover:scale-105 active:scale-95 uppercase"
        >
          Counter
        </Link>
        <Link
          to="/todo"
          className="bg-gray-500 rounded-lg p-2 text-3xl text-amber-300 m-1 hover:scale-105 active:scale-95 uppercase"
        >
          To-Do List
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
