import "./App.css";

import {
  FcHome,
  FcAutomotive,
  FcCollaboration,
  FcShop,
  FcGraduationCap,
} from "react-icons/fc";

import CustomerInput from "./Components/CustomerInput";
import { useEffect, useMemo, useState } from "react";
import PieChart from "./Components/PieChart";
import Navbar from "./Components/Navbar";
// import { PieChart } from "@mui/icons-material";

function App() {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(3);
  const [emi, setEmi] = useState("");
  const [intrest, setIntrest] = useState(principal * loanTenure * interestRate);

  const typesOfLoan = [
    {
      name: "Home Loan",
      image: <FcHome />,
      id: "1",
      min: "1000000",
      max: "5000000",
    },
    {
      name: "Vehicle Loan",
      image: <FcAutomotive />,
      id: "2",
      min: "100000",
      max: "750000",
    },
    {
      name: "Busieness Loan",
      image: <FcShop />,
      id: "3",
      min: "50000",
      max: "350000",
    },
    {
      name: "Family Loan",
      image: <FcCollaboration />,
      id: "4",
      min: "50000",
      max: "150000",
    },
    {
      name: "Student Loan",
      image: <FcGraduationCap />,
      id: "5",
      min: "50000",
      max: "300000",
    },
  ];

  // useMemo
  useEffect(() => {
    let emi = calculateEmi();
    function IntrestCal() {
      // const calculatorIntrest = (principal * loanTenure * interestRate) / 100;
      if (emi) {
        let calculatedInterested = emi * loanTenure * 12 - principal;
        setIntrest(calculatedInterested);
      }
    }
    IntrestCal();
  }, [principal, loanTenure, interestRate]);

  const calculateEmi = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTenure) * 12;

    if (p > 0 && r > 0 && n > 0) {
      const emiAmount = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiAmount.toFixed(2));
      return emiAmount;
    } else {
      setEmi("");
      return null;
    }
  };

  let typeOfLoanMemoized = useMemo(() => {
    return typesOfLoan;
  }, []);

  // const costomerInputArray = [{title:"Loan Amount",titleValue}]

  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      <Navbar typesOfLoan={typeOfLoanMemoized} />
      <div className="container">
        <div className="container-input">
          <CustomerInput
            title="Loan Amount"
            titleValue="rupees"
            value={principal}
            change={setPrincipal}
            min="100000"
            max="1000000"
          />
          <CustomerInput
            title="Rate of Interest"
            titleValue="percentage"
            value={interestRate}
            change={setInterestRate}
            min="10"
            max="30"
          />
          <CustomerInput
            title="Loan Tennure"
            titleValue="year"
            value={loanTenure}
            change={setLoanTenure}
            min="3"
            max="10"
          />
        </div>
        <div className="pie-chart">
          <PieChart PA={principal} I={intrest} />
        </div>
      </div>
      <h2>
        Emi : <span>{emi}</span>
      </h2>
    </div>
  );
}

export default App;
