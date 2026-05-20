# FlightTracker 组件文档

## 组件概述

FlightTracker 是一个基于 Cesium 的航班追踪可视化组件，用于展示飞机在 3D 地图上的实时飞行轨迹。

## 核心功能

### 1. 3D 建筑物加载
```javascript
const osmBuildings = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(osmBuildings);
```
- 加载 OpenStreetMap 的 3D 建筑物数据
- 增强地图的真实感和空间感

### 2. 航班数据处理
- 使用硬编码的 JSON 数据包含经纬度和高度信息
- 每个数据点代表飞机在某一时刻的位置

### 3. 时间系统设置
```javascript
const timeStepInSeconds = 30;
const totalSeconds = timeStepInSeconds * (flightData.length - 1);
const start = Cesium.JulianDate.fromIso8601("2020-03-09T23:10:00Z");
const stop = Cesium.JulianDate.addSeconds(start, totalSeconds, new Cesium.JulianDate());
```
- 时间步长：30秒
- 开始时间：2020-03-09T23:10:00Z
- 播放速度：50倍速
- 自动开始播放

### 4. 位置采样
```javascript
const positionProperty = new Cesium.SampledPositionProperty();
```
- 创建采样位置属性
- 将每个数据点与时间关联
- 用于实现平滑的动画效果

### 5. 航点标记
```javascript
viewer.entities.add({
  description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
  position: position,
  point: { pixelSize: 10, color: Cesium.Color.RED },
});
```
- 为每个数据点添加红色标记点
- 显示具体位置信息

### 6. 飞机实体
- 初始使用绿色大点和路径线
- 加载 3D 飞机模型（资产 ID: 4799945）
- 自动根据速度计算朝向
- 相机自动追踪飞机

## 技术实现

### 依赖组件
- `CesiumViewer`: 自定义 Cesium 视图器组件，接收 `setup` 回调函数

### 关键 Cesium API
- `createOsmBuildingsAsync()`: 创建 OSM 建筑物
- `SampledPositionProperty`: 采样位置属性
- `JulianDate`: 儒略日期处理
- `VelocityOrientationProperty`: 速度朝向属性
- `IonResource.fromAssetId()`: 从 Cesium ion 加载资源

## 使用方式

```jsx
import FlightTracker from './FlightTracker';

function App() {
  return <FlightTracker />;
}
```

## 注意事项

1. 航班数据当前为硬编码，实际应用中应从 API 获取
2. 需要 Cesium ion 访问令牌以加载 3D 模型
3. 时间线功能已被注释（第25行），可根据需要启用
