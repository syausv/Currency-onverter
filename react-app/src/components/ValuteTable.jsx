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




export default function DataTable(props) {
  console.log(props)
  const rows = [{props}];
  return (
    <div style={{ height: 660, width: '100%' }}>
      <DataGrid className="post2"
        rows= {rows}
                key={rows.id}
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
