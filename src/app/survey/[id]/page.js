"use client";

import { useState, useEffect, useRef } from "react";
import { Listbox, RadioGroup } from "@headlessui/react";

const questions = [
  {
    text: "What is your name?",
    type: "text",
    required: true,
    validation: () => {
      return true;
    },
  },
  {
    text: "How old are you?",
    type: "text",
    required: true,
    validation: () => {
      return true;
    },
  },
  {
    text: "Which of the following fruits do you like?",
    type: "choice",
    required: true,
    options: ["Apples", "Oranges", "Bananas", "Pears"],
    validation: () => {
      return true;
    },
  },
  {
    text: "Provide multiple answers",
    type: "multiple_choices",
    options: ["Apples", "Oranges", "Bananas", "Pears"],
    required: true,
    validation: () => {
      return true;
    },
  },
  {
    text: "Answer with 'Yes' or 'No'",
    type: "choice",
    required: true,
    options: ["Yes", "No", "Maybe", "I don't know"],
    validation: () => {
      return true;
    },
  },
  {
    text: "Would you like assistance?",
    type: "choice",
    required: true,
    options: ["Yes", "No"],
    validation: () => {
      return true;
    },
  },
];

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([
    "John Doe",
    "21",
    "Apples",
    "Apples",
    "Yes",
    "Yes",
  ]);

  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleAnswer = (event) => {
    console.log(event);
    let value;
    if (typeof event === "string") {
      console.log("string");
      value = event;
    } else {
      value = event.target.value;
    }
    console.log(value, "VALUE?");
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log(answers);
  };

  const renderQuestion = (question, index) => {
    switch (question.type) {
      case "text":
        return (
          <div key={index}>
            <label className="my-5 block">{question.text}</label>
            <input
              className="block border border-gray-300 p-4 rounded w-full"
              type="text"
              value={answers[index] || ""}
              onChange={handleAnswer}
              required={question.required}
            />
          </div>
        );

      case "multiple_choices":
        return (
          <div key={index}>
            <label className="my-5 block">{question.text}</label>
            <RadioGroup
              value={
                Array.isArray(answers[index])
                  ? answers[index].join("\n")
                  : answers[index]
              }
              onChange={handleAnswer}
            >
              {question.options.map((option, optionIndex) => (
                <RadioGroup.Option key={optionIndex} value={option}>
                  {({ checked }) => (
                    <div
                      className={`${
                        checked ? "bg-blue-500" : "bg-white"
                      } border border-gray-300 p-4 rounded flex justify-between items-center`}
                    >
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {option}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        );

      case "choice":
        return (
          <div key={index}>
            <label className="my-5 block">{question.text}</label>
            <RadioGroup
              value={
                Array.isArray(answers[index])
                  ? answers[index].join("\n")
                  : answers[index]
              }
              onChange={handleAnswer}
            >
              {question.options.map((option, optionIndex) => (
                <RadioGroup.Option key={optionIndex} value={option}>
                  {({ checked }) => (
                    <div
                      className={`${
                        checked ? "bg-blue-500" : "bg-white"
                      } border border-gray-300 p-4 rounded flex justify-between items-center`}
                    >
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {option}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col gap-20">
      <div className="w-min-[500px]">
        {renderQuestion(questions[currentQuestion], currentQuestion)}
      </div>

      <div className="flex justify-between mt-4 gap-20">
        {currentQuestion > 0 ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrevQuestion}
          >
            Prev
          </button>
        ) : (
          <div></div>
        )}

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
    </div>
  );
};

export default Survey;
