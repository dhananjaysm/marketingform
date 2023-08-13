import React from 'react';

interface OptionButtonProps {
  label: string;
  onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OptionButton;
