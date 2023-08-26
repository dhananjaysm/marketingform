import { useParams } from "react-router-dom";
import useDataStore from "../context/dataStore";

const SingleRecordDetails = () => {
  const { id } = useParams(); // Get the dynamic slug (record ID)
  const { responseData } = useDataStore();

  const selectedRecord = responseData.find((record) => record.id === id);

  if (!selectedRecord) {
    return <p>Loading...</p>; // Handle loading state or error if needed
  }

  return (
    <div>
      <h2>Selected Record Details</h2>
      <p>Name: {selectedRecord.fields.Name}</p>
      <p>Email: {selectedRecord.fields.Email}</p>
      {/* Render other details */}
    </div>
  );
};

export default SingleRecordDetails;
