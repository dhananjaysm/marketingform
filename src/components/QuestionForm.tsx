import React from "react";
import { useQuestionStore } from "../context/store";

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
  // Log the current question and answer when component renders
  console.log("Current Question:", currentQuestionIndex, currentQuestion);
  if (!currentQuestion) {
    return (
        <div className="py-6">
        <h2 className="text-xl font-semibold text-center mb-4">Questionnaire completed!</h2>
        
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
    setCurrentQuestionIndex(nextQuestionIndex - 1 );

    // Log the user's choice and next question index
    console.log('User chose:', optionLabel);
    console.log('Navigating to question index:', nextQuestionIndex);
  };
  return (
    <div className="py-6">
      <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
      <div className="space-y-2">
        {currentQuestion.options.map((option, _) => (
          <button
            key={option.label}
            className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded w-full text-left"
            onClick={() => handleOptionClick(option.nextQuestionIndex, option.label)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {currentQuestionIndex > 0 && (
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={goBack}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default QuestionForm;
