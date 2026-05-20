import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import BasicEarth from "./pages/BasicEarth";
import "./styles/index.css";
import FlightTracker from "./pages/FlightTracker";

const works = [
  {
    path: "/flight-tracker",
    title: "飞行追踪",
    description: "飞行追踪",
    component: FlightTracker,
  },
  {
    path: "/basic-earth",
    title: "基础地球",
    description: "城市标注与全球视图",
    component: BasicEarth,
  },
];

function App() {
  return (
    <HashRouter>
      <MenuBar works={works} />
      <div className="content-container">
        <Routes>
          {works.map((work) => (
            <Route
              key={work.path}
              path={work.path}
              element={<work.component />}
            />
          ))}
          <Route path="*" element={<Navigate to={works[0].path} replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
