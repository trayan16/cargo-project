import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { BasicTable } from "../../components/BasicTable";
import { Card } from '@mui/material';
import {KPIChart} from "../../components/kpi";

export const Home = () => {
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {cards.map((item, index) => {
          return (
            <Grid className="card"  key={item.title + index} item lg={3} sm={6} xl={3} xs={12}>
              <KPIChart {...item} />
            </Grid>
          );
        })}
      </Grid>
      <Grid marginTop={2} container spacing={4}>
      <Grid item xs={12} lg={8}><Card elevation={10}><BasicTable /></Card></Grid>
      <Grid item sm={6}>
        <Card elevation={10}>
          <>
      </>
        </Card>
      </Grid>
      </Grid>
    </Box>
  );
};
