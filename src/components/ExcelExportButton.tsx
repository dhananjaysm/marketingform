import useDataStore, { RecordType } from "../context/dataStore"; // Import your Zustand hook
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExcelExportButton = () => {
  const { responseData } = useDataStore();
  const exportToExcel = () => {
    const excelData = responseData.map((record: RecordType) => {
      const questionColumns: { [key: string]: string } = {};

      for (const key in record.fields.Response) {
        const questionIndex = parseInt(key);
        questionColumns[`Question ${questionIndex}`] = JSON.stringify(
          record.fields.Response[key]
        );
      }

      return {
        Email: record.fields.Email,
        Name: record.fields.Name,
        ...questionColumns,
        Created: record.fields.Created,
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const excelBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(excelBlob, "submissions.xlsx");
  };
  return (
    <div>
      <button 
      className="border-purple-500 hover:bg-purple-500 hover:text-white"
      onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
};

export default ExcelExportButton;
