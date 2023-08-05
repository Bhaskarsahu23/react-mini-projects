import { useQuize } from '../context/QuizContext';

function Scored() {
  const { points, highScore, dispatch, maxPossiblePoints } = useQuize();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = '🎖';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🎆';
  if (percentage >= 0 && percentage < 50) emoji = '🎇';
  if (percentage === 0) emoji = '😢';

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        YOU scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)})
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        restart
      </button>
    </>
  );
}
export default Scored;
