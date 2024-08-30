import { useEffect, useState } from "react";
import Shape from "./Shape";
import Chart from "./Chart";
import "./App.css";

const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

const CHART_DATA = [
  { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
  { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
  { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
  { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
  { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
  {
    id: "dep-6",
    name: "Human Resourcing",
    ticketCount: 35,
    colour: "#1D1E33"
  },
  { id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" }
];

function App() {
  const [showChart, setShowChart] = useState(true)

return <main className="container">
  <button 
  onClick={() => setShowChart(prev => !prev)}
  >Toggle
  </button>
  {showChart ? <Chart  data={CHART_DATA} /> : null}
  {/* <Shape data={BOX_DATA}/> */}
  </main>
}

export default App;
