import React from "react";
import LoanCard from "../Loans/LoanCard";
import InvestmentCard from "./InvestmentCard";

function Portfolio() {
  return (
    <div className=" bg-neutral-950 p-10">
      <div className=" bg-black mt-8 p-10 rounded-xl">
        <div className=" ">
          <h1
            className=" text-4xl my-10 ml-10 text-white font-montserrat font-extrabold
        "
          >
            Your investments
          </h1>
          <div className=" grid grid-cols-1 gap-y-5">
            <InvestmentCard />
            <InvestmentCard />
            <InvestmentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
