import { Link } from "react-router-dom";
import useDataStore from "../context/dataStore";
import ExcelExportButton from "./ExcelExportButton";
import axios from "axios";
import { useState } from "react";

const token = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = "appnbKxW0Fj7Wwo5m";
const tableName = "marketingtable";

const SubmissionsComponent = () => {
  const { responseData, setResponseData } = useDataStore();
  const [loading, setLoading] = useState(false);

  // const handleRowClick = (id: string) => {
  //   console.log("Clicked", id);
  // };

  const handleDelete = async (recordId: string) => {
    setLoading(true);
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}/${recordId}`;

    try {
      await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the deleted record from responseData
      const filteredResponseData = responseData.filter(
        (record) => record.id !== recordId
      );
      setResponseData(filteredResponseData);

      console.log("Record deleted successfully.");
    } catch (error) {
      console.error("Error deleting record:", error);
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-screen-xl px-4 py-8 mx-auto bg-white rounded-md md:px-8">
      <div className="max-w-lg">
        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Submissions
        </h3>
        <p className="mt-2 text-gray-600">
          List of all the submissions received. Click on Export to Excel button
          to download excel.
        </p>
        {responseData.length > 0 ? (
          <div className="flex flex-row justify-end">
            <ExcelExportButton />
          </div>
        ) : null}
      </div>
      <div className="mt-12 overflow-x-auto border rounded-lg shadow-sm">
        {responseData.length > 0 ? ( // Check if responseData is not empty
          <table className="w-full text-sm text-left table-auto">
            <thead className="font-medium text-gray-600 border-b bg-gray-50">
              <tr className="divide-x">
                <th className="px-6 py-3">S.No</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {responseData.map((record, idx) => (
                <tr
                  key={record.id}
                  className="divide-x hover:text-black hover:bg-gray-300"
                  // onClick={() => handleRowClick(record.id)} // Pass the ID to your function
                  style={{ cursor: "pointer" }}
                >
                  <td className="flex items-center px-6 py-4 whitespace-nowrap gap-x-6">
                    <Link to={`/dashboard/record/${record.id}`}>
                      <span>{idx + 1}</span>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/dashboard/record/${record.id}`}>
                      {record.fields.Name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/dashboard/record/${record.id}`}>
                      {record.fields.Email}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/dashboard/record/${record.id}`}>
                      {record.createdTime}
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300  duration-[500ms,800ms]"
                      onClick={() => handleDelete(record.id)}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center m-[10px]">
                          <div className="w-5 h-5 border-4 border-white border-solid rounded-full border-t-transparent animate-spin"></div>
                        </div>
                      ) : (
                        <span>Delete</span>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-4 text-2xl text-center text-gray-600">
            No records found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SubmissionsComponent;
