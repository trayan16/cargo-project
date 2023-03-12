import styled from 'styled-components';
export const mobileVersionWidth = 900;
export enum VehicleStatus {
  'TRANSIT',
  'LOADED',
  'AT TERMINAL',
  'UNLOADED',
  'LOADED ON THE TRUCK',
  'FINAL DESTINATION',
}
type ReverseMap<T> = T[keyof T];
export type VehicleStatusType = ReverseMap<typeof VehicleStatus>;
export enum TRUCK_STATUSES {
    "LOADED" = "LOADED",
    "AVAILABLE" = "AVAILABLE",
    "ASSIGNED" = "ASSIGNED",
}
export const GridActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`