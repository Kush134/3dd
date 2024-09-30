import { Canvas } from '@react-three/fiber'
import { Environment, Loader, OrbitControls, Stats, useProgress } from "@react-three/drei"
import Lamborghini from "./Models/Lamborghini Aventador J"
import Scene from "./Models/Autobianchi Stellina"
import Maserati from "./Models/Maserati MC20"
import Maserati2 from "./Models/Maserati"
import truck from "./Models/Truck"
import { Leva, levaStore, useControls, button } from 'leva'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Model, ModelProps, models } from './Models/model'
import '../styles.css'

interface Cars {
  readonly Model: (props: ModelProps) => JSX.Element;
  readonly interior: string;
  readonly exterior: string;
  readonly Wheel: string;
}

export default function App() {
  const cars: Record<Model, Cars> = useMemo(() => ({
    "Lamborghini Aventador J": {
      Model: Lamborghini,
      interior: "#000000",
      exterior: "#c73737",
      Wheel:"#c73737",
    },
    "Maserati MC20": {
      Model: Maserati,
      interior: "#000000",
      exterior: "#ffffff",
      Wheel:"yellow",
    },
    "Autobianchi Stellina": {
      Model: Scene,
      interior: "#000000",
      exterior: "#963f3f",
      Wheel:"yellow",
    },
    "Maserati2": {
      Model: Maserati2,
      interior: "#000000",
      exterior: "#960000",
      Wheel:"black",
    },
    "Truck": {
      Model: truck,
      interior: "#000000",
      exterior: "#960000",
      Wheel:"black",
    },
  }), []);

  const [carsState, setCarsState] = useState(() => cars);
  const carsStateRef = useRef(carsState);

  useEffect(() => {
    carsStateRef.current = carsState;
  }, [carsState]);

  const resetCarColor = () => {
    const model = levaStore.get("Select") as Model;
    set({
      Exterior: cars[model].exterior,
      Interior: cars[model].interior,
      Wheel: cars[model].Wheel,
    });
  };

  const setCarInterior = (interior: string) => {
    const model = levaStore.get("Select") as Model;
    setCarsState({
      ...carsStateRef.current,
      [model]: {
        ...carsStateRef.current[model],
        interior
      }
    })
  };

  const setCarExterior = (exterior: string) => {
    const model = levaStore.get("Select") as Model;
    setCarsState({
      ...carsStateRef.current,
      [model]: {
        ...carsStateRef.current[model],
        exterior
      }
    })
  };

  const setCarWheel = (Wheel: string) => {
    const model = levaStore.get("Select") as Model;
    setCarsState({
      ...carsStateRef.current,
      [model]: {
        ...carsStateRef.current[model],
       Wheel
      }
    })
  };

  const [{ Rotation, Stats: stats }, set] = useControls(() => ({
    Select: {
      options: models,
      onChange: (value: Model) => {
        set({
          Exterior: carsStateRef.current[value].exterior,
          Interior: carsStateRef.current[value].interior,
          Wheel: carsStateRef.current[value].Wheel,
        });
      }
    },
    Interior: {
      value: '#000000',
      onChange: setCarInterior
    },
    Exterior: {
      value: '#9a9898',
      onChange: setCarExterior
    },
    Wheel:{
      value:'#9a9898',
      onChange:setCarWheel
    },
    Rotation: false,
    Stats: false,
    "Reset color": button(resetCarColor),
  }));

  const { progress } = useProgress();

  return (
    <div className='carcustom'>
      <Canvas camera={{ position: [0, 0, 10] }} shadows={true} frameloop="demand">
        <Suspense fallback={null}>
          {models
            .map(name => {
              const Model = cars[name].Model;
              return <Model exterior={carsState[name].exterior} interior={carsState[name].interior} visible={levaStore.get("Select") === name} key={name} Wheel={carsState[name].Wheel} />
            })}
        </Suspense>
        <Environment
          background
          files={'san_giuseppe_bridge_4k.exr'}
          blur={0.5}
        />
        {stats ? <Stats /> : undefined}
        <OrbitControls maxPolarAngle={7 * Math.PI / 18} autoRotate={Rotation} minDistance={2} maxDistance={15} />
      </Canvas>
      <Loader />
      <Leva
        hidden={progress === 100 ? false : true}
      />
    </div>
  )
}