import CesiumViewer from "../components/CesiumViewer";

export default function BasicEarth() {
  const setup = (viewer, Cesium) => {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(116.397428, 39.90923, 1000),
      duration: 2,
    });

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
  };

  return <CesiumViewer setup={setup} />;
}
