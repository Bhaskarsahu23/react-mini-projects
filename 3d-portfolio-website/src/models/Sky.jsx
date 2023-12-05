import { useGLTF } from '@react-three/drei';
import skyScene from '../asset/3d/sky.glb';

function Sky() {
  const sky = useGLTF(skyScene);
  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}
export default Sky;
