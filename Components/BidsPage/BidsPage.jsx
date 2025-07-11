import React from "react";
import SideTable from "../SideTable/SideTable";
import { CiSearch } from "react-icons/ci";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import "./BidsPage.css";

const fundsList = [
  {
    id: 1,
    name: "IGCL",
    company: "Indogulf Cropsciences",
    date: "26th-30th Jun",
    price: "105-111",
    minAmount: "14985",
    buttons: "Apply",
  },

  {
    id: 2,
    name: "PROFIX",
    company: "Pro FX Tech",
    date: "26th-30th Jun",
    price: "82-87",
    minAmount: "13298",
    buttons: "Apply",
  },

  {
    id: 3,
    name: "IGCL",
    company: "Ace Alpha Tech",
    date: "26th-30th Jun",
    price: "65-69",
    minAmount: "13800",
    buttons: "Apply",
  },

  {
    id: 4,
    name: "VALINDIA",
    company: "Valencia India",
    date: "26th-30th Jun",
    price: "95-110",
    minAmount: "13200",
    buttons: "Apply",
  },

  {
    id: 5,
    name: "MMEL",
    company: "Moving Media Entertainment",
    date: "26th-30th Jun",
    price: "66-70",
    minAmount: "14000",
    buttons: "Apply",
  },

  {
    id: 6,
    name: "ADCOUNTY",
    company: "Adcounty Media India",
    date: "27th-30th 1st Jul",
    price: "80-85",
    minAmount: "14200",
    buttons: "Apply",
  },

  {
    id: 7,
    name: "NEETUYOSHI",
    company: "Neetu Yoshi",
    date: "26th-30th Jun",
    price: "65-69",
    minAmount: "13800",
    buttons: "Apply",
  },

  {
    id: 8,
    name: "OSWALPUMPS",
    company: "Oswal Pumps",
    date: "26th-30th Jun",
    price: "95-110",
    minAmount: "13200",
    buttons: "Apply",
  },

  {
    id: 9,
    name: "ARISHINFRA",
    company: "Arisinfra Solutions",
    date: "27th Jun-20th JuL",
    price: "66-70",
    minAmount: "14000",
    buttons: "CLOSED",
  },

  {
    id: 10,
    name: "GLOBECIVIL",
    company: "Globe Civi; Projects",
    date: "25th-19st Jul",
    price: "80-85",
    minAmount: "14200",
    buttons: "CLOSED",
  },

  {
    id: 11,
    name: "ELLEN",
    company: "Valencia India",
    date: "24th-36th Jun",
    price: "75-85",
    minAmount: "14020",
    buttons: "CLOSED",
  },

  {
    id: 12,
    name: "OSWALPUMPS",
    company: "Por FX Tech",
    date: "26th-30th Jun",
    price: "95-100",
    minAmount: "11500",
    buttons: "CLOSED",
  },
];

const BidsPage = () => {
  return (
    <div className="bids-container">
      <SideTable />
      <div className="bids-section">
        <div className="page-headerr-container">
          <div className="holdings-container">
            <div className="executed-orders">IPOs(7)</div>
          </div>
          <div className="search-link-container">
            <div className="searching-bar">
              <div className="search-icon-container"></div>
              <CiSearch className="search-icons" />
              <input
                type="text"
                className="search-input-element"
                placeholder="search"
              />
            </div>
          </div>
        </div>
        <TableContainer component={Paper} style={{ background: "transparent" }}>
          <Table sx={{ minWidth: 650 }} aria-label="sumple-table">
            <TableHead>
              <TableRow className="whole-table">
                <TableCell align="left" style={{ color: "#d7dfe9" }}>
                  Instument
                </TableCell>
                <TableCell align="left" style={{ color: "#d7dfe9" }}>
                  Date
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: "#d7dfe9" }}
                  className="price"
                >
                  Price
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: "#d7dfe9" }}
                  padding-left="44px"
                >
                  Min. amount($)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fundsList.map((fund) => {
                return (
                  <TableRow>
                    <TableCell
                      align="left"
                      component="th"
                      scope="row"
                      style={{ color: "#fff" }}
                    >
                      {fund.name}
                      <br />
                      {fund.company}
                    </TableCell>
                    <TableCell
                      align="left"
                      component="th"
                      scope="row"
                      style={{ color: "#fff" }}
                    >
                      {fund.date}
                    </TableCell>
                    <TableCell
                      align="left"
                      component="th"
                      scope="row"
                      className="price"
                      style={{ color: "#fff" }}
                    >
                      {fund.price}
                    </TableCell>
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      style={{ color: "#fff" }}
                    >
                      {fund.minAmount}
                    </TableCell>
                    <button className="apply-cancel-btn">{fund.buttons}</button>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BidsPage;
