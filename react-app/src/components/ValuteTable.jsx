import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useState} from "react";


const columns = [
  { field: 'currencyName', headerName: 'Валюта', width: 300 },
  { field: 'unit', headerName: 'Единиц', width: 130 },
  {
    field: 'letterСode',
    headerName: 'Буквенный код',
    type: 'string',
    width: 130,
  },
  {
    field: 'currencyRate',
    headerName: 'Курс',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.currencyName || ''}`,
  },
];


const rows = [
  { id: 1, currencyName: 'Snow', unit: 'Jon', letterСode: 35 },
  { id: 2, currencyName: 'Lannister', unit: 'Cersei', letterСode: 42 },
  { id: 3, currencyName: 'Lannister', unit: 'Jaime', letterСode: 45 },
  { id: 4, currencyName: 'Stark', unit: 'Arya', letterСode: 16 },
  { id: 5, currencyName: 'Targaryen', unit: 'Daenerys', letterСode: null },
  { id: 6, currencyName: 'Melisandre', unit: null, letterСode: 150 },
  { id: 7, currencyName: 'Clifford', unit: 'Ferrara', letterСode: 44 },
  { id: 8, currencyName: 'Frances', unit: 'Rossini', letterСode: 36 },
  { id: 9, currencyName: 'Roxie', unit: 'Harvey', letterСode: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 660, width: '100%' }}>
      <DataGrid className={"post"}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 40]}
        checkboxSelection
      />
    </div>
  );
}
