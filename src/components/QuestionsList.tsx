import { Question } from "../data";
import Button from "./Button";

interface QuestionsListProps {
  question: Question;
}

function QuestionsList({ question }: QuestionsListProps) {
  return (
    <div className="flex flex-col justify-between gap-6 w-full">
      <Button>{question.answerOptions[0].answerText}</Button>
      <Button>{question.answerOptions[1].answerText}</Button>
      <Button>{question.answerOptions[2].answerText}</Button>
      <Button>{question.answerOptions[3].answerText}</Button>
    </div>
  );
}

export default QuestionsList;
