import { Link } from "react-router-dom";
import { useState } from "react";
import useQuestionStore from "../context/storeThree";
import { UserDetailsForm } from "../components/UserDetailsForm";
import axios from "axios";

const token = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = "appnbKxW0Fj7Wwo5m";
const tableName = "marketingtable";
interface FormData {
  Name: string;
  Email: string;
  Response: string;
  // Add more fields as needed
}
const Thankyou = () => {
  const {
   
    answers,
  

    userDetails,
  // Access the answeredQuestions state
    // Function to add a question to the answeredQuestions list
  } = useQuestionStore();
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
      submitAnswersToAirtable();
    }
  };

  const submitAnswersToAirtable = async () => {
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

    const formData: FormData = {
      Name: userDetails.name,
      Email: userDetails.email,
      Response: JSON.stringify(answers),
    };

    try {
      const response = await axios.post(
        url,
        { fields: formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Record created:", response.data);
      // Handle the response data
    } catch (error) {
      console.error("Error creating record:", error);
      // Handle errors
    }
  };
  return (
    <div className="container p-4 mx-auto w-full">
      {userName && userEmail ? (
        <div className="max-w-lg p-8 mx-auto space-y-3 text-center bg-white rounded-md">
          <p className="text-lg font-semibold text-gray-800 sm:text-2xl">
            I think we got what we wanted for now. Let us go through the details
            and get back to you!
          </p>
          <Link
            to="/"
            className="inline-flex items-center font-medium text-indigo-600 duration-150 hover:text-indigo-400 gap-x-1"
          >
            Go back
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
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

export default Thankyou;
