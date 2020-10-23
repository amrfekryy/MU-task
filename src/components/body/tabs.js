import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from './table'
import fakeStudentsService, { statuses } from 'helpers/fakeStudentsService'
import { useTranslation } from 'react-i18next';

const data = fakeStudentsService({ count: 200 })

function TabPanel(props) {
  const { value, index, status } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      // style={{ padding: '3vh 5vw'}}
    >
      {value === index 
        ? status.code === 'all' 
          ? <Table data={data}/> 
          : <Table data={data.filter(student => student.st_code === status.code)}/>
        : ''}
    </div>
  );
}


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const { t } = useTranslation()

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue)
  
  const tabs = [{full: 'All', code: 'all'}, ...statuses]

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabs.map(status => <Tab label={t(status.full)} />)}
      </Tabs>

      {tabs.map( (status, index) => <TabPanel {...{ value, index, status }}/>)}
    
    </Paper>
  );
}
