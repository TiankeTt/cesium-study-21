import CesiumViewer from '../components/CesiumViewer'

export default function DataVisualization() {
  const setup = (viewer, Cesium) => {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(0, 0, 20000000),
      duration: 2
    })

    for (let i = 0; i < 100; i++) {
      const longitude = Math.random() * 360 - 180
      const latitude = Math.random() * 180 - 90
      const height = Math.random() * 100000

      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
        point: {
          pixelSize: 5 + Math.random() * 10,
          color: Cesium.Color.fromRandom({ alpha: 0.7 }),
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 1
        }
      })
    }
  }

  return <CesiumViewer setup={setup} />
}
