import * as React from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import { LoginForm } from "./LoginForm";
import styled from "styled-components";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const BlurryDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  backdropFilter: "blur(5px)",
  // other styles here...
}));
export const LoginDialog = () => {
  const [open, setOpen] = React.useState<boolean>(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  const a11yProps = (index: number) => {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  };
  const handleClose = () => {
    return false;
  };
  return (
    <BlurryDialog  onClose={handleClose} open={open} fullWidth maxWidth="md">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Search vehicle" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <LoginForm setOpenDialog={setOpen} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Search
        </TabPanel>
    </BlurryDialog>
  );
};
