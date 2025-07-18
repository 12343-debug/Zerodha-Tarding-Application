import React from "react";
import "./TablePage.css";

const TablePage = () => {
  const stocks = [
    {
      id: 1,
      name: "REDINGTON",
      quantity: null,
      value: 26.2,
      percentage: 8.82,
      totalValue: 323.1,
    },
    {
      id: 2,
      name: "CRSIL",
      quantity: 3,
      value: 102.5,
      percentage: 1.72,
      totalValue: 6049.5,
    },
    {
      id: 3,
      name: "MUTHOOTFIN",
      quantity: 30,
      value: -3.5,
      percentage: -0.14,
      totalValue: 2579.7,
    },
    {
      id: 4,
      name: "KIMS",
      quantity: 15,
      value: -12.7,
      percentage: -1.88,
      totalValue: 664.05,
    },
    {
      id: 5,
      name: "APPOLOHOSP",
      quantity: null,
      value: 208.5,
      percentage: 2.94,
      totalValue: 7310.0,
    },
    {
      id: 6,
      name: "UNIHEALTH-SM",
      quantity: null,
      value: -1.1,
      percentage: 0.65,
      totalValue: 168.3,
    },
    {
      id: 7,
      name: "MAXHEALTH",
      quantity: 1,
      value: 8.6,
      percentage: 0.68,
      totalValue: 1275.1,
    },
  ];

  return (
    <table className="table-container">
      <thead>
        <tr>
          <th>Default(7)</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.quantity}</td>
            <td>{data.value}</td>
            <td>{data.percentage}</td>
            <td>{data.totalValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePage;
