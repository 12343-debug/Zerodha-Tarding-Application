import "./SideTable.css";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import TablePage from "../TablePage/TablePage";

const SideTable = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="search-bar">
          <div className="search-icon-container">
            <CiSearch className="search-icon" />
          </div>
          <input
            type="text"
            className="input"
            placeholder="Search eg: infy bse, nifty fut, index fund"
          />
          <button className="button-btn">Ctr+k</button>
          <IoFilterOutline className="search-icon" />
        </div>
        <div className="watchlist-container">
          <p className="watchlist-text">Watchlist 1</p>
          <p className="group-text">+ new group</p>
        </div>

        <div>
          <TablePage />
        </div>
      </div>
    </>
  );
};

export default SideTable;
