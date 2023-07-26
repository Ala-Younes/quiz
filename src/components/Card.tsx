import { useState } from "react";
import { Question } from "../data";
import QuestionsList from "./QuestionsList";
import Button from "./Button";

interface CardProps {
  questions: Question[];
  initialValue: number;
}

function Card({ questions, initialValue = 0 }: CardProps) {
  const [questionIndex, setQuestionIndex] = useState(initialValue);
  const [score, setScore] = useState(0);

  const isQuizFinished = () => {
    return questionIndex === questions.length;
  };

  const handleClick = (isCorrect: boolean) => {
    isCorrect && setScore((currScore) => currScore + 1);
    setQuestionIndex((currIndex) =>
      isQuizFinished() ? initialValue : currIndex + 1
    );
  };

  const handleReset = () => {
    setQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="bg-primary-darkBlue rounded-2xl mx-auto p-8 shadow-black shadow-2xl w-[40rem]">
      {isQuizFinished() ? (
        <div className="flex flex-col justify-center items-center h-72 gap-12 ">
          <h1
            className={
              score === questions.length ? "text-green-500" : "text-red-500"
            }
          >
            You scored {score} out of {questions.length}
          </h1>
          <Button onClick={handleReset} rounded full>
            Reset
          </Button>
        </div>
      ) : (
        <div className="flex gap-8">
          <div className="flex flex-col text-white gap-4 w-full">
            <h1 className="text-4xl">
              Question {questionIndex + 1}/<span className="text-2xl">4</span>
            </h1>
            <h3>
              {questions[questionIndex]?.questionText || "No question text"}
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
