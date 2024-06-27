import React from 'react'
import { Experience } from "./Experience";
import InterfaceOverlay from "./InterfaceOverlay";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

const secondpage = () => {
  return (
    
    <div>
        <Suspense>
        <Canvas
          shadows
          camera={{ position: [75, 0.1, 40], near: 8, far: 100, fov: 55 }}
          dpr={[1, 1.5]}
        >
          <Experience />
        </Canvas>
      </Suspense>
      <InterfaceOverlay />

    </div>
  )
}

export default secondpage