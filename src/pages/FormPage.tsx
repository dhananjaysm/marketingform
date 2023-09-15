import { motion } from "framer-motion";

import QuestionFormThree from "../components/QuestionFormThree";

const FormPage: React.FC = () => {
  return (
    <div className="container p-4 mx-auto w-full">
      <motion.div className="w-full">
        <QuestionFormThree />
      </motion.div>
    </div>
  );
};

export default FormPage;
