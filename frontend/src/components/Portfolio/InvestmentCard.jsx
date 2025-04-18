import React from "react";
import { Collapse, ConfigProvider } from "antd";
import LoanCard from "../Loans/LoanCard";
import { IoIosArrowDown } from "react-icons/io";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: (
      <span className=" text-white font-semibold font-montserrat tracking-wider">
        Loan
      </span>
    ),
    children: (
      <div className="grid grid-cols-2 font-montserrat text-[12px] font-semibold tracking-wide">
        <div className="text-gray-200 flex flex-col gap-y-0.5">
          <span>Type</span>
          <span>Loan ID</span>
          <span>Amount</span>
          <span>Tenure</span>
          <span>Repayment Frequency</span>
          <span>Annualized Interest Rate(APR)</span>
          <span>Collection Charges</span>
          <span>Facilitation Fee</span>
          <span>Recovery Fee</span>
        </div>
        <div className="text-gray-400 place-items-end flex flex-col gap-y-0.5">
          <span>Personal Loan</span>
          <span>LOA-62XAHATP</span>
          <span>25000.0</span>
          <span>9 Month(s)</span>
          <span>Monthly</span>
          <span>46.20%</span>
          <span>0.00%</span>
          <span>3.30%</span>
          <span>96.70%</span>
        </div>
      </div>
    ),
    showArrow: false,
  },
  {
    key: "2",
    label: (
      <span className=" text-white font-semibold font-montserrat tracking-wider">
        Personal
      </span>
    ),
    children: (
      <div className="grid grid-cols-2 font-montserrat text-[12px] font-semibold tracking-wide">
        <div className="text-gray-200 flex flex-col gap-y-0.5">
          <span>Name</span>
          <span>Age</span>
          <span>Gender</span>
          <span>City</span>
        </div>
        <div className="text-gray-400 place-items-end flex flex-col gap-y-0.5">
          <span>Roshan Anand</span>
          <span>21</span>
          <span>Male</span>
          <span>Mangalore</span>
        </div>
      </div>
    ),
    showArrow: false,
  },
  {
    key: "3",
    label: (
      <span className=" text-white font-semibold font-montserrat tracking-wider">
        Professional
      </span>
    ),
    children: (
      <div className="grid grid-cols-2 font-montserrat text-[12px] font-semibold tracking-wide">
        <div className="text-gray-200 flex flex-col gap-y-0.5">
          <span>Borrower type</span>
          <span>Income</span>
        </div>
        <div className="text-gray-400 place-items-end flex flex-col gap-y-0.5">
          <span>Salaried</span>
          <span>38900.00</span>
        </div>
      </div>
    ),
    showArrow: false,
  },
  {
    key: "4",
    label: (
      <span className=" text-white font-semibold font-montserrat tracking-wider">
        Agreement
      </span>
    ),
    children: (
      <div className="grid grid-cols-2 font-montserrat text-[12px] font-semibold tracking-wide">
        <div className="text-gray-200 flex flex-col gap-y-0.5">
          <span>Agreement</span>
        </div>
        <div className="text-gray-400 place-items-end flex flex-col gap-y-0.5">
          {/* open Agreement pdf file on clicking the below button */}
          <button className=" text-blue-400 font-montserrat font-semibold">
            View
          </button>
        </div>
      </div>
    ),
    showArrow: false,
  },
];

function InvestmentCard() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className=" bg-neutral-950 text-white rounded-2xl px-10 py-5">
      <div className="my-6 grid grid-cols-4">
        <h1 className=" col-span-2">Roshan Anand</h1>
        <h2 className=" text-gray-400">
          Installment: <span className=" text-white">Monthly</span>
        </h2>
      </div>
      <div className="my-6 grid grid-cols-3">
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
      <ConfigProvider
        theme={{
          token: {
            colorBorder: "#212121",
          },
          components: {
            Collapse: {
              headerBg: "#000",
              contentBg: "#0a0a0a",
            },
          },
        }}
      >
        <div className=" my-6">
          <Collapse
            items={items}
            onChange={onChange}
          />
        </div>
      </ConfigProvider>
    </div>
  );
}

export default InvestmentCard;
