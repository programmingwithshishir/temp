import React from "react";

function Home() {
  return (
    <div>
      <div className="p-10 bg-neutral-900">
        <div className="bg-black grid grid-cols-4 place-items-center rounded-xl p-10">
          <div className=" col-span-2">
            <h1 className=" text-blue-500 font-extrabold track-wide text-5xl font-montserrat">
              Lend to high-quality, creditworthy borrowers with P2P Lending in
              India.
            </h1>
            <p className="font-montserrat font-normal text-gray-400 tracking-wide my-8 text-lg">
              Lenders at LenDenClub have historically earned an XIRR 11.28% p.a.
              Don&apos;t miss out. Diversify your portfolio with the largest
              peer to peer lending platform in India today & earn daily or
              monthly from repayments.
            </p>
          </div>
          <div className=" col-span-2">
            <img
              src="https://www.lendenclub.com/wp-content/uploads/2025/03/p2p-lending-2-1142x1536.webp"
              alt=""
              className="w-80 h-[440px]"
            />
          </div>
          <div className=" w-full">
            <button className=" text-black bg-white w-[80%] p-4 rounded-xl font-semibold text-lg">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
