/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { ModelProps } from './model'

type GLTFResult = GLTF & {
  nodes: {
    object001_leather_0: THREE.Mesh
    wheel005_Material011_0: THREE.Mesh
    wheel005_Material010_0: THREE.Mesh
    wheel005_Material009_0: THREE.Mesh
    wheel005_Material008_0: THREE.Mesh
    wheel005_carbon_fiber_0: THREE.Mesh
    wheel005_Material007_0: THREE.Mesh
    wheel004_0x10f157_0: THREE.Mesh
    wheel003_Material011_0: THREE.Mesh
    wheel003_Material010_0: THREE.Mesh
    wheel003_Material009_0: THREE.Mesh
    wheel003_Material008_0: THREE.Mesh
    wheel003_carbon_fiber_0: THREE.Mesh
    wheel003_Material007_0: THREE.Mesh
    wheel000_0x10f157_0: THREE.Mesh
    wheel007_0x10f157_0: THREE.Mesh
    wheel001_Material011_0: THREE.Mesh
    wheel001_Material010_0: THREE.Mesh
    wheel001_Material009_0: THREE.Mesh
    wheel001_Material008_0: THREE.Mesh
    wheel001_carbon_fiber_0: THREE.Mesh
    wheel001_Material007_0: THREE.Mesh
    wheel006_0x10f157_0: THREE.Mesh
    wheel002_Material011_0: THREE.Mesh
    wheel002_Material010_0: THREE.Mesh
    wheel002_Material009_0: THREE.Mesh
    wheel002_Material008_0: THREE.Mesh
    wheel002_carbon_fiber_0: THREE.Mesh
    wheel002_Material007_0: THREE.Mesh
    object028_Material005_0: THREE.Mesh
    object017_Material002_0: THREE.Mesh
    object007_reverse_light_0: THREE.Mesh
    object026_nodamage_lod0__s1_0: THREE.Mesh
    object025_M_1_0: THREE.Mesh
    object023_leather11_0: THREE.Mesh
    object018_Material004_0: THREE.Mesh
    object008_carbon_fiber_0: THREE.Mesh
    object008_buttons_0: THREE.Mesh
    object008_Material_0: THREE.Mesh
    object_Matte__FFCCCCCC1_0: THREE.Mesh
    object002_black1_0: THREE.Mesh
    object003_lights_lod0__spe1_0: THREE.Mesh
    object004_led__spec_1_0: THREE.Mesh
    object005_nodamage_lod1_0: THREE.Mesh
    object006_M_1_0: THREE.Mesh
    object009_vehiclelights3_0: THREE.Mesh
    object010_nodamage_lod0__s1_0: THREE.Mesh
    object011_Matte__FFCCCCCC_1_0: THREE.Mesh
    object012_Material006_0: THREE.Mesh
    object013_Fencing_Mesh_Blue_0: THREE.Mesh
    object014_nodamage__spec_1_0: THREE.Mesh
    object015_M_1__spec_1_0: THREE.Mesh
    object016_interior_lod0__s1_0: THREE.Mesh
    object016_buttons_0: THREE.Mesh
    object016_Material_0: THREE.Mesh
    object019_vehiclelights2_0: THREE.Mesh
    object020_lights_lod1_0: THREE.Mesh
    object021_chrome_0: THREE.Mesh
    object022_Material001_0: THREE.Mesh
    dd_engine_0: THREE.Mesh
  }
  materials: object
}

