import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
            <Grid key={item.title + index} item lg={3} sm={6} xl={3} xs={12}>
              <KPIChart {...item} />
            </Grid>
          );
        })}
      </Grid>
      {/* <Grid marginTop={2} container spacing={4}>
        {cards.map((item, index) => {
          return (
            <Grid key={item.title + index} item lg={3} sm={6} xl={3} xs={12}>
              <KPIChart {...item} />
            </Grid>
          );
        })}
      </Grid> */}
    </Box>
  );
};
