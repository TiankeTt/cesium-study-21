import CesiumViewer from '../components/CesiumViewer'

export default function ModelLoading() {
  const setup = (viewer, Cesium) => {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-74.006, 40.7128, 1000),
      orientation: {
        heading: Cesium.Math.toRadians(20),
        pitch: Cesium.Math.toRadians(-20),
        roll: 0
      },
      duration: 2
    })

    viewer.entities.add({
      name: '3D 建筑示例',
      position: Cesium.Cartesian3.fromDegrees(-74.006, 40.7128, 0),
      box: {
        dimensions: new Cesium.Cartesian3(100, 100, 200),
        material: Cesium.Color.BLUE.withAlpha(0.6),
        outline: true,
        outlineColor: Cesium.Color.WHITE
      }
    })
  }

  return <CesiumViewer setup={setup} />
}
