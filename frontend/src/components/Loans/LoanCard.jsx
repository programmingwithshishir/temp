import React from "react";

function LoanCard() {
  return (
    <div className=" bg-neutral-950 text-white rounded-2xl p-4">
      <div className="my-2 grid grid-cols-4">
        <h1 className=" col-span-2">Roshan Anand</h1>
        <h2 className=" text-gray-400">
          Installment: <span className=" text-white">Monthly</span>
        </h2>
        <span className="ml-9 pl-2 size-5.5 bg-blue-500 rounded-full text-white">{">"}</span>
      </div>
      <div className=" grid grid-cols-3">
        <div>
          <h4 className=" text-gray-400 ">Loan amount</h4>
          <h4>₹ 25000</h4>
        </div>
        <div>
          <h4 className=" text-gray-400 ">Tenure</h4>
          <h4>{"9 Month(s)"}</h4>
        </div>
        <div>
          <h4 className=" text-gray-400 ">Interest rate</h4>
          <h4>40.5%</h4>
        </div>
      </div>
    </div>
  );
}

export default LoanCard;
