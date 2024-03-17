import { appleImg } from '../utils';

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img
        src={appleImg}
        alt="apple icon"
        width={40}
        height={40}
        className="animate-pulse"
      />
    </div>
  );
}
export default Loading;
