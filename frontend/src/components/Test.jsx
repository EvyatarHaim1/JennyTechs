import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button, Table } from "@mui/material";
const studentData = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    year: 2015,
    fee: 167000,
  },
  {
    id: 2,
    name: "Vikas",
    email: "vikas@gmail.com",
    year: 2013,
    fee: 785462,
  },

  {
    id: 3,
    name: "Rahul",
    email: "rahul@gmail.com",
    year: 2020,
    fee: 784596,
  },
];
const Test = () => {
  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Year", field: "year", type: "numeric" },
    { title: "Fee", field: "fee", type: "currency" },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("Student Details", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: studentData,
    });
    doc.save("table.pdf");
  };

  return (
    <div className="table">
      <Button
        style={{ color: "white", backgroundColor: "#03a9f4" }}
        onClick={downloadPdf}>
        Download Pdf
      </Button>
      <Table title="Student Details" columns={columns} data={studentData} />
    </div>
  );
};

export default Test;
