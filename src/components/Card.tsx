import { useState } from "react";
import { Question } from "../data";
import QuestionsList from "./QuestionsList";

interface CardProps {
  questions: Question[];
  initialValue: number;
}

function Card({ questions, initialValue = 0 }: CardProps) {
  const [questionIndex, setQuestionIndex] = useState(initialValue);

  const handleClick = () => {
    const quizLength = questions.length - 1;
    setQuestionIndex((currIndex) =>
      currIndex < quizLength ? currIndex + 1 : initialValue
    );
  };

  return (
    <div className="bg-primary-darkBlue rounded-2xl mx-auto p-8 shadow-black shadow-2xl w-[40rem]">
      <div className="flex gap-8">
        <div className="flex flex-col text-white gap-4 w-full">
          <h1 className="text-4xl">
            Question 1/<span className="text-2xl">4</span>
          </h1>
          <h3 className="text-2xl">{questions[questionIndex]?.questionText}</h3>
        </div>
        <QuestionsList
          onNextQuestion={handleClick}
          question={questions[questionIndex]}
        />
      </div>
    </div>
  );
}

export default Card;
