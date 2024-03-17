import { Html } from '@react-three/drei';

function Loader() {
  return (
    <Html>
      <div className="abxolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="rounded-full h-20 w-20 bg-gray-600 animate-ping"></div>
      </div>
    </Html>
  );
}
export default Loader;
