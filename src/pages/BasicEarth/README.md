# BasicEarth 组件文档

## 组件概述

BasicEarth 是一个基于 Cesium 的基础地球可视化组件，用于展示全球视图与城市标注。

## 核心功能

### 1. 相机定位
```javascript
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(116.397428, 39.90923, 1000),
  duration: 2,
});
```
- 相机平滑飞行到北京位置
- 高度：1000 米
- 动画时长：2 秒
- 目标位置：北京市中心（116.397428°E, 39.90923°N）

### 2. 城市实体标注
```javascript
viewer.entities.add({
  name: "北京",
  position: Cesium.Cartesian3.fromDegrees(116.397428, 39.90923, 100),
  point: {
    pixelSize: 10,
    color: Cesium.Color.RED,
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 2,
  },
  label: {
    text: "北京",
    font: "14pt sans-serif",
    fillColor: Cesium.Color.WHITE,
    outlineColor: Cesium.Color.BLACK,
    outlineWidth: 2,
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    pixelOffset: new Cesium.Cartesian2(0, -20),
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
  },
});
```
- 添加北京城市标记
- 红色圆点，白色轮廓
- 文字标签显示城市名称
- 标签位置在标记点上方

## 技术实现

### 依赖组件
- `CesiumViewer`: 自定义 Cesium 视图器组件，接收 `setup` 回调函数

### 关键 Cesium API
- `Cartesian3.fromDegrees()`: 将经纬度转换为笛卡尔坐标
- `viewer.camera.flyTo()`: 相机平滑飞行动画
- `viewer.entities.add()`: 添加实体到场景
- `LabelStyle.FILL_AND_OUTLINE`: 文字标签填充加轮廓样式
- `VerticalOrigin.BOTTOM`: 标签垂直方向对齐方式

## 使用方式

```jsx
import BasicEarth from './BasicEarth';

function App() {
  return <BasicEarth />;
}
```

## 注意事项

1. 相机位置和高度可以根据需要调整
2. 可以添加更多城市实体标注
3. 标记点和标签样式可自定义修改
