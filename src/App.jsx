import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import BasicEarth from './pages/BasicEarth'
import TerrainDemo from './pages/TerrainDemo'
import ModelLoading from './pages/ModelLoading'
import SatelliteLayer from './pages/SatelliteLayer'
import DataVisualization from './pages/DataVisualization'
import './styles/index.css'

const works = [
  { path: '/basic-earth', title: '作品 1 · 基础地球', description: '城市标注与全球视图' },
  { path: '/terrain', title: '作品 2 · 地形展示', description: '珠峰地形与高程标注' },
  { path: '/model', title: '作品 3 · 模型加载', description: '3D 建筑与实体渲染' },
  { path: '/satellite', title: '作品 4 · 卫星图层', description: 'Ion 卫星影像叠加' },
  { path: '/data-viz', title: '作品 5 · 数据可视化', description: '全球随机数据点分布' }
]

function App() {
  return (
    <HashRouter>
      <MenuBar works={works} />
      <div className="content-container">
        <Routes>
          <Route path="/basic-earth" element={<BasicEarth />} />
          <Route path="/terrain" element={<TerrainDemo />} />
          <Route path="/model" element={<ModelLoading />} />
          <Route path="/satellite" element={<SatelliteLayer />} />
          <Route path="/data-viz" element={<DataVisualization />} />
          <Route path="*" element={<Navigate to="/basic-earth" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
