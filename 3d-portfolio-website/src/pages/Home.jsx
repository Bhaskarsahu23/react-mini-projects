import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import IsLand from '../models/IsLand';
import Sky from '../models/Sky';

function Home() {
  const adjustislandForScreenSize = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPostion, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustislandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-full bg-transparent"
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#00000" />
          <Sky />
          <IsLand
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}
export default Home;

{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
          POPUP
        </div> */
}
