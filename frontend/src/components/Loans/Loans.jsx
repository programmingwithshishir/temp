import React from "react";
import LoanCard from "./LoanCard";

function Loans() {
  return (
    <div className=" p-10 bg-neutral-900">
      <div className="my-2.5 p-4 rounded-xl bg-black ">
        <h1 className=" text-4xl my-10 ml-10 text-white font-montserrat font-extrabold
        ">Live Loans</h1>
        <div className="grid grid-cols-1 place-items-center gap-y-3 w-11/12">
          <LoanCard />
          <LoanCard />
          <LoanCard />
          <LoanCard />
          <LoanCard />
        </div>
      </div>
    </div>
  );
}

export default Loans;
