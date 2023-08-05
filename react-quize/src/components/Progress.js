import { useQuize } from '../context/QuizContext';

const Progress = () => {
  const { index, answer, points, maxPossiblePoints, numQusetions } = useQuize();

  return (
    <header className="progress">
      <progress max={numQusetions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQusetions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
};
export default Progress;
