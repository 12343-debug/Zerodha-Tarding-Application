import SideTable from "../SideTable/SideTable";

import "./PositionsPage.css";
import { useNavigate } from "react-router-dom";

const PositionsPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="position-container">
      <SideTable />
      <div className="position-section">
        <p>You don't have any positions yet</p>
        <button onClick={handleGetStarted}>Get Started</button>
        <div className="analysis">Analysis</div>
      </div>
    </div>
  );
};

export default PositionsPage;
