import React from "react";
import Grid from "@material-ui/core/Grid";
import { DashboardStyle } from "./DashboardStyle";
import { useTheme } from "@material-ui/core/styles";

const Dashboard = (props) => {
  const theme = useTheme();
  const classes = DashboardStyle(theme);
  
  return (
    <div className={classes.dashboardContainer}>
      <h1>Dashboard</h1>
    </div>
  );
};
export default Dashboard;
