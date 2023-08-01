import React from "react";

export default function MonthlyData({ dataObj }) {
  //   console.log(dataObj);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Principal Paid</th>
            <th>Interest Charged</th>
            <th>Emi</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {dataObj.map((obj, i) => {
            return (
              <tr key={i}>
                <td>{obj.month}</td>
                <td>{obj.principal}</td>
                <td>{obj.interest}</td>
                <td>{obj.totalEmi}</td>
                <td>{obj.balance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
