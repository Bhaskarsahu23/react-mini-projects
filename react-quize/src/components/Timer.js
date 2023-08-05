import { useQuize } from '../context/QuizContext';
import { useEffect } from 'react';

const Timer = () => {
  const { secondsRemaining, dispatch } = useQuize();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: 'tick' });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{seconds}
    </div>
  );
};
export default Timer;
