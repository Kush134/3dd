import { Environment } from "@react-three/drei";
import VolumetricClouds from "../VolumetricClouds/VolumetricClouds";
import { folder, useControls } from "leva";
import AnimationCamera from "./AnimationCamera";
import Secound from './secound'
import Maserati from './Models/Maserati'



export const Experience = (props) => {
  const fogProps = useControls({
    VolumetricFog: folder(
      {
        threshold: {
          value: 0.7,
          min: 0.01,
          max: 1.0,
        },
        opacity: {
          value: 0.04,
          min: 0.01,
          max: 1.0,
        },
        range: {
          value: 0.21,
          min: 0.01,
          max: 1.0,
        },
        steps: {
          value: 64,
          min: 16,
          max: 256,
          step: 10,
        },
        position: {
          value: [0, -17, 0],
          step: 1,
        },
        color: {
          value: "#38426f",
        },
        scale: { value: [90, 16, 90] },
        depthTest: {
          value: true,
        },
      },
      { collapsed: true },
    ),
  });

  const cloudsProps = useControls({
    VolumetricClouds: folder(
      {
        threshold: {
          value: 0.55,
          min: 0.01,
          max: 1.0,
        },
        opacity: {
          value: 0.08,
          min: 0.01,
          max: 1.0,
        },
        range: {
          value: 0.2,
          min: 0.01,
          max: 1.0,
        },
        steps: {
          value: 64,
          min: 16,
          max: 256,
          step: 10,
        },
        position: {
          value: [0, 30, 0],
          step: 1,
        },
        color: {
          value: "#d6d8e1",
        },
        scale: { value: [120, 60, 120] },
        depthTest: {
          value: false,
        },
      },
      { collapsed: true },
    ),
  });

  return (
    <>
      <directionalLight
        castShadow
        position={[150, 70, 100]}
        intensity={40.5}
        shadow-mapSize={1024}
        shadow-bias={-0.001}
        shadow-normalBias={0.01}
        shadow-camera-near={60}
        shadow-camera-far={300}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={60}
        shadow-camera-bottom={-60}
      />

      <ambientLight intensity={1.5} color="#ccf0ff" />

   <Maserati exterior={'red'} interior={'black'} visible={true}/>
           

    



      <VolumetricClouds {...fogProps} />
      <VolumetricClouds {...cloudsProps} />

      <Environment
        background
        resolution={1024}
        files={
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/syferfontein_18d_clear_puresky_2k.hdr"
        }
      />

      <AnimationCamera />
    </>
  );
};
