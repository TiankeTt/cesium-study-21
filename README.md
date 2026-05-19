# Cesium 作品展示

基于 Vite + React + CesiumJS 的三维可视化展示平台。

## 功能特性

- 左上角固定高度菜单栏
- 点击菜单项切换不同作品视图
- 内置 5 个示例作品
- 支持添加更多作品

## 项目结构

```
src/
├── components/
│   └── CesiumViewer.jsx  # Cesium 视图组件
├── styles/
│   └── index.css         # 全局样式
├── App.jsx               # 主应用组件
└── main.jsx              # 应用入口
```

## 如何添加新作品

1. 在 `App.jsx` 中的 `pages` 数组添加新页面信息
2. 在 `CesiumViewer.jsx` 中添加对应的 `setupPageX` 函数
3. 在 `useEffect` 的 switch 语句中添加新的 case

## 启动项目

```bash
npm run dev
```

## 构建项目

```bash
npm run build
```
