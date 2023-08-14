import React, { useState } from "react";
import { useQuestionStore } from "../context/store";
import { FaCheckCircle, FaChevronLeft } from "react-icons/fa";
const QuestionForm: React.FC = () => {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    setAnswer,
    addToHistory,
    goBack,
  } = useQuestionStore();
  const currentQuestion = questions[currentQuestionIndex];
  const [inputValue, setInputValue] = useState<string>("");
  console.log("Current Question:", currentQuestionIndex, currentQuestion);
  if (!currentQuestion) {
    return (
      <div className="py-6">
        <h2 className="mb-4 text-xl font-semibold text-center">
          Questionnaire completed!
        </h2>

        <div>
          <h3>Selected Answers:</h3>
          <ul>
            {Object.keys(answers).map((index: any) => (
              <li key={index}>
                Question {index}: {answers[index]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  const handleOptionClick = (
    nextQuestionIndex: number,
    optionLabel: string
  ) => {
    setAnswer(currentQuestionIndex, optionLabel);
    addToHistory(currentQuestionIndex); // Add current index to history
    setCurrentQuestionIndex(nextQuestionIndex - 1);

    // Log the user's choice and next question index
    console.log("User chose:", optionLabel);
    console.log("Navigating to question index:", nextQuestionIndex);
  };

  const handleInputNextClick = () => {
    setAnswer(currentQuestionIndex, inputValue);
    addToHistory(currentQuestionIndex);
    setCurrentQuestionIndex(currentQuestion.options[0].nextQuestionIndex); // Assuming next question index
  };

  // const isInputQuestion = currentQuestion.options.length === 0; // Check if it's an input question
  return (
    <div className="py-6">
       {currentQuestionIndex > 0 && (
    <div className="flex items-center justify-start">
      <button
        className="flex items-center px-4 py-2 mt-4 font-bold text-blue-500 border rounded hover:bg-blue-100"
        onClick={goBack}
      >
        <FaChevronLeft />
        Back
      </button>
    </div>
  )}
      <h2 className="mb-4 text-xl font-semibold">{currentQuestion.question}</h2>
      {currentQuestion.isInputRequired ? (
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            className="px-4 py-2 ml-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={handleInputNextClick}
            disabled={!inputValue}
          >
            Next
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {currentQuestion.options.map((option, _) => (
            <button
              key={option.label}
              className="flex items-center justify-start w-full px-4 py-2 text-left bg-gray-200 rounded hover:bg-gray-300"
              onClick={() =>
                handleOptionClick(option.nextQuestionIndex, option.label)
              }
            >
               {answers[currentQuestionIndex] === option.label && (
                <FaCheckCircle className="mr-2" />
              )}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
