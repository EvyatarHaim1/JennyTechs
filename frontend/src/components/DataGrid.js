
import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
    Button,
} from "@mui/material";

export default function Table({ products }) {
    const columns = [
        {
            field: 'iso_code',
            headerName: 'ISO CODE',
            width: 140
        },
        {
            field: 'version',
            headerName: 'VERSION',
            width: 140
        },
        {
            field: 'created_by',
            headerName: 'CREATED BY',
            width: 160
        },
        {
            field: 'modified_by',
            headerName: 'MODIFIED BY',
            width: 165

        },
        {
            field: 'category',
            headerName: 'CATEGORY',
            width: 150
        },
        {
            field: 'company',
            headerName: 'COMPANY',
            width: 140
        },
        {
            field: 'status',
            headerName: 'STATUS',
            width: 150
        },
    ];
    const rows = products?.map(product => {
        return {
            id: product._id,
            iso_code: product.iso_code,
            version: product.version,
            created_by: product.created_by,
            modified_by: product.modified_by,
            category: product.category,
            company: product.company,
            status: product.status
        }
    })

    const downloadPdf = () => {
        const doc = new jsPDF();
        doc.text("JennyTechs products", 20, 10);
        doc.autoTable({
            theme: "grid",
            columns: columns.map((col) => ({ header: col.headerName, dataKey: col.field })),
            body: rows,
        });
        doc.save("Jenny-Tech-table.pdf");
    };

    return (
        <div>

            <Box sx={{ height: 270, width: '70%', margin: "auto", marginTop: "50px" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableSelectionOnClick
                    hideFooter
                    color="primary"
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
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