import { LineChart } from "@mui/x-charts/LineChart";
import { FaChartLine } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
// import { MdTrendingUp } from "react-icons/md";
import { RiLineChartLine } from "react-icons/ri";
import "./DashBoardPage.css";
import SideTable from "../SideTable/SideTable";
import { FaClock } from "react-icons/fa";
import { FiDroplet } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { LiaHandHoldingSolid } from "react-icons/lia";

const DashBoardPage = () => {
  return (
    <div className="dashboard-container">
      <SideTable />
      <div className="dashboard-section">
        <div className="dashboard-header-container">
          <h1 className="main-text">Hi,Kiran</h1>
        </div>
        <div className="middle-portion">
          <div className="header">
            <div className="equity">
              <FaClock className="react-icon" /> Equity
            </div>
            <div className="commodity-container">
              <FiDroplet className="react-icons" />
              <div className="commodity"> Commodity</div>
            </div>
          </div>
          <div className="equity-commodity-container">
            <div className="equity-table">
              <div className="margin-available-container">
                <div className="num-text">450.4</div>
                <p>margin available</p>
              </div>
              <div className="margin-available-con">
                <p>
                  Margins Used <span>0</span>
                </p>
                <p>
                  opening balance<span>450.10</span>
                </p>
                <div className="view-statement">
                  <FaEye className="react-icon" />
                  view-statement
                </div>
              </div>
            </div>
            <div className="equity-table">
              <div className="margin-available-container">
                <div className="zero-text">0</div>
                <p>margin available</p>
              </div>
              <div className="final-container">
                <p>
                  margin used<span>0</span>
                </p>
                <p>
                  opening balance<span>450.10</span>
                </p>
                <div className="view-statement">
                  <FaEye className="react-icon" />
                  view-statement
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-page-container">
          <div className="margin">
            <div className="holding">
              <LiaHandHoldingSolid style={{ fontSize: "25px" }} /> Holdings(26)
            </div>
          </div>
          <div className="portion-container">
            <div className="margin-conatiner">
              <h1 className="portion-head">
                54.95K<sub>+13.85%</sub>
              </h1>
              <div className="pl">
                <p className="portion-text">P&L</p>
              </div>
            </div>
            <div className="values">
              <p className="values-text">
                Current Value<span>4.52L</span>
              </p>
              <p className="values-text">
                Investment<span>3.97L</span>
              </p>
            </div>
          </div>
        </div>
        <div className="market-container">
          <p className="market-text">
            {" "}
            <RiLineChartLine /> Market Overview
          </p>
        </div>
        <LineChart
          className="linechart"
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={300}
        />
      </div>
      <div></div>
    </div>
  );
};

export default DashBoardPage;
