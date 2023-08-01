import React, { useState } from "react";
import MonthlyData from "./MonthlyData";
import { BsArrowDownSquare, BsArrowUpSquare } from "react-icons/bs";

export default function Amortization({ tennure, emi, principal, rate }) {
  const [show, setShow] = useState([]);
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  let tennureArray = [];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let i = 0; i <= tennure; i++) {
    tennureArray.push(Number.parseInt(currentYear));
    currentYear = Number.parseInt(currentYear + 1);
  }

  function handleYear(event) {
    // console.log(show);
    if (show.includes(Number.parseInt(event.target.id))) {
      //   console.log("in");
      let temp = show.filter((ele) => ele != event.target.id);
      //   console.log(temp);
      setShow([...temp]);
      console.log(true);
    } else {
      setShow([...show, Number.parseInt(event.target.id)]);
    }
  }

  const amortizationData = {};

  tennureArray.forEach((ele) => {
    amortizationData[`${ele}`] = [];
  });

  let first = true;
  let month = currentDate.getMonth() + 1;

  let rateOfInterestPerMonth = rate / (12 * 100);

  let balanceAmount = principal;

  for (let i in amortizationData) {
    if (first) {
      for (let j = month; j < months.length; j++) {
        amortizationData[i] = [
          ...amortizationData[i],
          {
            month: months[j],
            totalEmi: Math.ceil(emi),
            principal: Math.floor(emi - rateOfInterestPerMonth * balanceAmount),
            interest: Math.floor(rateOfInterestPerMonth * balanceAmount),
            balance: Math.ceil(
              balanceAmount - (emi - rateOfInterestPerMonth * balanceAmount)
            ),
          },
        ];
        balanceAmount = Math.ceil(
          balanceAmount - (emi - rateOfInterestPerMonth * balanceAmount)
        );
      }
      first = false;
    } else {
      if (balanceAmount > 0) {
        for (let j = 0; j < months.length; j++) {
          if (balanceAmount > 0) {
            amortizationData[i] = [
              ...amortizationData[i],
              {
                month: months[j],
                totalEmi: Math.ceil(emi),
                principal: Math.floor(
                  emi - rateOfInterestPerMonth * balanceAmount
                ),
                interest: Math.floor(rateOfInterestPerMonth * balanceAmount),
                balance: Math.ceil(
                  balanceAmount - (emi - rateOfInterestPerMonth * balanceAmount)
                ),
              },
            ];
            balanceAmount = Math.ceil(
              balanceAmount - (emi - rateOfInterestPerMonth * balanceAmount)
            );
          }
        }
      }
    }
  }

  return (
    <div className="amortization-container">
      <h4>Your Amortization Details (Yearly/Monthly)</h4>
      {tennureArray.map((ele, i) => {
        return (
          <div key={i} className="year-container">
            <div className="name-arrow">
              <h3 onClick={handleYear} id={ele}>
                {ele}
                <span>
                  {!show.includes(Number.parseInt(ele)) && (
                    <BsArrowDownSquare />
                  )}
                  {show.includes(Number.parseInt(ele)) && <BsArrowUpSquare />}
                </span>
              </h3>
            </div>
            {show.includes(Number.parseInt(ele)) && (
              <MonthlyData dataObj={amortizationData[ele]} />
            )}
          </div>
        );
      })}
    </div>
  );
}
