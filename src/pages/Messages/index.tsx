import React, { useContext } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import { WindowContext } from "../../context/WindowContextProvider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { VEHICLE_STATUSES } from "../../utils";
import styled from "styled-components";
const MessagesComponent = styled.div`
  .unread {
    background: rgba(51, 170, 51, 0.4);
  }
`;
export interface MessagesProps {
  open: boolean;
  onClose: (value: string) => void;
}
export interface IMessage {
  id: number;
  vehicle: string;
  vin: string;
  message: string;
  unread: boolean;
}
const rows: IMessage[] = [
  {
    id: 1,
    vehicle: "BMW X3 2020",
    vin: "JH4NA1261PT000302",
    message: "AT_TERMINAL",
    unread: true,
  },
  {
    id: 2,
    vehicle: "VW GOLF 2020",
    vin: "JH4NA1261PT000302",
    message: "DELIVERED",
    unread: false,
  },
  {
    id: 3,
    vehicle: "BMW X3 2020",
    vin: "JH4NA1261PT000302",
    message: "DELIVERED",
    unread: false,
  },
];
export const Messages: React.FC<MessagesProps> = ({ open, onClose }) => {
  const { clientWidth } = useContext(WindowContext);
  console.log(clientWidth, "WIDTH");
  const renderVehicleStatus = (status: string) => {
    console.log(status, "STATUS");
    return `Vehicle status was changed to ${VEHICLE_STATUSES[status]}`;
  };
  const columns: GridColDef[] = [
    { field: "vehicle", headerName: "Vehicle", flex: 1 },
    {
      field: "vin",
      headerName: "VIN",
      flex: 1,
      sortable: false,
      width: 180,
    },
    {
      field: "message",
      headerName: "Message",
      type: "string",
      width: 300,
      renderCell: (params: GridRenderCellParams) => {
        const status: string = params.value;
        return renderVehicleStatus(status);
      },
    },
  ];
  return (
    <MessagesComponent>
      <Dialog fullWidth onClose={onClose} open={open}>
        <DialogTitle>Messages</DialogTitle>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            disableSelectionOnClick
            rows={rows}
            columns={columns.map((column) => ({
              ...column,
              cellClassName: ({ row }) => (row.unread ? "unread" : ""),
            }))}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20, 50]}
          />
        </div>
      </Dialog>
    </MessagesComponent>
  );
};
