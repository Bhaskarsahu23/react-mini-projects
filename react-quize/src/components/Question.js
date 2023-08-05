import { useQuize } from '../context/QuizContext';
import Options from './Options';

const Question = () => {
  const { answer, dispatch, questions, index } = useQuize();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};
export default Question;
