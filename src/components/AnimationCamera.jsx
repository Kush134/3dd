import { Box, OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AnimationCamera() {
  const { camera } = useThree();

  const controlsRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      camera.position,
      { x: 45, z: 0, y: 90 },
      {
        x: -5,
        z: 70,
        y: -15,
        duration: 7,
        ease: "power1.inOut",

        onComplete: () => {
          controlsRef.current.enabled = true;
        },
      },
    ).fromTo(
      controlsRef.current.target,
      { x: 10, y: 90, z: 0 },
      {
        x: 10,
        y: -9,
        z: 0,
        duration: 7,
        ease: "power1.inOut",
      },
      "<",
    );
  }, {});

  return (
    <>
      <OrbitControls
        makeDefault
        maxPolarAngle={Math.PI / 1.85}
        minPolarAngle={Math.PI / 2.25}
        zoomSpeed={0.5}
        maxDistance={80}
        minDistance={40}
        target={[10, -9, 0]}
        ref={controlsRef}
      />
    </>
  );
}
