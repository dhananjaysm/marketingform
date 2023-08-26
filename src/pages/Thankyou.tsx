import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <div className="max-w-lg p-8 mx-auto space-y-3 text-center bg-white rounded-md">
      <h3 className="text-4xl font-semibold text-gray-800 sm:text-5xl">
        Thankyou
      </h3>
      <p className="text-gray-600">
        Your response has been successfully submitted.
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
  );
};

export default Thankyou;
