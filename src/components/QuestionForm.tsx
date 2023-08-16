import React, { useState } from "react";
import { useQuestionStore } from "../context/store";
import { FaCheckCircle, FaChevronLeft } from "react-icons/fa";
import clsx from "clsx";
const QuestionForm: React.FC = () => {
  const {
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    answers,
    descriptions,
    setAnswer,
    addToHistory,
    goBack,
    userDetails
  } = useQuestionStore();
  const currentQuestion = questions[currentQuestionIndex];
  const [inputValue, setInputValue] = useState<string>("");
  const [optionDescription, setOptionDescription] = useState<string>(''); // State for option description
  const [isProvidingDescription, setIsProvidingDescription] = useState<boolean>(false);

  console.log("Current Question:", currentQuestionIndex, currentQuestion);
  if (!currentQuestion) {
    return (
      <div className="py-6">
        <h2 className="mb-4 text-xl font-semibold text-center">
          Questionnaire completed!
        </h2>
  
        <div>
          <h3 className="mb-2 text-lg font-semibold">User Details:</h3>
          <p>
            Name: {userDetails.name} <br />
            Email: {userDetails.email}
          </p>
        </div>
  
        <div className="mt-6">
          <h3 className="mb-2 text-lg font-semibold">Selected Answers:</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Question</th>
                <th className="px-4 py-2 text-left">Answer</th>
                <th className="px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(answers).map((index: any) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{questions[index].question}</td>
                  <td className="px-4 py-2">{answers[index]}</td>
                  <td className="px-4 py-2">
                    {descriptions[index] && (
                      <span className="text-gray-500">
                        {descriptions[index]}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  const handleOptionClick = (
    nextQuestionIndex: number,
    optionLabel: string,
    isDescriptionRequired: boolean
  ) => {
    setAnswer(currentQuestionIndex, optionLabel);
    console.log("Description is required for this option",isDescriptionRequired);
    if (isDescriptionRequired) {
      setIsProvidingDescription(true); // Set state to indicate description input
      return; // Do not navigate immediately
    }
    if(currentQuestion.isInputRequired){
      setIsProvidingDescription(false);
    }
    addToHistory(currentQuestionIndex); // Add current index to history
    setCurrentQuestionIndex(nextQuestionIndex);

    // Log the user's choice and next question index
    console.log("User chose:", optionLabel);
    console.log("Navigating to question index:", nextQuestionIndex);
  };

  const handleInputNextClick = () => {

    console.log(isProvidingDescription);
    console.log("Sending this value:",inputValue);
    // Handle the wait logic here
    if (isProvidingDescription) {
      // User must provide a description before proceeding
      return;
    }

    setAnswer(currentQuestionIndex, inputValue);
    addToHistory(currentQuestionIndex);
    setCurrentQuestionIndex(currentQuestion.options[0].nextQuestionIndex); // Assuming next question index
  };

  const handleDescriptionSubmit = () => {
    // Store mapped description in descriptions state
    setAnswer(currentQuestionIndex, answers[currentQuestionIndex], optionDescription);
    setOptionDescription('');
    setIsProvidingDescription(false); // Reset description input state
    const nextQuestionIndex = currentQuestion.options.find(
      (option) => option.label === answers[currentQuestionIndex]
    )?.nextQuestionIndex;
    if (nextQuestionIndex !== undefined) {
      addToHistory(currentQuestionIndex);
      setCurrentQuestionIndex(nextQuestionIndex);
      console.log("moving to next")
      setIsProvidingDescription(false); // Reset description input state
    }
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
            onChange={(e) =>{
              setIsProvidingDescription(false)
              console.log(e.target.value);
              setInputValue(e.target.value)

            }}
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
         {currentQuestion.options.map((option, index) => (
            <div key={option.label}>
              <button
                className={`w-full flex justify-start items-center px-4 py-2 text-left bg-gray-200 rounded hover:bg-gray-300 ${
                  answers[currentQuestionIndex] === option.label
                    ? 'bg-blue-500 hover:bg-blue-700 text-black'
                    : ''
                }`}
                onClick={() =>
                  handleOptionClick(
                    option.nextQuestionIndex,
                    option.label,
                    option.isDescriptionRequired
                  )
                }
              >
                {answers[currentQuestionIndex] === option.label && (
                  <FaCheckCircle style={{ color: 'green' }} className={clsx("mr-2")} />
                )}
                {option.label}
              </button>
              {option.isDescriptionRequired &&
                answers[currentQuestionIndex] === option.label && (
                  <div className="mt-2">
                    <textarea
                      className="w-full p-2 border rounded"
                      placeholder="Enter description..."
                      value={optionDescription}
                      onChange={(e) => setOptionDescription(e.target.value)}
                    />
                    <button
                      className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                      onClick={handleDescriptionSubmit}
                      disabled={!optionDescription}
                    >
                      Next
                    </button>
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionForm;
