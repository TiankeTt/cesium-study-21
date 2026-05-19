import { useEffect, useRef } from 'react'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

const ION_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkYzc0ODA4Mi0xOGM0LTRhNzctYTM3OC03ZjdjYzAyNTU1ODMiLCJpZCI6NDMyODc3LCJpc3MiOiJodHRwczovL2lvbi5jZXNpdW0uY29tIiwiYXVkIjoidW5kZWZpbmVkX2RlZmF1bHQiLCJpYXQiOjE3NzkwODA5NTh9.OOBsYZqBLsAE4qgXeEv0jbJl2f3JecwfCan2rCAfEKw'

export default function CesiumViewer({ setup, viewerOptions }) {
  const viewerRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    Cesium.Ion.defaultAccessToken = ION_TOKEN

    const defaultOptions = {
      terrain: Cesium.Terrain.fromWorldTerrain(),
      animation: false,
      timeline: false,
      baseLayerPicker: true,
      geocoder: true,
      homeButton: true,
      sceneModePicker: true,
      navigationHelpButton: false,
      fullscreenButton: true,
      vrButton: false
    }

    const viewer = new Cesium.Viewer(
      containerRef.current,
      { ...defaultOptions, ...viewerOptions }
    )

    viewerRef.current = viewer

    if (setup) {
      setup(viewer, Cesium)
    }

    return () => {
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy()
      }
      viewerRef.current = null
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}
