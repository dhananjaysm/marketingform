// UserDetailsForm.tsx
import React from "react";
import {AnimatePresence, motion} from 'framer-motion'
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
  const fadeInUp = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <AnimatePresence mode="wait">
    <motion.div 
    key={currentStep}
    variants={fadeInUp}
    initial="initial"
    animate="animate"
    transition={{ duration: 1 }}
    className="flex justify-center">
     <section className="flex flex-col max-w-4xl mx-auto overflow-hidden border border-gray-800 rounded-lg shadow-lg bg-gradient-to-r from-black to-gray-900 md:flex-row ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserDetailsSubmit();
          }}
        >
          <div className="max-w-3xl px-6 py-16 mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-100">
              {currentStep === 1 ? "Enter Your Name" : "Enter Your Email"}
            </h1>
            <p className="max-w-md mx-auto mt-5 text-gray-500">
              Please provide following details.
            </p>

            <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
              <input
                required
                id={currentStep === 1 ? "name" : "email"}
                type={currentStep === 1 ? "text" : "email"}
                className="px-4 py-2 text-black bg-white border rounded-md sm:mx-2 focus:border-white focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-40"
                placeholder={
                  currentStep === 1 ? "Enter Your Name" : "Enter Your Email"
                }
                value={inputDetail}
                onChange={(e) => setInputDetail(e.target.value)}
              />

              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black border border-gray-700 rounded-md sm:mx-2 hover:bg-white hover:text-black focus:outline-none focus:bg-gray-600"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </section>
    </motion.div>
    </AnimatePresence>
  );
};
