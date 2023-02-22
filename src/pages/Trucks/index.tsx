import React, { useContext } from 'react';
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { GridToolbar } from "@mui/x-data-grid/components";
import { WindowContext } from "../../context/WindowContextProvider";
import axiosIntance from '../../axiosInstance';
import BasicMenu from '../Vehicles/ActionMenu';
const columns: GridColDef[] = [
  { 
    field: 'model',
    headerName: 'Vehicle',
    flex: 1,
    valueGetter: (params) => {
        console.log("TEST")
        const {model} = params.row.vehicle
        return model;
      }
  },
  { field: 'status', headerName: 'Status', flex: 1 },
  {
    field: 'origin',
    align: 'left',
    headerAlign: 'left',
    headerName: 'Origin',
    type: 'string',
    
    flex: 1
  },
  {
    field: 'created',
    headerName: 'Created',
    flex: 1,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150
  },
  {
    field: 'destination',
    headerName: 'Destination',
    type: 'string'
  },
  {
    field: 'date',
    sortable: false,
    flex: 1,
    headerName: 'Documents',
    renderCell: (params: GridRenderCellParams<Date>) => (
      renderDetailsButton(params)
    ),
  },
];
const renderDetailsButton = (params: any) => {
  return (
      <BasicMenu />
  )
}
const rows = [
  { id: 1, status: 'Dispatched', vehicle: { model: "bmw"}, origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
];
interface ITruck {
    id: string;
}
export const Trucks = () => {
  const { clientWidth } = useContext(WindowContext);
  const getTrucks = async () => {
    const res = await axiosIntance.get('/trucks');
    console.log(res, "RES")
  }
  React.useEffect(() => {
    getTrucks();
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
