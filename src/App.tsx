import { useState } from "react";
import "./App.css";

import { useQuestionStore } from "./context/store";
import QuestionFormThree from "./components/QuestionFormThree";
import { UserDetailsForm } from "./components/UserDetailsForm";

const App: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [inputDetail, setInputDetail] = useState("");

  const { setUserDetails, setCurrentQuestionIndex } = useQuestionStore();

  const handleUserDetailsSubmit = () => {
    if (currentStep === 1) {
      setUserName(inputDetail);
      setInputDetail("");
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setUserEmail(inputDetail);
      setInputDetail("");
      setUserDetails({ name: userName, email: inputDetail });
      // Start the questionnaire by setting the current question index
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div className="container p-4 mx-auto">
      {userName && userEmail ? (
      <QuestionFormThree />
      ) : (
        <UserDetailsForm
          currentStep={currentStep}
          inputDetail={inputDetail}
          setInputDetail={setInputDetail}
          handleUserDetailsSubmit={handleUserDetailsSubmit}
        />
      )}
    </div>
  );
};

export default App;
