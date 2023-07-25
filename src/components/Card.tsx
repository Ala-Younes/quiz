import { useState } from "react";
import { Question } from "../data";
import QuestionsList from "./QuestionsList";

interface CardProps {
  questions: Question[];
  initialValue: number;
}

function Card({ questions, initialValue = 0 }: CardProps) {
  const [questionIndex, setQuestionIndex] = useState(initialValue);
  const [score, setScore] = useState(0);

  const isQuizFinished = () => {
    return questionIndex === questions.length - 1;
  };

  const handleClick = (isCorrect: boolean) => {
    isCorrect && setScore((currScore) => currScore + 1);
    setQuestionIndex((currIndex) =>
      isQuizFinished() ? initialValue : currIndex + 1
    );
  };
  const handleReset = () => {
    setQuestionIndex(0);
  };
  return (
    <div className="bg-primary-darkBlue rounded-2xl mx-auto p-8 shadow-black shadow-2xl w-[40rem]">
      {isQuizFinished() ? (
        <div className="flex flex-col justify-center items-center h-72 ">
          <h1 className="text-white text-3xl">
            You scored {score} out of {questions.length}
          </h1>
          <button
            onClick={handleReset}
            className="border outline-none border-violet-700 bg-blue-500 rounded-xl mt-16 py-4 px-4 hover:bg-accent-blueHover"
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="flex gap-8">
          <div className="flex flex-col text-white gap-4 w-full">
            <h1 className="text-4xl">
              Question {questionIndex + 1}/<span className="text-2xl">4</span>
            </h1>
            <h3 className="text-2xl">
              {questions[questionIndex]?.questionText}
            </h3>
          </div>
          <QuestionsList
            onNextQuestion={handleClick}
            question={questions[questionIndex]}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
