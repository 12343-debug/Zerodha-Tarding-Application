import { useState } from "react";
import SideTable from "../SideTable/SideTable";
import { LuDownload } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

import "./HoldingsPage.css";
import { CiSearch } from "react-icons/ci";

const dataList = [
  {
    id: 1,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 2,
    instrument: "ADANIGREEN",
    quantity: 21,
    AvgCost: "3,197.4",
    ltp: "1,648.15",
    invested: "55,956.56",
    CurrentVal: "52,967.90",
    proLoss: "8,012.45",
    netcharge: "+18.45%",
    dayChg: "+11.12%",
  },
  {
    id: 3,
    instrument: "ADANIPORTS",
    quantity: 8,
    AvgCost: "8,142.78",
    ltp: "4,152.10",
    invested: "74,956.75",
    CurrentVal: "12,967.00",
    proLoss: "8,010.47",
    netcharge: "+25.12%",
    dayChg: "+2.41%",
  },
  {
    id: 4,
    instrument: "ADANIPOWER",
    quantity: 14,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "8,010.00",
    netcharge: "+18.45%",
    dayChg: "+4.10%",
  },
  {
    id: 5,
    instrument: "AURIONPRO",
    quantity: 1,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 6,
    instrument: "BAJAJELEC",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 7,
    instrument: "BFUTILITIE",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 8,
    instrument: "CRISIL",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 9,
    instrument: "DRREDDY",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 10,
    instrument: "GPIL",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 11,
    instrument: "GREENPOWER",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 12,
    instrument: "HAPPSTMNDS",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 13,
    instrument: "HAVELLS",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 14,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 15,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 16,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
  {
    id: 17,
    instrument: "ADANIENT",
    quantity: 20,
    AvgCost: "2,197.84",
    ltp: "2,648.35",
    invested: "43,956.75",
    CurrentVal: "52,967.00",
    proLoss: "9,010.25",
    netcharge: "+20.50%",
    dayChg: "+2.41%",
  },
];

const Holdings = () => {
  const [searchInput, setSearchInput] = useState("");
  const [initialStockList, setInitialStockList] = useState(dataList);
  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const searchResult = initialStockList.filter((eachItem) => {
    return eachItem.instrument
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  return (
    <div className="main-container">
      <SideTable dataList={dataList} />
      <div className="holdings-table-container">
        <div className="header-container">
          <div className="data-container">
            <h4 className="heading">Holdings(26)</h4>
            <select className="selection-box">
              <option>All equity</option>
              <option>Profity</option>
            </select>
          </div>
          <div className="search-links-container">
            <div className="search">
              <div className="search-icon-container">
                <CiSearch
                  className="search-icon"
                  style={{ fontSize: "14px" }}
                />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={onChangeSearchInput}
                className="search-input"
                placeholder="Search"
              />
            </div>
            <ul className="list-container">
              <li>
                {" "}
                <MdFamilyRestroom /> Family
              </li>
              <li>
                {" "}
                <FaEye /> Analytics
              </li>
              <li>
                {" "}
                <LuDownload /> Download
              </li>
            </ul>
          </div>
        </div>
        <div className="total-money">
          <div className="money-container">
            <p className="text">Total Investment</p>
            <p className="number">
              3,96,851<sub>.20</sub>
            </p>
          </div>
          <div className="money-container">
            <p className="text">Current Value</p>
            <p className="number">
              4,51,805<sub>.75</sub>
            </p>
          </div>
          <div className="money-container">
            <p className="text">Days P&L</p>
            <p className="number num">
              3,230
              <sub>
                .35 <button className="button-btn">+0.72%</button>
              </sub>
            </p>
          </div>
          <div className="money-container">
            <p className="text">Total P&L</p>
            <p className="number num">
              54,954
              <sub>
                .55 <button className="button">+13.85%</button>
              </sub>
            </p>
          </div>
        </div>
        <table className="holdings-table-containerr">
          <thead>
            <tr className="holdings-table-row">
              <th className="first">Instrument</th>
              <th>Quantity</th>
              <th>Avg.cost</th>
              <th className="second">LTP</th>
              <th>Invested</th>
              <th>Cur.val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody className="data-body">
            {searchResult.map((data) => (
              <tr key={data.id}>
                <td className="first">{data.instrument}</td>
                <td className="quantity">{data.quantity}</td>
                <td>{data.AvgCost}</td>
                <td className="second">{data.ltp}</td>
                <td>{data.invested}</td>
                <td>{data.CurrentVal}</td>
                <td className="green-color">{data.proLoss}</td>
                <td className="green-color">{data.netcharge}</td>
                <td className="green">{data.dayChg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holdings;
