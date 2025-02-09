import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const students = [
  {
    name: "NIRMALA  SUNUWAR",
    percentage: 90,
    gpa: 3.715,
    original_index: 8,
    percentage_rank: 1,
  },
  {
    name: "NINAMMA  RAI",
    percentage: 86.15,
    gpa: 3.67,
    original_index: 7,
    percentage_rank: 2,
  },
  {
    name: "SOMIYA  KULUNG RAI (A)",
    percentage: 85.38,
    gpa: 3.645,
    original_index: 20,
    percentage_rank: 3,
  },
  {
    name: "RUMANI  RIJAL",
    percentage: 83.23,
    gpa: 3.505,
    original_index: 12,
    percentage_rank: 4,
  },
  {
    name: "SAHARA  RAI",
    percentage: 80.46,
    gpa: 3.415,
    original_index: 14,
    percentage_rank: 5,
  },
  {
    name: "SAUJANYA  KHATIWADA",
    percentage: 78,
    gpa: 3.375,
    original_index: 17,
    percentage_rank: 6,
  },
  {
    name: "SUJIT  LIMBU",
    percentage: 75.38,
    gpa: 3.28,
    original_index: 23,
    percentage_rank: 7,
  },
  {
    name: "SATYAM  LIMBU",
    percentage: 65.38,
    gpa: 2.88,
    original_index: 16,
    percentage_rank: 8,
  },
  {
    name: "SURAJ  SHRESTHA",
    percentage: 61.69,
    gpa: 2.785,
    original_index: 24,
    percentage_rank: 9,
  },
  {
    name: "JEMS  LIMBU",
    percentage: 58.77,
    gpa: 2.63,
    original_index: 3,
    percentage_rank: 10,
  },
  {
    name: "ALEX  RAI",
    percentage: 56.92,
    gpa: 2.555,
    original_index: 1,
    percentage_rank: 11,
  },
  {
    name: "ALEX  LIMBU",
    percentage: 0,
    gpa: 0,
    original_index: 0,
    percentage_rank: 12,
  },
  {
    name: "BIBECHANA  MAGAR",
    percentage: 0,
    gpa: 0,
    original_index: 2,
    percentage_rank: 13,
  },
  {
    name: "JOBIAL  LIMBU",
    percentage: 0,
    gpa: 0,
    original_index: 4,
    percentage_rank: 14,
  },
  {
    name: "MAMATA  TAMANG",
    percentage: 0,
    gpa: 0,
    original_index: 5,
    percentage_rank: 15,
  },
  {
    name: "MENUKA  SHAH",
    percentage: 0,
    gpa: 0,
    original_index: 6,
    percentage_rank: 16,
  },
  {
    name: "PRABAHANG  RAI",
    percentage: 0,
    gpa: 0,
    original_index: 9,
    percentage_rank: 17,
  },
  {
    name: "PRABINA  TAMANG",
    percentage: 0,
    gpa: 0,
    original_index: 10,
    percentage_rank: 18,
  },
  {
    name: "PRASHNA  LIMBU",
    percentage: 0,
    gpa: 0,
    original_index: 11,
    percentage_rank: 19,
  },
  {
    name: "SAGAR  RAI",
    percentage: 0,
    gpa: 0,
    original_index: 13,
    percentage_rank: 20,
  },
  {
    name: "SARA  SIDDIQUE",
    percentage: 0,
    gpa: 0,
    original_index: 15,
    percentage_rank: 21,
  },
  {
    name: "SAYEEL  BASNET",
    percentage: 0,
    gpa: 0,
    original_index: 18,
    percentage_rank: 22,
  },
  {
    name: "SHRISTI  MANDAL",
    percentage: 0,
    gpa: 0,
    original_index: 19,
    percentage_rank: 23,
  },
  {
    name: "SOMIYA  RAI",
    percentage: 0,
    gpa: 0,
    original_index: 21,
    percentage_rank: 24,
  },
  {
    name: "SPARSHA  RAI",
    percentage: 0,
    gpa: 0,
    original_index: 22,
    percentage_rank: 25,
  },
  {
    name: "SUYOG  RAI",
    percentage: 0,
    gpa: 0,
    original_index: 25,
    percentage_rank: 26,
  },
  {
    name: "VICKEY  THAKUR",
    percentage: 0,
    gpa: 0,
    original_index: 26,
    percentage_rank: 27,
    gpa_rank: 27,
  },
];

const ResultTable = () => {
  interface ExportTableToExcelProps {
    tableId: string;
    fileName: string;
  }

  const exportTableToExcel = ({
    tableId,
    fileName,
  }: ExportTableToExcelProps): void => {
    const table = document.getElementById(tableId) as HTMLTableElement;
    const ws = XLSX.utils.table_to_sheet(table); // Convert table to sheet

    // Define the column widths (example: 20 for Name, 10 for Percentage, etc.)
    const colWidths = [
      { wpx: 200 }, // Name column width
      { wpx: 100 }, // Percentage column width
      { wpx: 50 }, // GPA column width
      { wpx: 120 }, // Original Index column width
      { wpx: 150 }, // Percentage Rank column width
    ];

    // Set the column widths
    ws["!cols"] = colWidths;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Convert to Excel file
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(data, `${fileName}.xlsx`);
  };

  return (
    <div className="p-4">
      {/* HTML Table */}
      <table id="myTable">
        <thead>
          <tr className="bg-blue-500">
            <th className="border border-gray-400 px-4 py-2" colSpan={10}>
              Name
            </th>
            <th
              className="border border-gray-400 px-4 py-2"
              colSpan={19}
              rowSpan={2}
            >
              Depot Secondary School
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">
                {student.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.percentage}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.gpa}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.original_index}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {student.percentage_rank}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Export Button */}
      <button
        onClick={() =>
          exportTableToExcel({ tableId: "myTable", fileName: "ExportedTable" })
        }
        className="bg-green-500 px-4 py-2 mt-4 rounded"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default ResultTable;
