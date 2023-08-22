import { useState, useEffect } from "react";
import useQuestionStore, { FormField, Option } from "../context/storeThree";
import { FaChevronLeft } from "react-icons/fa";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import app from "../lib/firebase";

const QuestionFormThree: React.FC = () => {
  const {
    flowQuestions,
    setAnswer,
    removeSubQuestion,
    answers,
    insertSubQuestion,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    goBack,
  } = useQuestionStore();
  const currentQuestion = flowQuestions[currentQuestionIndex];
  const [inputValue, setInputValue] = useState(""); // Local state for input value
  const [formFields, setFormFields] = useState<FormField[]>([]);

  const [fileURL, setFileURL] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);


  useEffect(() => {
    if (currentQuestion && currentQuestion.subQuestionForm) {
      // Initialize formFields based on subQuestionForm
      const initialFormFields = currentQuestion.subQuestionForm.map(
        (field) => ({
          ...field,
          value: "", // Set the initial value for each form field
        })
      );
      setFormFields(initialFormFields);
    }
  }, [currentQuestion]);
  const handleOptionSelect = (option: Option) => {
    const currentAnswers = answers[currentQuestionIndex] || [];
    const isSelected = currentAnswers.includes(option.label);

    // Calculate the updated answers after the option selection
    const updatedAnswers = isSelected
      ? currentAnswers.filter((answer) => answer !== option.label)
      : [...currentAnswers, option.label];

    setAnswer(currentQuestionIndex, updatedAnswers);

    // Perform actions based on selection or deselection
    if (option.subQuestionIndex !== undefined) {
      if (isSelected) {
        console.log(`Removing ${option.subQuestionIndex} from the questions`);
        removeSubQuestion(option.subQuestionIndex);
      } else {
        console.log(`Inserting ${option.subQuestionIndex} in the questions`);
        insertSubQuestion(option.subQuestionIndex);
      }
    }
    // Determine and print options not selected
    const optionsNotSelected = currentQuestion.options
      .filter((opt) => !updatedAnswers.includes(opt.label))
      .map((opt) => opt.label);

    console.log("Options not selected:", optionsNotSelected);
    // Insert a mock follow-up question if the selected option is not chosen
    if (optionsNotSelected.includes("Content creation on own profiles")) {
      // Insert the mock follow-up question using insertSubQuestion
      insertSubQuestion(10);
    }

    if (!currentQuestion.hasMultipleAnswers) {
      // Move to the next question if not a multiple-answer question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // const handleOptionSelect = (option: Option) => {
  //   const currentAnswers = answers[currentQuestionIndex] || [];

  //   // Check if the selected option label is already present in answers
  //   if (currentAnswers.includes(option.label)) {
  //     const updatedAnswers = currentAnswers.filter(
  //       (answer) => answer !== option.label
  //     );
  //     setAnswer(currentQuestionIndex, updatedAnswers);

  //     if (option.subQuestionIndex !== undefined) {
  //       console.log(`Removing ${option.subQuestionIndex} from the questions`);
  //       removeSubQuestion(option.subQuestionIndex);
  //     }
  //   } else {
  //     const updatedAnswers = [...currentAnswers, option.label];
  //     setAnswer(currentQuestionIndex, updatedAnswers);

  //     if (option.subQuestionIndex !== undefined) {
  //       console.log(`Inserting ${option.subQuestionIndex} in the questions`);
  //       insertSubQuestion(option.subQuestionIndex);
  //     }
  //   }
  //   if (currentQuestion.hasMultipleAnswers) {
  //     const currentAnswers = answers[currentQuestionIndex] || [];

  //     // Check if the selected option label is already present in answers
  //     if (currentAnswers.includes(option.label)) {
  //       const updatedAnswers = currentAnswers.filter(
  //         (answer) => answer !== option.label
  //       );
  //       setAnswer(currentQuestionIndex, updatedAnswers);
  //     } else {
  //       const updatedAnswers = [...currentAnswers, option.label];
  //       setAnswer(currentQuestionIndex, updatedAnswers);
  //       if (option.subQuestionIndex !== undefined) {
  //         console.log(`Inserting ${option.subQuestionIndex} in the questions`);
  //         insertSubQuestion(option.subQuestionIndex);
  //       }
  //     }
  //   } else {
  //     setAnswer(currentQuestionIndex, [option.label]);
  //     console.log(option);
  //     if (option.subQuestionIndex !== undefined) {
  //       console.log(`Inserting ${option.subQuestionIndex} in the questions`);
  //       insertSubQuestion(option.subQuestionIndex);
  //     }
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   }
  // };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputNext = () => {
    if (inputValue.trim() !== "") {
      setAnswer(currentQuestionIndex, [inputValue]); // Save input value to answers
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setInputValue(""); // Clear input value
    }
  };

  const handleFormInputChange = (
    questionId: number,
    value: string | string[]
  ) => {
    const updatedFields = formFields.map((field) =>
      field.questionId === questionId ? { ...field, value } : field
    );
    setFormFields(updatedFields);
  };
  const handleMultiSelectClick = (
    questionId: number,
    selectedOption: string
  ) => {
    setFormFields((prevFields) =>
      prevFields.map((field) => {
        if (field.questionId === questionId) {
          const currentValue = Array.isArray(field.value) ? field.value : [];
          if (currentValue.includes(selectedOption)) {
            return {
              ...field,
              value: currentValue.filter((option) => option !== selectedOption),
            };
          } else {
            return {
              ...field,
              value: [...currentValue, selectedOption],
            };
          }
        }
        return field;
      })
    );
  };
  const handleFormSubmit = () => {
    if (fileURL) {
      setAnswer(currentQuestionIndex, [fileURL]);
    }

    // Handle form submission here
    const combinedAnswers = formFields
      .map((field) => {
        if (Array.isArray(field.value)) {
          return `${field.label}: ${field.value.join(", ")}`; // Combine question and array values
        }
        return `${field.label}: ${field.value}`;
      })
      .filter((answer) => answer !== "");

    // Set the combined answers for the current question
    setAnswer(currentQuestionIndex, combinedAnswers);

    // Move to the next question or perform other actions
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Create a storage reference
  const storage = getStorage(app);
  const storageRef = ref(storage);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];

    if (file) {
      const fileRef = ref(storageRef, file.name);

      try {
        setIsUploading(true); // Set isUploading to true when starting upload
        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);
        console.log(downloadURL);
        setFileURL(downloadURL);
      } catch (error) {
        console.error("Error uploading file", error);
      } finally {
        setIsUploading(false); // Set isUploading to false when upload is complete or fails
      }
    }
  };

  if (!currentQuestion) {
    console.log(answers);
    return (
      <section className="container p-8 mx-auto bg-white rounded-lg shadow-lg min-w-[400px] md:min-w-xl dark:bg-gray-800 ">
        <h3 className="mb-2 text-lg font-semibold dark:text-white">
          Selected Answers:
        </h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Question</th>
              <th className="px-4 py-2 text-left">Answer</th>
            </tr>
          </thead>
          <tbody>
            {flowQuestions.map((question, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 dark:text-white">
                  {question.question}
                </td>
                <td className="px-4 py-2 dark:text-white">
                  {answers[index]?.join(", ") || "No answer"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }

  return (
    <section className="container p-8 mx-auto bg-white rounded-lg shadow-lg min-w-[400px] md:min-w-xl dark:bg-gray-800 ">
      {currentQuestionIndex > 0 && (
        <div className="flex items-center justify-start">
          <button
            className="flex items-center px-4 py-2 mb-2 font-bold text-blue-500 border rounded hover:bg-blue-100"
            onClick={goBack}
          >
            <FaChevronLeft />
            Back
          </button>
        </div>
      )}
      <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
        {currentQuestion.question}
      </h2>
      {currentQuestion.inputHeading && (
        <p className="mb-4 text-xl text-center text-gray-500 dark:text-gray-300">
          {currentQuestion.inputHeading}
        </p>
      )}
      <div className="space-y-2">
        {currentQuestion.options.map((option, _) => (
          <div
            onClick={() => handleOptionSelect(option)}
            key={option.label}
            className={`flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700 ${
              answers[currentQuestionIndex]?.includes(option.label)
                ? "border-blue-500"
                : ""
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <h2 className="text-base font-medium text-gray-800 sm:text-xl dark:text-gray-200">
                {option.label}
              </h2>
              {answers[currentQuestionIndex]?.includes(option.label) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-600 sm:h-8 sm:w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
        {/* Render the form fields */}
        {currentQuestion.subQuestionForm && (
          <div className="p-4 mt-4 border rounded">
            {formFields.map((field) => (
              <div key={field.questionId} className="mb-4">
                {field.inputType === "text" && (
                  <div>
                    <label className="block mb-2 font-semibold">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      value={field.value as string}
                      onChange={(event) =>
                        handleFormInputChange(
                          field.questionId,
                          event.target.value
                        )
                      }
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                )}
                {field.inputType === "fileUpload" && (
                  <div>
                    <label className="block mb-2 font-semibold">
                      {field.label}
                    </label>
                    <div className="relative">
                      <input type="file" onChange={handleFileUpload} />
                      {fileURL && (
                        <div className="mt-2">
                          <img
                            src={fileURL}
                            alt="Uploaded file"
                            style={{ width: "100px", height: "100px" }}
                          />
                        </div>
                      )}
                      {isUploading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded">
                          <svg
                            className="w-8 h-8 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {field.inputType === "dropdown" && (
                  <div>
                    <label className="block mb-2 font-semibold">
                      {field.label}
                    </label>
                    <select
                      value={field.value as string}
                      onChange={(event) =>
                        handleFormInputChange(
                          field.questionId,
                          event.target.value
                        )
                      }
                      className="w-full px-4 py-2 border rounded"
                    >
                      <option value="">Select an option</option>
                      {field.options?.map((option) => (
                        <option key={option.id} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {field.inputType === "radio" && (
                  <div>
                    <label className="block mb-2 font-semibold">
                      {field.label}
                    </label>
                    <div className="mt-2">
                      {field.options?.map((option) => (
                        <label
                          key={option.id}
                          className="inline-flex items-center mr-4"
                        >
                          <input
                            type="radio"
                            value={option.label}
                            checked={field.value === option.label}
                            onChange={() =>
                              handleFormInputChange(
                                field.questionId,
                                option.label
                              )
                            }
                            className="mr-2"
                          />
                          {option.label}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                {field.questionId == 2 && field.inputType === "multiSelect" && (
                  <div>
                    <label className="block mb-2 font-semibold">
                      {field.label}
                    </label>
                    <div className="w-full px-4 py-2 border rounded">
                      {field.options?.map((option) => (
                        <div
                          key={option.id}
                          onClick={() =>
                            handleMultiSelectClick(
                              field.questionId,
                              option.label
                            )
                          }
                          className={`cursor-pointer border rounded-md mb-1 p-2 flex flex-row justify-between ${
                            field.value.includes(option.label)
                              ? "bg-blue-200"
                              : ""
                          }`}
                        >
                          {option.label}

                          {field.value.includes(option.label) && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2 h-2 text-blue-600 sm:h-5 sm:w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button
              className="px-6 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              onClick={handleFormSubmit}
              // Add your click handler function here
              // disabled={!answers[currentQuestionIndex]?.length}
            >
              Next
            </button>
          </div>
        )}
        {currentQuestion.hasMultipleAnswers && (
          <button
            className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            onClick={handleNextQuestion}
            disabled={!answers[currentQuestionIndex]?.length}
          >
            Next
          </button>
        )}
        {currentQuestion.inputType === "text" && (
          <div className="mt-4">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your answer"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              className="px-6 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              onClick={handleInputNext}
              // Add your click handler function here
              // disabled={!answers[currentQuestionIndex]?.length}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionFormThree;
