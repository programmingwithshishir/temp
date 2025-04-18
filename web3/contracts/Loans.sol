// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Loans {
    struct LenderShare {
        address lender;
        uint8 percentage;
    }
    struct LoanAgreement {
        LenderShare[] lenders;
        address borrower;
        uint256 principal;
        uint256 tenure;
        uint256 sanctionedDate;
        uint8 interestRate;
        int8 agreedPenalty;
    }

    mapping(uint256 => LoanAgreement) public loanAgreements;
}
