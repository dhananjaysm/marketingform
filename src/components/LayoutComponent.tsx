import { useEffect, useState } from "react";
import Sidebar from "./SidebarComponent";
import axios from "axios";
import useDataStore, { Answer } from "../context/dataStore";
import { Outlet } from "react-router-dom";

const token = import.meta.env.VITE_AIRTABLE_TOKEN;
const baseId = "appnbKxW0Fj7Wwo5m";
const tableName = "marketingtable";

const LayoutComponent = () => {
  const { setResponseData } = useDataStore();
  const [loading, setLoading] = useState(true); // State for tracking loading status
  function deserializeResponse(responseString: string): Record<number, Answer> {
    return JSON.parse(responseString);
  }
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Fetched records:", response.data.records);
        const records = response.data.records.map((record: any) => ({
          ...record,
          fields: {
            ...record.fields,
            Response: deserializeResponse(record.fields.Response),
          },
        }));

        setResponseData(records);
        // setResponseData(response.data.records);
        setLoading(false); // Data fetching is complete, set loading to false
      } catch (error) {
        console.error("Error fetching records:", error);
        setLoading(false); // Data fetching is complete (even if it's an error), set loading to false
        // Handle errors
      }
    };

    fetchData(); // Initiate the API call
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 sm:pl-80">
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]">
              <div className="flex items-center justify-center m-[10px]">
                <div className="w-5 h-5 border-4 border-white border-solid rounded-full border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div> // Show loading indicator while fetching data
        ) : (
          <Outlet /> // Render nested content once data is fetched
        )}
      </div>
    </div>
  );
};

export default LayoutComponent;
