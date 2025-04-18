import React from "react";
import { Link } from "react-router";
function Navbar() {
  return (
    <div>
      <div>
        <div className=" grid grid-cols-3 p-4.5 text-white bg-neutral-900 fixed top-0 w-full">
          <div className=" col-span-2 ml-4.5">Open lend</div>
          <div className=" grid grid-cols-4 gap-x-4">
            <Link to={"/"}>Home</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/live-loans"}>Live Loans</Link>
            <Link to={"/profile"}>Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
