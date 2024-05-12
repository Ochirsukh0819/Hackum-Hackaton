import React, { useState } from "react";
import { quiz } from "@/lib/utils";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  // Select and check answer
  const onAnswerSelected = (answer: any, idx: any) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="w-[100%] p-6">
      <div>
        <h2 className="text-black">
          Aсуулт: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="bg-gray-200 p-4 rounded-md mt-8">
            <h3 className="text-black text-2xl mb-8">
              {questions[activeQuestion].question}
            </h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={`py-4 px-2 ${
                  selectedAnswerIndex === idx
                    ? "bg-blue-200"
                    : "hover:bg-gray-300"
                } cursor-pointer mb-4`}
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="btn">
                {activeQuestion === questions.length - 1 ? "Дуусгах" : "Next"}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {activeQuestion === questions.length - 1 ? "Дуусгах" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className="bg-gray-200 p-4 rounded-md mt-8">
            <div className="flex gap-2">
              <h3 className="text-black text-2xl">Үр дүн</h3>
              <h3 className="text-black text-2xl">
                {(result.score / 25) * 100}%
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {" "}
              <p className="text-black">
                Нийт асуулт: <span>{questions.length}</span>
              </p>
              <p className="text-black">
                Нийт оноо: <span>{result.score}</span>
              </p>
              <p className="text-black">
                Зөв хариулт: <span>{result.correctAnswers}</span>
              </p>
              <p className="text-black">
                Буруу хариулт: <span>{result.wrongAnswers}</span>
              </p>
              <button onClick={() => window.location.reload()} className="btn">
                Дахин оролдох
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
