import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
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

export default function DenseTable({ products }) {
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
              <TableCell sortDirection="false">
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
            {products.map((product) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell
                  component="th"
                  scope="row"
                  options={{ sortable: true }}>
                  {product.iso_code}
                </TableCell>
                <TableCell align="center">{product.version}</TableCell>
                <TableCell align="center">{product.created_by}</TableCell>
                <TableCell align="center">{product.modified_by}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.company}</TableCell>
                <TableCell align="center">{product.status}</TableCell>
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
