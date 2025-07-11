import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import DashBoardPage from "./Components/DashBoardPage/DashBoardPage";
import NavBar from "./Components/NavBar/NavBar";
import OrdersPage from "./Components/OrdersPage/OrdersPage";
import HoldingsPage from "./Components/HoldingsPage/HoldingsPage";
import PositionsPage from "./Components/PositionsPage/PositionsPage";
import BidsPage from "./Components/BidsPage/BidsPage";
import FundsPage from "./Components/FundsPage/FundsPage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/holdings" element={<HoldingsPage />} />
        <Route path="/positions" element={<PositionsPage />} />
        <Route path="/bids" element={<BidsPage />} />
        <Route path="/funds" element={<FundsPage />} />
      </Routes>
    </>
  );
}

export default App;
