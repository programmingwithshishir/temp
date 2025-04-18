import React from "react";
import { LuLogOut } from "react-icons/lu";

function Profile() {
  return (
    <div>
      <div className="mt-14 grid grid-cols-5 gap-4 p-5 bg-neutral-950 text-white pt-10 pb-52 ">
        <div className=" col-span-3  p-4 rounded-2xl bg-[#0f1838]">
          <div className="mb-4 p-4 w-full rounded-2xl  bg-blue-900">
            <h2 className=" font-semibold text-lg tracking-wide ">
              Avin Joy Dcosta
            </h2>
            <h4 className=" text-neutral-400">Lender ID: C1OC65RHZ6</h4>
          </div>
          <div className="mb-4 p-4 w-full rounded-2xl bg-blue-900">
            <h2 className=" font-semibold text-lg tracking-wide ">
              Personal Details
            </h2>
            <div className="mt-4 grid grid-cols-4 ">
              <div>
                <h6 className=" text-gray-400">Name</h6>
                <h2 className="font-semibold text-lg tracking-wide ">
                  Avin Joy Dcosta
                </h2>
              </div>
              <div>
                <h6 className=" text-gray-400">Mobile number</h6>
                <h2 className="font-semibold text-lg tracking-wide ">
                  965743213
                </h2>
              </div>{" "}
              <div>
                <h6 className=" text-gray-400">PAN Number</h6>
                <h2 className="font-semibold text-lg tracking-wide ">
                  ABXCDJS
                </h2>
              </div>
              <div>
                <h6 className=" text-gray-400">Date of Birth</h6>
                <h2 className="font-semibold text-lg tracking-wide ">
                  02/09/03
                </h2>
              </div>{" "}
              <div>
                <h6 className=" text-gray-400">Gender</h6>
                <h2 className="font-semibold text-lg tracking-wide ">Male</h2>
              </div>
              <div>
                <h6 className=" text-gray-400">Email</h6>
                <h2 className="font-semibold text-lg tracking-wide ">
                  abccd23@gmail.com
                </h2>
              </div>
            </div>
          </div>
          <div className=" p-4 w-full  rounded-2xl bg-blue-900">
            <h2 className=" my-2 font-semibold text-lg tracking-wide ">
              Bank account
            </h2>
            <h4>Account number: C1OC65RHZ6</h4>
            <h4>IFSC code: OC92k65RHZ6</h4>
          </div>
        </div>
        <div className=" col-span-2 p-4 rounded-2xl bg-[#0f1838] h-[390px]">
          <div className=" rounded-2xl p-4  bg-gradient-to-r from-blue-700 via-indigo-700 to-sky-500">
            <div className=" p-1 my-4">
              <h4 className=" text-xl">Total Balance</h4>
              <h1 className=" text-5xl font-bold">₹0.00</h1>
            </div>
            <hr />
            <div className=" grid grid-cols-2 gap-2 p-2 my-4">
              <button className=" text-black font-semibold bg-blue-100 rounded-xl p-4">
                Add funds
              </button>
              <button className="  border-2 border-white  rounded-xl p-4">
                Withdraw
              </button>
            </div>
          </div>
          <div className=" my-4">
            <div className="flex gap-2.5 text-left tracking-wide rounded-xl p-4 w-full text-white bg-black">
              <LuLogOut className=" mt-1.5"/>
              <span> Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
