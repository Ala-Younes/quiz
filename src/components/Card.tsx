import { Question } from "../data";
import QuestionsList from "./QuestionsList";

interface CardProps {
    questions: Question[];
}

function Card({ questions }: CardProps) {
  return (
    <div className="bg-primary-darkBlue rounded-2xl mx-auto p-8 shadow-black shadow-2xl w-[40rem]">
      <div className="flex gap-8">
        <div className="flex flex-col text-white gap-4 w-full">
          <h1 className="text-4xl">
            Question 1/<span className="text-2xl">4</span>
          </h1>
          <h3 className="text-2xl">{questions[0]?.questionText}</h3>
        </div>
        <QuestionsList question={questions[0]} />
      </div>
    </div>
  );
}

export default Card;
