"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json"; // world countries GeoJSON
import type ThreeGlobeType from "three-globe";

// ---------------- Types ----------------
export type GlobeConfig = {
  continentColor?: string;
  seaColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  cameraZ?: number;
  enableZoom?: boolean;
  enablePan?: boolean;
};

const defaultConfig: Required<GlobeConfig> = {
  continentColor: "#2E7BEF", // blue continents
  seaColor: "#FFFFFF",       // bright white oceans
  showAtmosphere: false,
  atmosphereColor: "#ffffff",
  autoRotate: true,
  autoRotateSpeed: 0.5,
  cameraZ: 300,
  enableZoom: false,
  enablePan: false,
};

// ---------------- Internal object ----------------
function GlobeObject({ config }: { config: GlobeConfig }) {
  const { scene } = useThree();
  const globeRef = useRef<ThreeGlobeType | null>(null);

  useEffect(() => {
    const merged = { ...defaultConfig, ...config };

    let cleanup: (() => void) | undefined;
    let isMounted = true;

    (async () => {
      // Dynamically import to avoid SSR "window is not defined"
      const { default: ThreeGlobe } = await import("three-globe");
      if (!isMounted) return;

      const globe = new ThreeGlobe();
      globeRef.current = globe;

      // base sphere (ocean/sea)
      const mat = globe.globeMaterial() as THREE.MeshPhongMaterial;
      mat.color = new THREE.Color(merged.seaColor);
      // remove dark shading
      mat.emissive = new THREE.Color("#000000");
      mat.emissiveIntensity = 0.0;
      mat.shininess = 0.0;

      // atmosphere
      globe
        .showAtmosphere(merged.showAtmosphere)
        .atmosphereColor(merged.atmosphereColor)
        .atmosphereAltitude(0.08);

      // land polygons (completely filled)
      globe
        .polygonsData((countries as any).features)
        .polygonCapColor(() => merged.continentColor)
        .polygonSideColor(() => "#000cf7")
        .polygonStrokeColor(() => "#000cf7");

      scene.add(globe);
      cleanup = () => {
        scene.remove(globe);
      };
    })();

    return () => {
      isMounted = false;
      if (cleanup) cleanup();
    };
  }, [scene, config]);

  return null;
}

// ---------------- Public component ----------------
function SimpleGlobe({ globeConfig }: { globeConfig?: GlobeConfig }) {
  const merged = { ...defaultConfig, ...globeConfig };

  return (
    <Canvas
      camera={{
        position: [0, 0, merged.cameraZ],
        fov: 50,
        near: 0.1,
        far: 2000,
      }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Use pure ambient light to avoid grey shading on white ocean */}
      <ambientLight intensity={5} />

      <GlobeObject config={merged} />

      <OrbitControls
        enablePan={merged.enablePan}
        enableZoom={merged.enableZoom}
        autoRotate={merged.autoRotate}
        autoRotateSpeed={merged.autoRotateSpeed}
        minDistance={merged.cameraZ}
        maxDistance={merged.cameraZ}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}

export default SimpleGlobe;