export default function Lamborghini(props: ModelProps) {
  const { nodes } = useGLTF('/lamborghini.glb') as unknown as GLTFResult;

  return (
    <group name={'Lamborghini'} scale={[0.010, 0.010, 0.010]} position={[0, 0.95, 0]} dispose={null} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.1075, -3.3812, -26.1716]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object001_leather_0.geometry} material={nodes.object001_leather_0.material} />
          </group>
          <group
            position={[-188.8479, -58.188, -341.0469]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[2.2975, 2.2975, 2.2975]}>
            <mesh geometry={nodes.wheel005_Material011_0.geometry} material={nodes.wheel005_Material011_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel005_Material010_0.geometry} material={nodes.wheel005_Material010_0.material} material-color={props.Wheel} />
            <mesh geometry={nodes.wheel005_Material009_0.geometry} material={nodes.wheel005_Material009_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel005_Material008_0.geometry} material={nodes.wheel005_Material008_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel005_carbon_fiber_0.geometry} material={nodes.wheel005_carbon_fiber_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel005_Material007_0.geometry} material={nodes.wheel005_Material007_0.material} material-color={props.Wheel}/>
          </group>
          <group
            position={[-189.8293, -67.2117, -307.457]}
            rotation={[-1.1636, 0, -Math.PI]}
            scale={[2.2975, 2.2975, 2.2975]}>
            <mesh geometry={nodes.wheel004_0x10f157_0.geometry} material={nodes.wheel004_0x10f157_0.material} material-color={props.Wheel} />
          </group>
          <group
            position={[189.886, -58.188, -341.0469]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.2975, 2.2975, 2.2975]}>
            <mesh geometry={nodes.wheel003_Material011_0.geometry} material={nodes.wheel003_Material011_0.material}material-color={props.Wheel} />
            <mesh geometry={nodes.wheel003_Material010_0.geometry} material={nodes.wheel003_Material010_0.material}material-color={props.Wheel} />
            <mesh geometry={nodes.wheel003_Material009_0.geometry} material={nodes.wheel003_Material009_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel003_Material008_0.geometry} material={nodes.wheel003_Material008_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel003_carbon_fiber_0.geometry} material={nodes.wheel003_carbon_fiber_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel003_Material007_0.geometry} material={nodes.wheel003_Material007_0.material}material-color={props.Wheel} />
          </group>
          <group position={[190.8675, -64.8359, -306.9073]} rotation={[1.6184, 0, 0]} scale={[2.2975, 2.2975, 2.2975]}>
            <mesh geometry={nodes.wheel000_0x10f157_0.geometry} material={nodes.wheel000_0x10f157_0.material}material-color={props.Wheel} />
          </group>
          <group
            position={[184.0774, -56.6905, 202.2125]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.2156, 2.1874, 2.1874]}>
            <mesh geometry={nodes.wheel007_0x10f157_0.geometry} material={nodes.wheel007_0x10f157_0.material} material-color={props.Wheel}/>
          </group>
          <group
            position={[183.131, -61.467, 234.9806]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.2156, 2.1874, 2.1874]}>
            <mesh geometry={nodes.wheel001_Material011_0.geometry} material={nodes.wheel001_Material011_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel001_Material010_0.geometry} material={nodes.wheel001_Material010_0.material}material-color={props.Wheel} />
            <mesh geometry={nodes.wheel001_Material009_0.geometry} material={nodes.wheel001_Material009_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel001_Material008_0.geometry} material={nodes.wheel001_Material008_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel001_carbon_fiber_0.geometry} material={nodes.wheel001_carbon_fiber_0.material}material-color={props.Wheel} />
            <mesh geometry={nodes.wheel001_Material007_0.geometry} material={nodes.wheel001_Material007_0.material} material-color={props.Wheel}/>
          </group>
          <group
            position={[-183.0393, -54.4062, 202.6277]}
            rotation={[1.9304, 0, -Math.PI]}
            scale={[2.2156, 2.1874, 2.1874]}>
            <mesh geometry={nodes.wheel006_0x10f157_0.geometry} material={nodes.wheel006_0x10f157_0.material} material-color={props.Wheel}/>
          </group>
          <group
            position={[-182.0928, -61.467, 234.9806]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[2.2156, 2.1874, 2.1874]}>
            <mesh geometry={nodes.wheel002_Material011_0.geometry} material={nodes.wheel002_Material011_0.material}material-color={props.Wheel} />
            <mesh geometry={nodes.wheel002_Material010_0.geometry} material={nodes.wheel002_Material010_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel002_Material009_0.geometry} material={nodes.wheel002_Material009_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel002_Material008_0.geometry} material={nodes.wheel002_Material008_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel002_carbon_fiber_0.geometry} material={nodes.wheel002_carbon_fiber_0.material} material-color={props.Wheel}/>
            <mesh geometry={nodes.wheel002_Material007_0.geometry} material={nodes.wheel002_Material007_0.material} material-color={props.Wheel}/>
          </group>
          <group position={[0.1381, -9.2425, -24.3809]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh material-color={props.exterior} geometry={nodes.object028_Material005_0.geometry} material={nodes.object028_Material005_0.material} />
          </group>
          <group position={[81.0972, 29.6744, 107.4916]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object017_Material002_0.geometry} material={nodes.object017_Material002_0.material} />
          </group>
          <group position={[0.1077, 35.3102, -497.2966]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object007_reverse_light_0.geometry}
              material={nodes.object007_reverse_light_0.material}
            />
          </group>
          <group position={[81.0824, 31.5824, 102.0981]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object026_nodamage_lod0__s1_0.geometry}
              material={nodes.object026_nodamage_lod0__s1_0.material}
            />
          </group>
          <group position={[0.1384, -11.6098, 36.3197]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh material-color={props.interior} geometry={nodes.object025_M_1_0.geometry} material={nodes.object025_M_1_0.material} />
          </group>
          <group position={[0.1384, -7.2151, 37.8107]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object023_leather11_0.geometry} material={nodes.object023_leather11_0.material} />
          </group>
          <group position={[0.1383, 40.2679, 96.9324]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object018_Material004_0.geometry} material={nodes.object018_Material004_0.material} />
          </group>
          <group position={[0.1076, -8.3358, -38.4632]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object008_carbon_fiber_0.geometry}
              material={nodes.object008_carbon_fiber_0.material}
            />
            <mesh geometry={nodes.object008_buttons_0.geometry} material={nodes.object008_buttons_0.material} />
            <mesh geometry={nodes.object008_Material_0.geometry} material={nodes.object008_Material_0.material} />
          </group>
          <group position={[0.1383, 63.2164, -95.748]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object_Matte__FFCCCCCC1_0.geometry}
              material={nodes.object_Matte__FFCCCCCC1_0.material}
            />
          </group>
          <group position={[0.1077, -10.4643, -57.0322]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object002_black1_0.geometry} material={nodes.object002_black1_0.material} />
          </group>
          <group position={[0.1075, 5.5923, -48.7656]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object003_lights_lod0__spe1_0.geometry}
              material={nodes.object003_lights_lod0__spe1_0.material}
            />
          </group>
          <group position={[0.1075, -6.0233, 376.9984]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object004_led__spec_1_0.geometry} material={nodes.object004_led__spec_1_0.material} />
          </group>
          <group position={[0.1383, 30.3509, -198.5984]} rotation={[0, 0, 0]} scale={[73.7566, 73.7566, 73.7566]}>
            <mesh
              geometry={nodes.object005_nodamage_lod1_0.geometry}
              material={nodes.object005_nodamage_lod1_0.material}
            />
          </group>
          <group position={[0.1079, 34.1203, -482.9901]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object006_M_1_0.geometry} material={nodes.object006_M_1_0.material} />
          </group>
          <group position={[0.1076, 37.1306, -500.8116]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object009_vehiclelights3_0.geometry}
              material={nodes.object009_vehiclelights3_0.material}
            />
          </group>
          <group position={[0.1078, -29.5778, -44.3559]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object010_nodamage_lod0__s1_0.geometry}
              material={nodes.object010_nodamage_lod0__s1_0.material}
            />
          </group>
          <group position={[0.1385, 58.4334, 118.8466]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object011_Matte__FFCCCCCC_1_0.geometry}
              material={nodes.object011_Matte__FFCCCCCC_1_0.material}
            />
          </group>
          <group position={[0.1076, 12.3624, -50.5216]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object012_Material006_0.geometry} material={nodes.object012_Material006_0.material} />
          </group>
          <group position={[0.1077, -27.6931, -47.7362]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object013_Fencing_Mesh_Blue_0.geometry}
              material={nodes.object013_Fencing_Mesh_Blue_0.material}
            />
          </group>
          <group position={[0.1077, -63.6565, 384.4564]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object014_nodamage__spec_1_0.geometry}
              material={nodes.object014_nodamage__spec_1_0.material}
            />
          </group>
          <group position={[0.1383, -2.2311, 15.1239]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object015_M_1__spec_1_0.geometry} material={nodes.object015_M_1__spec_1_0.material} />
          </group>
          <group position={[0.1075, 2.2419, -143.5695]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              material-color={props.interior}
              geometry={nodes.object016_interior_lod0__s1_0.geometry}
              material={nodes.object016_interior_lod0__s1_0.material}
            />
            <mesh geometry={nodes.object016_buttons_0.geometry} material={nodes.object016_buttons_0.material} />
            <mesh geometry={nodes.object016_Material_0.geometry} material={nodes.object016_Material_0.material} />
          </group>
          <group position={[0.1075, 12.4302, -415.0098]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh
              geometry={nodes.object019_vehiclelights2_0.geometry}
              material={nodes.object019_vehiclelights2_0.material}
            />
          </group>
          <group position={[0.1076, 34.3665, -488.1208]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object020_lights_lod1_0.geometry} material={nodes.object020_lights_lod1_0.material} />
          </group>
          <group position={[31.1519, -28.3839, -243.0356]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object021_chrome_0.geometry} material={nodes.object021_chrome_0.material} />
          </group>
          <group position={[0.1077, -4.7362, 358.3787]} rotation={[0, 0, 0]} scale={[73.6118, 73.6118, 73.6118]}>
            <mesh geometry={nodes.object022_Material001_0.geometry} material={nodes.object022_Material001_0.material} />
          </group>
          <group
            position={[0.1381, 43.9215, -334.4942]}
            rotation={[3.1129, 0, Math.PI]}
            scale={[192.6931, 192.6931, 192.6931]}>
            <mesh geometry={nodes.dd_engine_0.geometry} material={nodes.dd_engine_0.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/lamborghini.glb')
