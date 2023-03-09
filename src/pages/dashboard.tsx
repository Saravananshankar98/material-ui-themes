import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import CheckoutExample from "./CheckoutExample";
import LoginPage from "./login-page";
import SignUpExample from "./sign-up";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const tabStyle = {
  minWidth: { sm: 10 },
};
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function Dashboard() {
  const [tabIndex, setTabIndex] = useState<any>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };

  return (
    <>
      <Tabs value={tabIndex} onChange={handleChange} textColor="inherit">
        <Tab label="Log in" sx={tabStyle} />
        <Tab label="Sign Up" sx={tabStyle} />
        <Tab label="Check Out" sx={tabStyle} />
      </Tabs>

      <div>
        <TabPanel value={tabIndex} index={0}>
          <LoginPage />
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <SignUpExample />
        </TabPanel>
        <TabPanel value={tabIndex} index={2}>
          <CheckoutExample />
        </TabPanel>
      </div>
    </>
  );
}

export default Dashboard;
