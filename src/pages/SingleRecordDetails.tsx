import { useParams } from "react-router-dom";
import useDataStore from "../context/dataStore";

const SingleRecordDetails = () => {
  const { id } = useParams(); // Get the dynamic slug (record ID)
  const { responseData } = useDataStore();

  const selectedRecord = responseData.find((record) => record.id === id);

  if (!selectedRecord) {
    return <p>Loading...</p>; // Handle loading state or error if needed
  }
  const response = selectedRecord.fields.Response;

  return (
    <section className="container p-8 mx-auto bg-white rounded-lg shadow-lg min-w-[400px] md:min-w-xl dark:bg-gray-800">
      <h2 className="mb-2 text-xl font-semibold">
        Name: {selectedRecord.fields.Name}
      </h2>
      <h2 className="mb-2 text-xl font-semibold">
        Email: {selectedRecord.fields.Email}
      </h2>
      <h3 className="mb-4 text-lg font-semibold dark:text-white">
        Selected Answers:
      </h3>
      <div className="pl-4 space-y-4">
        {Object.keys(response).map((questionIndex: any) => (
          <div key={questionIndex} className="space-y-2">
            <h4 className="font-semibold text-md">
              Question {Number(questionIndex) + 1}:
            </h4>
            <p>{response[questionIndex].question}</p>
            <p className="font-medium">Answer:</p>
            <p>{response[questionIndex].answer.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleRecordDetails;
