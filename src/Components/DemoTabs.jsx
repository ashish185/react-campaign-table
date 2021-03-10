import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import BasicTable from "./Table/BasicTable";
import TabPanel from "./TabPanel";
import { Constants } from '../string-constants.js';
import { connect } from "react-redux";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function DemoTabs({ past_events, live_events, upcoming_events }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label={Constants.Upcoming_Campaigns} {...a11yProps(0)} />
          <Tab label={Constants.Live_Campaigns} {...a11yProps(1)} />
          <Tab label={Constants.Past_Campaigns} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicTable data={upcoming_events} tabIndex={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BasicTable data={live_events} tabIndex={1} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BasicTable data={past_events} tabIndex={2} />
      </TabPanel>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    past_events: state.past_events,
    live_events: state.live_events,
    upcoming_events: state.upcoming_events
  };
}
export default connect(mapStateToProps)(DemoTabs);
