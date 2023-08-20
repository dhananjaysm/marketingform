import useQuestionStore, { Option } from "../context/storeThree";
import {  FaChevronLeft } from "react-icons/fa";

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
  // const [questionFlow, setQuestionFlow] = useState<number[]>([
  //   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  // ]);
  // const [selectedOption, setSelectedOption] = useState<Option>();

  const currentQuestion = flowQuestions[currentQuestionIndex];

  const handleOptionSelect = (option: Option) => {
    const currentAnswers = answers[currentQuestionIndex] || [];

    // Check if the selected option label is already present in answers
    if (currentAnswers.includes(option.label)) {
      const updatedAnswers = currentAnswers.filter(
        (answer) => answer !== option.label
      );
      setAnswer(currentQuestionIndex, updatedAnswers);

      if (option.subQuestionIndex !== undefined) {
        console.log(`Removing ${option.subQuestionIndex} from the questions`);
        removeSubQuestion(option.subQuestionIndex);
      }
    } else {
      const updatedAnswers = [...currentAnswers, option.label];
      setAnswer(currentQuestionIndex, updatedAnswers);

      if (option.subQuestionIndex !== undefined) {
        console.log(`Inserting ${option.subQuestionIndex} in the questions`);
        insertSubQuestion(option.subQuestionIndex);
      }
    }
    if (currentQuestion.hasMultipleAnswers) {
      const currentAnswers = answers[currentQuestionIndex] || [];

      // Check if the selected option label is already present in answers
      if (currentAnswers.includes(option.label)) {
        const updatedAnswers = currentAnswers.filter(
          (answer) => answer !== option.label
        );
        setAnswer(currentQuestionIndex, updatedAnswers);
      } else {
        const updatedAnswers = [...currentAnswers, option.label];
        setAnswer(currentQuestionIndex, updatedAnswers);
        if (option.subQuestionIndex !== undefined) {
          console.log(`Inserting ${option.subQuestionIndex} in the questions`);
          insertSubQuestion(option.subQuestionIndex);
        }
      }
    } else {
      setAnswer(currentQuestionIndex, [option.label]);
      console.log(option);
      if (option.subQuestionIndex !== undefined) {
        console.log(`Inserting ${option.subQuestionIndex} in the questions`);
        insertSubQuestion(option.subQuestionIndex);
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleNextQuestion = () => {
   
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    
  };

  if (!currentQuestion) {
    console.log(answers);
    return (
      <section className="container p-8 mx-auto bg-white rounded-lg shadow-lg min-w-[400px] md:min-w-xl dark:bg-gray-800 ">
        <h3 className="mb-2 text-lg font-semibold dark:text-white">Selected Answers:</h3>
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
                <td className="px-4 py-2 dark:text-white">{question.question}</td>
                <td className="px-4 py-2 dark:text-white">
                  {answers[index]?.join(", ") || "No answer"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      // <div className="py-6">
      //   <h2 className="mb-4 text-xl font-semibold text-center">
      //     Questionnaire completed!
      //   </h2>

      //   <div>
      //     <h3 className="mb-2 text-lg font-semibold">User Details:</h3>
      //     <p>
      //       {/* Name: {userDetails.name} <br />
      //       Email: {userDetails.email} */}
      //     </p>
      //   </div>

      //   <div className="mt-6">
      //     <h3 className="mb-2 text-lg font-semibold">Selected Answers:</h3>
      //     <table className="w-full border-collapse">
      //       <thead>
      //         <tr className="bg-gray-200">
      //           <th className="px-4 py-2 text-left">Question</th>
      //           <th className="px-4 py-2 text-left">Answer</th>
      //           <th className="px-4 py-2 text-left">Description</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {/* {Object.keys(answers).map((index: any) => (
      //           <tr key={index} className="border-t">
      //             <td className="px-4 py-2">{[index].question}</td>
      //             <td className="px-4 py-2">{answers[index][index]}</td>

      //           </tr>
      //         ))} */}
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
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
      <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">{currentQuestion.question}</h2>
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
        {currentQuestion.hasMultipleAnswers && (
          <button
            className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            onClick={handleNextQuestion}
            disabled={!answers[currentQuestionIndex]?.length}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default QuestionFormThree;
