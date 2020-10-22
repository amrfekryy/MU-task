import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from './table'


function TabPanel(props) {
  const { value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      // style={{ padding: '3vh 5vw'}}
    >
      {value === index && <Table />}
    </div>
  );
}


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // height: '40%'
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => setValue(newValue)

  const tabs = [
    'All', 'Under Review', 'Initial Acceptance', 'Conditional Acceptance', 'Rejected'
  ]

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabs.map(label => <Tab label={label} />)}
      </Tabs>

      {tabs.map( (label, index) => <TabPanel value={value} index={index} />)}
    
    </Paper>
  );
}
