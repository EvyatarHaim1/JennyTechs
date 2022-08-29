import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Select from "./Select";
import { columns } from "../tableContent";

function createData(
  ISOCODE,
  VERSION,
  CREATED,
  MODIFIED,
  CATEGORY,
  COMPANY,
  STATUS
) {
  return { ISOCODE, VERSION, CREATED, MODIFIED, CATEGORY, COMPANY, STATUS };
}

const rows = [
  createData(
    "1111",
    "Version1",
    "Joseph C",
    "Joseph C",
    "Type1",
    "15.08.21",
    "Company1",
    "Active"
  ),
  createData(
    "2222",
    "Version2",
    "Tal D",
    "Tal D",
    "Multi",
    "15.08.21",
    "Company3",
    "Approver request"
  ),
  createData(
    "3333",
    "Version2",
    "Joseph C",
    "Joseph C",
    "Type2",
    "15.08.21",
    "Company2",
    "Approver request"
  ),
  createData(
    "4444",
    "Version3",
    "Tal D",
    "Tal D",
    "Type1",
    "15.08.21",
    "Company1",
    "Approved"
  ),
];

export default function DenseTable() {
  const [iso, setIso] = useState("ASC");
  const [version, setVersion] = useState("ASC");
  const [created, setCreated] = useState("ASC");
  const [modified, setModified] = useState("ASC");
  const [category, setCategory] = useState("ASC");
  const [company, setCompany] = useState("ASC");
  const [status, setStatus] = useState("ASC");

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text("JennyTechs products", 20, 10);
    doc.autoTable({
      theme: "grid",
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: rows,
    });
    doc.save("table.pdf");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "80px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableColumns>
            <TableRow>
              <TableCell>
                ISO CODE
                <Select onChange={(e) => setIso(e.target.value)} />
              </TableCell>
              <TableCell align="right">
                VERSION
                <Select onChange={(e) => setVersion(e.target.value)} />
              </TableCell>
              <TableCell align="right">
                CREATED BY
                <Select onChange={(e) => setCreated(e.target.value)} />
              </TableCell>
              <TableCell align="right">
                MODIFIED BY
                <Select onChange={(e) => setModified(e.target.value)} />
              </TableCell>
              <TableCell align="right">
                CATEGORY
                <Select onChange={(e) => setCategory(e.target.value)} />
              </TableCell>
              <TableCell align="right">
                COMPANY
                <Select onChange={(e) => setCompany(e.target.value)} />
              </TableCell>
              <TableCell align="right">
                STATUS
                <Select onChange={(e) => setStatus(e.target.value)} />
              </TableCell>
            </TableRow>
          </TableColumns>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ISOCODE}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.ISOCODE}
                </TableCell>
                <TableCell align="center">{row.VERSION}</TableCell>
                <TableCell align="center">{row.CREATED}</TableCell>
                <TableCell align="center">{row.MODIFIED}</TableCell>
                <TableCell align="center">{row.CATEGORY}</TableCell>
                <TableCell align="center">{row.COMPANY}</TableCell>
                <TableCell align="center">{row.STATUS}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}>
        <Button
          style={{
            color: "white",
            backgroundColor: "#03a9f4",
            width: "150px",
          }}
          onClick={downloadPdf}>
          Download Pdf
        </Button>
      </div>
    </div>
  );
}

const TableColumns = styled(TableHead)(() => ({
  backgroundColor: "whitesmoke",
}));
