import React, { useContext } from 'react';
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { GridToolbar } from "@mui/x-data-grid/components";
import { WindowContext } from "../../context/WindowContextProvider";
import axiosIntance from '../../axiosInstance';
import BasicMenu from '../Vehicles/ActionMenu';
import { TRUCK_STATUSES } from '../../utils';
const columns: GridColDef[] = [
  { 
    field: 'status',
    headerName: 'Status',
    flex: 1,
  },
  { field: 'containerNumber', headerName: 'Container number', flex: 1 },
  {
    field: 'shippingLine',
    align: 'left',
    headerAlign: 'left',
    headerName: 'Shipping line',
    type: 'string',
    
    flex: 1
  },
  {
    field: 'expectedDate',
    headerName: 'Expected date',
    flex: 1,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150
  },
  {
    field: 'documents',
    headerName: 'Documents',
    type: 'string'
  },
  {
    field: 'vehicles',
    sortable: false,
    flex: 1,
    headerName: 'Loaded vehicles',
    renderCell: () => (
        Math.floor(Math.random() * 10)
    ),
  },
];
interface IContainer {
    id: string;
    status: TRUCK_STATUSES,
    containerNumber: string,
    shippingLine: string,
    expectedDate: string;
    documents: string[];
    vehicles: string[];
  }
const renderDetailsButton = (params: any) => {
  return (
      <BasicMenu />
  )
}
const rows: IContainer[] = [
    { id: "1", status: TRUCK_STATUSES.DELIVERED, containerNumber: "CB2222AM", shippingLine: "Vin Trade", expectedDate: "01-02-2022", documents: ["CRM"], vehicles: ["CRM"] },
    { id: "2", status: TRUCK_STATUSES.DISPATCHED, containerNumber: "B2222AM", shippingLine: "Alco Impex", expectedDate: "01-02-2022", documents: ["CRM"], vehicles: ["CRM"] },
    { id: "3", status: TRUCK_STATUSES.LOADED, containerNumber: "A2222AM", shippingLine: "Smart", expectedDate: "01-02-2022", documents: ["CRM"], vehicles: ["CRM"] },
  ];
export const Containers = () => {
  const { clientWidth } = useContext(WindowContext);
  const getContainers = async () => {
    const res = await axiosIntance.get('/containers');
    console.log(res, "RES")
  }
  React.useEffect(() => {
    getContainers();
    console.log("VEHICLES")
  }, [])
  console.log(clientWidth, "WIDTH")
  
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{marginBottom: 20, display: "flex", gap: 10}}>
        <Chip clickable onClick={handleClick} label="Loaded" variant="outlined" />
        <Chip clickable onClick={handleClick} label="Delivered" variant="outlined" />
      </div>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        onSelectionModelChange={itm => console.log(itm)}
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5, 10, 20, 50]}
        checkboxSelection
      />
    </div>
    </Box>
  );
};
