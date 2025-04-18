import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LoansModule = buildModule("LoansModule", (m) => {
  const loans = m.contract("Loans", []);

  return { loans };
});

export default LoansModule;
