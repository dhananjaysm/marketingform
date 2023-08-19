// UserDetailsForm.tsx
import React from "react";

interface UserDetailsFormProps {
  currentStep: number;
  inputDetail: string;
  setInputDetail: React.Dispatch<React.SetStateAction<string>>;
  handleUserDetailsSubmit: () => void;
}

export const UserDetailsForm: React.FC<UserDetailsFormProps> = ({
  currentStep,
  inputDetail,
  setInputDetail,
  handleUserDetailsSubmit,
}) => {
  return (
    <div className="flex justify-center">
     <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserDetailsSubmit();
          }}
        >
          <div className="max-w-3xl px-6 py-16 mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              {currentStep === 1 ? "Enter Your Name" : "Enter Your Email"}
            </h1>
            <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">
              Please provide following details.
            </p>

            <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
              <input
                required
                id={currentStep === 1 ? "name" : "email"}
                type={currentStep === 1 ? "text" : "email"}
                className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                placeholder={
                  currentStep === 1 ? "Enter Your Name" : "Enter Your Email"
                }
                value={inputDetail}
                onChange={(e) => setInputDetail(e.target.value)}
              />

              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
