 import { useGLTF } from "@react-three/drei";

export function Office(props) {
  const { nodes, materials } = useGLTF("./models/table.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[9.934, 24.742, -4.112]}
        scale={[14.842, 924.061, 37.688]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[9.884, 11.772, 22.596]}
        scale={9.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.001"]}
        position={[9.928, 11.48, -33.108]}
        scale={9.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.004"]}
        position={[14.232, 21.759, 23.169]}
        scale={[-1.09, -2.144, -1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.004"]}
        position={[5.393, 21.759, 23.169]}
        scale={[-1.09, -2.144, -1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.004"]}
        position={[14.232, 22.271, -32.548]}
        scale={[-1.09, -2.144, -1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.004"]}
        position={[5.393, 22.271, -32.548]}
        scale={[-1.09, -2.144, -1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[17.942, 3.958, -4.771]}
        scale={[0.201, 1.097, 20.229]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.001"]}
        position={[17.942, 10.181, -4.771]}
        scale={[0.201, 4.329, 19.952]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[18.335, 5.938, 9.13]}
        scale={[-0.324, -6.187, -0.948]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        position={[18.335, 5.801, -4.055]}
        scale={[-0.324, -6.187, -0.948]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[18.335, 5.871, -18.266]}
        scale={[-0.324, -6.187, -0.948]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[9.928, 11.48, -33.108]}
        scale={9.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.001"]}
        position={[-15.107, 8.662, 22.596]}
        scale={[16.57, 5.935, 9.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-15.107, 8.662, 22.596]}
        scale={[16.57, 5.935, 9.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-15.107, 8.662, 22.596]}
        scale={[16.57, 5.935, 9.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-15.107, 8.662, 22.596]}
        scale={[16.57, 5.935, 9.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-15.107, 8.662, 22.596]}
        scale={[16.57, 5.935, 9.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[-15.107, 8.662, 22.596]}
        scale={[16.57, 5.935, 9.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
        position={[-7.049, 4.637, 13.312]}
        scale={-0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.001"]}
        position={[-7.049, 7.898, 13.312]}
        scale={-0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials["Material.001"]}
        position={[-22.965, 7.898, 13.312]}
        scale={-0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials["Material.001"]}
        position={[-22.965, 4.727, 13.312]}
        scale={-0.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.005"]}
        position={[-34.952, 14.213, -11.793]}
        rotation={[0.021, -0.011, 0.022]}
        scale={[1.635, 11.071, 11.071]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Material.005"]}
        position={[-24.263, 14.364, -11.709]}
        scale={[9.385, 10.574, 11.617]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.004"]}
        position={[8.681, 30.529, 22.189]}
        scale={[6.088, 6.009, 4.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[8.681, 30.529, 22.189]}
        scale={[6.088, 6.009, 4.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[8.681, 30.529, 22.189]}
        scale={[6.088, 6.009, 4.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.002"]}
        position={[8.681, 30.529, 22.189]}
        scale={[6.088, 6.009, 4.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[8.681, 30.529, 22.189]}
        scale={[6.088, 6.009, 4.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.002"]}
        position={[8.681, 30.529, 22.189]}
        scale={[6.088, 6.009, 4.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.003"]}
        position={[17.472, 27.679, -6.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.391, -10.673, -8.114]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials["Material.003"]}
        position={[17.472, 27.679, -6.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.391, -10.673, -8.114]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials["Material.002"]}
        position={[17.472, 27.679, -6.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.391, -10.673, -8.114]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={materials["Material.003"]}
        position={[18.49, 25.18, -6.876]}
        scale={[-3.424, -0.833, -4.687]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials["Material.003"]}
        position={[8.274, 24.965, 11.515]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[3.025, 0.876, 1.863]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials["Material.003"]}
        position={[6.366, 24.502, -6.914]}
        scale={[3.064, 3.131, 7.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials.Material}
        position={[6.366, 24.502, -6.914]}
        scale={[3.064, 3.131, 7.055]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.006"]}
        position={[-0.253, 1.578, -4.233]}
        scale={65.667}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.004"]}
        position={[-14.345, 14.743, 23.62]}
        scale={[5.729, 4.399, 4.379]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={nodes.Plane015.material}
        position={[-14.345, 14.743, 23.62]}
        scale={[5.729, 4.399, 4.379]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={nodes.Plane016.material}
        position={[-14.345, 14.743, 23.62]}
        scale={[5.729, 4.399, 4.379]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={nodes.Plane017.material}
        position={[-14.369, 20.455, 21.446]}
        scale={[2.568, 4.077, 4.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={nodes.Plane018.material}
        position={[-13.762, 16.487, 18.869]}
        scale={[2.568, 4.077, 4.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={nodes.Plane019.material}
        position={[-25.5, 15.306, 21.446]}
        scale={[2.568, 4.077, 4.077]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={materials["Material.003"]}
        position={[-26.775, 4.226, -11.751]}
        scale={[-7.123, -2.405, -7.907]}
      />
    </group>
  );
}

useGLTF.preload("./models/table.glb");