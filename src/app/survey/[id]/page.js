"use client";

import useWindowSize from "@/useWindowSize";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const _questions = [
  {
    text: "Do you use QR payments?",
    multiple: false,
    options: ["Yes", "No"],
    answer: null,
  },
  {
    text: "Which of the following QR payment methods do you use?",
    options: ["DuitNow", "GrabPay", "TouchN'Go", "MAE"],
    multiple: true,
    answer: [],
  },
  {
    text: "Would you like a service to setup QR payments for you?",
    options: ["Yes", "No"],
    multiple: false,
    answer: null,
  },
  {
    text: "Common challenges with QR payment?",
    options: [
      "Technical challenges in QR app.",
      "Connectivity issues affecting QR app.",
      "Security concerns in QR app.",
      "Integration challenges with accounting systems.",
      "Transaction fees for QR payments.",
    ],
    multiple: true,
    answer: [],
  },
];

const Survey = ({ params }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(_questions);
  const [ty, setTy] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let array = [];
    const q = questions[3];

    q.options.forEach((option) => {
      array.push(option);
    });

    console.log(array);
  }, []);

  const { width, height } = useWindowSize();

  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextQuestion = () => {
    if (questions[currentQuestion].answer === null) {
      return;
    }

    if (currentQuestion === 0 && questions[currentQuestion].answer === "No") {
      setCurrentQuestion(currentQuestion + 2);
      return;
    }

    if (currentQuestion === 1 && questions[0].answer === "Yes") {
      setCurrentQuestion(currentQuestion + 2);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const handleAnswer = (question, answer) => {
    if (question.multiple) {
      if (question.answer.includes(answer)) {
        question.answer = question.answer.filter((ans) => ans !== answer);
      } else {
        question.answer.push(answer);
      }
    }

    if (!question.multiple) {
      question.answer = answer;
    }
    setQuestions([...questions]);
  };

  const handleSubmit = () => {
    setTy(true);
  };

  const renderQuestion = (question) => {
    if (question.multiple) {
      return (
        <div>
          <h1 className="text-2xl font-bold">{question.text}</h1>
          <div className="flex flex-col gap-5 my-5">
            {question.options.map((option) => (
              <div
                key={option}
                onClick={() => handleAnswer(question, option)}
                className={`w-full border px-10 py-5 text-center font-semibold cursor-pointer rounded-md text-lg hover:bg-blue-400 hover:text-slate-100
                ${
                  question.answer.includes(option)
                    ? "bg-blue-400 text-slate-100"
                    : "bg-slate-100 text-blue-400"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="text-2xl font-bold">{question.text}</h1>
          <div className="flex flex-col gap-5 my-5">
            {question.options.map((option) => (
              <div
                key={option}
                onClick={() => handleAnswer(question, option)}
                className={`w-full border px-10 py-5 text-center font-semibold cursor-pointer rounded-md text-lg hover:bg-blue-400 hover:text-slate-100
                ${
                  question.answer === option
                    ? "bg-blue-400 text-slate-100"
                    : "bg-slate-100 text-blue-400"
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-20 container px-10">
      {ty ? (
        <>
          <Confetti width={width} height={height} />
          <div>
            <h1 className="text-2xl font-bold">Thank you for your time!</h1>
            <h2 className="text-1xl font-bold">
              We will get back to you soon.
            </h2>
          </div>
        </>
      ) : (
        <>
          <div className="w-min-[500px]">
            {renderQuestion(questions[currentQuestion])}
          </div>

          <div className="flex justify-between mt-4 gap-20">
            {currentQuestion < questions.length - 1 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNextQuestion}
              >
                Next
              </button>
            )}

            {currentQuestion === questions.length - 1 && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Survey;
