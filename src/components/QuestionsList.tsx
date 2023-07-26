import { Question } from "../data";
import Button from "./Button";

interface QuestionsListProps {
  question: Question;
  onNextQuestion: (isCorrect: boolean) => void;
}

function QuestionsList({ question, onNextQuestion }: QuestionsListProps) {
  const handleClick = (isCorrect: boolean) => {
    onNextQuestion(isCorrect);
  };

  return (
    <div className="flex flex-col justify-between gap-6 w-full">
      {question.answerOptions.map(({ answerText, isCorrect }, index) => (
        <Button
          rounded
          position="start"
          onClick={() => handleClick(isCorrect)}
          key={index}
        >
          {answerText}
        </Button>
      ))}
    </div>
  );
}

export default QuestionsList;
