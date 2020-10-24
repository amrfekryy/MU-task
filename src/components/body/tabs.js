import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from './table'
import { statuses } from 'helpers/fakeStudentsService'
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux'

function TabPanel(props) {
  const { value, index, status, students } = props;
  const { t } = useTranslation()

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      // style={{ padding: '3vh 5vw'}}
    >
      {value === index 
        ? students
          ? status.code === 'all' 
            ? <Table data={students}/> 
            : <Table data={students.filter(student => student.st_code === status.code)}/>
          : <div style={{ padding: '20px', textAlign: 'center'}}> 
              {t("Click 'Applicants' in sidebar")} </div>
        : ''}
    </div>
  );
}

const TabPanel_ = connect(state => ({ students: state.students.data }), null)(TabPanel)


export default function CenteredTabs() {
  const { t } = useTranslation()

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue)
  
  const tabs = [{full: 'All', code: 'all'}, ...statuses]

  return (
    <Paper style={{ flexGrow: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabs.map(status => <Tab label={t(status.full)} />)}
      </Tabs>

      {tabs.map( (status, index) => <TabPanel_ {...{ value, index, status }}/>)}
    
    </Paper>
  );
}
