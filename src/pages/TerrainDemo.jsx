import CesiumViewer from '../components/CesiumViewer'

export default function TerrainDemo() {
  const setup = (viewer, Cesium) => {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(86.925, 27.988, 50000),
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-45),
        roll: 0
      },
      duration: 2
    })

    viewer.entities.add({
      name: '珠穆朗玛峰',
      position: Cesium.Cartesian3.fromDegrees(86.925, 27.988, 8848),
      point: {
        pixelSize: 15,
        color: Cesium.Color.YELLOW,
        outlineColor: Cesium.Color.WHITE,
        outlineWidth: 3
      },
      label: {
        text: '珠穆朗玛峰\n8848m',
        font: '14pt sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        pixelOffset: new Cesium.Cartesian2(0, -30),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM
      }
    })
  }

  return <CesiumViewer setup={setup} />
}
