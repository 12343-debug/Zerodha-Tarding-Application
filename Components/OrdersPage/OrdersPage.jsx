import React from "react";
import "./OrdersPage.css";
import { CiSearch } from "react-icons/ci";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SideTable from "../SideTable/SideTable";

import { MdContactPage } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";





const OrdersPage = () => {
  return (
    <div className="orders-container">
      <SideTable />
      <div className="order-section">
        <div className="page-header-container">
          <div className="holdings-container">
            <div className="executed-orders">Executed order(1)</div>
          </div>
          <div className="search-link-container">
            <div className="search-bar">
              <div className="search-icon-container">
                <CiSearch className="search-icons" />
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
            </div>
            <ul className="list-container">
                <MdContactPage className="icon" style={{fontSize:'15px'}}/>
              <li className="list" >  Contact me</li>
              <FaEye className="icon" style={{fontSize:'15px'}}/>
              <li className="list" >  View history</li>
              <LuDownload className="icon" style={{fontSize:'15px'}}/>
              <li className="list" style={{fontSize:'15px'}}>  Download</li>
            </ul>
          </div>
        </div>

        <TableContainer component={Paper} style={{ background: "transparent" }}>
            <Table  sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" style={{ color: "#d7dfe9" }}>
                            Time
                        </TableCell>
                         <TableCell align="left" style={{ color: "#d7dfe9" }}>
                            Type
                        </TableCell>
                         <TableCell align="left" style={{ color: "#d7dfe9" }}>
                            Instrument
                        </TableCell>
                         <TableCell align="left" style={{ color: "#d7dfe9" }}>
                            Product
                        </TableCell>
                         <TableCell align="left" style={{ color: "#d7dfe9" }}>
                            Qt1.
                        </TableCell>
                         <TableCell align="left" style={{ color: "#d7dfe9" }} className="right-border">
                            Avg. price
                        </TableCell>
                         <TableCell align="left" style={{ color: "#d7dfe9" }}>
                            Status
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left" style={{ color: "#fff" }}>
                            12:24:27
                        </TableCell >
                        <TableCell align="left" style={{ color: "#fff" }}>
                            <button className="buy-button btn">BUY</button>
                        </TableCell>
                        <TableCell align="left" style={{ color: "#fff" }}>
                           MAXHEALTH <span>nse</span>
                        </TableCell>
                        <TableCell align="left" style={{ color: "#fff" }}>
                            CNC
                        </TableCell>
                        <TableCell align="left" style={{ color: "#fff" }}>
                            0/1
                        </TableCell>
                        <TableCell align="left" style={{ color: "#fff" }} className="right-border">
                            1275.10
                        </TableCell>
                        <TableCell>
                           <button className="cancel-button btn"> CANCELED AMD</button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default OrdersPage;
