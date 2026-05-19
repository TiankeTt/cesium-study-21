import CesiumViewer from '../components/CesiumViewer'

export default function SatelliteLayer() {
  const setup = async (viewer, Cesium) => {
    const imageryProvider = await Cesium.IonImageryProvider.fromAssetId(3)
    viewer.imageryLayers.addImageryProvider(imageryProvider)

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(-122.4194, 37.7749, 5000),
      duration: 2
    })
  }

  return <CesiumViewer setup={setup} />
}
