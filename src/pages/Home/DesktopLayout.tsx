import Grid from "@mui/material/Grid";
import { BasicTable } from "../../components/BasicTable";
import { Card, Typography, CardContent } from '@mui/material';
import {KPIChart} from "../../components/kpi";

export const DesktopLayout = () => {
    const cards = [
        {
            title: 'ORDERS',
            value: 55,
            difference: 'Orders',
            duration: 1.25,
        },
        {
            title: 'TOTAL VEHICLES',
            value: 65,
            duration: 1.5,
        },
        {
            title: 'COMPLETED ORDERS',
            value: 40,
            progress: true,
            duration: 1.75,
        },
        {
            title: 'Containers',
            value: 40,
            duration: 2.25,
        },
        ];
  return (
    <>
      <Grid container spacing={4}>
        {cards.map((item, index) => {
          return (
            <Grid key={item.title + index} item lg={3} sm={6} xl={3} xs={12}>
              <KPIChart {...item} />
            </Grid>
          );
        })}
      </Grid>
      <Grid marginTop={2} container spacing={4}>
      <Grid item xs={12} lg={8}>
        <Card elevation={10}>
            <CardContent>
                <BasicTable />
            </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} sm={12} xl={4} xs={12}>
        <Card sx={{ p: 1 }} elevation={10}>
          <Typography fontSize={24} className="cardHeader" color="textSecondary" gutterBottom>Search by vin here</Typography>
        </Card>
      </Grid>
      </Grid>
    </>      
  );
};
