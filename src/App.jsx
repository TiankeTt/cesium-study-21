import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import BasicEarth from "./pages/BasicEarth";
import TerrainDemo from "./pages/TerrainDemo";
import ModelLoading from "./pages/ModelLoading";
import SatelliteLayer from "./pages/SatelliteLayer";
import DataVisualization from "./pages/DataVisualization";
import "./styles/index.css";

const works = [
  {
    path: "/basic-earth",
    title: "基础地球",
    description: "城市标注与全球视图",
    component: BasicEarth,
  },
  { path: "/terrain", title: "地形展示", description: "珠峰地形与高程标注", component: TerrainDemo },
  { path: "/model", title: "模型加载", description: "3D 建筑与实体渲染", component: ModelLoading },
  { path: "/satellite", title: "卫星图层", description: "Ion 卫星影像叠加", component: SatelliteLayer },
  { path: "/data-viz", title: "数据可视化", description: "全球随机数据点分布", component: DataVisualization },
];

function App() {
  return (
    <HashRouter>
      <MenuBar works={works} />
      <div className="content-container">
        <Routes>
          {works.map(work => (
            <Route key={work.path} path={work.path} element={<work.component />} />
          ))}
          <Route path="*" element={<Navigate to={works[0].path} replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
