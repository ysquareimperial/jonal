import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card, Col, Row } from "reactstrap";
// import DashboardPieChart from "./charts/DashboardPieChart";
import Chart from "./charts/Chart";
import AppNavigation from "./routes/AppNavigation";

function App() {
  const [count, setCount] = useState(0);
  const smallCards = [{}];
  return (
    <div className="body_">
     <AppNavigation/>
    </div>
  );
}

export default App;
