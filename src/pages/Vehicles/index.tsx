import { useContext } from 'react';
import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { GridToolbar } from "@mui/x-data-grid/components";
import { WindowContext } from "../../context/WindowContextProvider";

const columns: GridColDef[] = [
  { field: 'vehicle', headerName: 'Vehicle', flex: 1 },
  { field: 'status', headerName: 'Status', width: 100 },
  {
    field: 'origin',
    align: 'left',
    width: 200,
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
  },
  {
    field: 'destination',
    headerName: 'Destination',
    type: 'string',
  },
];
const rows = [
  { id: 1, status: 'Dispatched', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 2, status: 'Dispatched', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 3, status: 'Dispatched', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 4, status: 'Dispatched', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 5, status: 'Delivered', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 6, status: 'Delivered', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 7, status: 'At Terminal', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 8, status: 'At Terminal', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 123, status: 'Delivered', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 45, status: 'Delivered', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 675, status: 'At Terminal', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 686, status: 'At Terminal', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 123123, status: 'Delivered', vehicle: 'VW GOLF GTI 2020', origin: "Texas", created: "01-02-2022", destination: "Hamburg" },
  { id: 1236, status: 'Delivered', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Dubai" },
  { id: 67, status: 'At Terminal', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 865, status: 'At Terminal', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 23423, status: 'Delivered', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 123, status: 'Delivered', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 454, status: 'At Terminal', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
  { id: 12332, status: 'At Terminal', vehicle: 'BMW X3 2020', origin: "Texas", created: "01-02-2022", destination: "Rotterdam" },
];
export const Vehicles = () => {
  const { clientWidth } = useContext(WindowContext);
  console.log(clientWidth, "WIDTH")
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const customScrollBar = {
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
      width: '0.4em',
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{marginBottom: 20, display: "flex", gap: 10}}>
        <Chip clickable onClick={handleClick} label="All" variant="outlined" />
        <Chip clickable onClick={handleClick} label="Delivered" variant="outlined" />
        <Chip clickable onClick={handleClick} label="At Terminal" variant="outlined" />
        <Chip clickable onClick={handleClick} label="Dispatched" variant="outlined" />
        <Chip clickable onClick={handleClick} label="Loaded" variant="outlined" />
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
        sx={customScrollBar}
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
