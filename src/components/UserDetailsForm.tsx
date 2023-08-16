// UserDetailsForm.tsx
import React from 'react';

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
      <div className={`w-full p-6 bg-gray-200 rounded transition-fade ${currentStep === 1 ? 'active' : 'active'}`}>
        <h2 className="mb-4 text-xl font-semibold text-center">
          {currentStep === 1 ? 'Enter Your Name' : 'Enter Your Email'}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserDetailsSubmit();
          }}
        >
          <div className="mb-4">
            <label htmlFor="detail" className="block mb-2 font-medium">
              {currentStep === 1 ? 'Name' : 'Email'}
            </label>
            <input
              type={currentStep === 1 ? 'text' : 'email'}
              id="detail"
              value={inputDetail}
              onChange={(e) => setInputDetail(e.target.value)}
              className="w-full p-2 transition-all duration-1000 ease-in-out border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            {currentStep === 1 ? 'Next' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};