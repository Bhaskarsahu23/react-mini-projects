import { useGLTF } from '@react-three/drei';
import planeScene from '../asset/3d/plane.glb';

function Plane({ isRotating, ...props }) {
  const { scene, animations } = useGLTF(planeScene);

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
}
export default Plane;
