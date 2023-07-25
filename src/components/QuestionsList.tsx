import { Question } from "../data";
import Button from "./Button";

interface QuestionsListProps {
  question: Question;
  onNextQuestion: (index: number) => void;
}

function QuestionsList({ question, onNextQuestion }: QuestionsListProps) {

  const handleClick = (index: number) => {
    onNextQuestion(index);
  };
  
  return (
    <div className="flex flex-col justify-between gap-6 w-full">
      {question.answerOptions.map((answerOption, index) => (
        <Button onClick={() => handleClick(index)} key={index}>
          {answerOption.answerText}
        </Button>
      ))}
    </div>
  );
}

export default QuestionsList;
