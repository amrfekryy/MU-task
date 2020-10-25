import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Group from '@material-ui/icons/Group';
import EventNote from '@material-ui/icons/EventNote';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useTranslation } from 'react-i18next'
import fakeStudentsService from 'helpers/fakeStudentsService'
import { connect } from 'react-redux'
import { mapDispatchToProps } from 'redux/tools'
import controls from 'styles/_controls.scss'

function Sidebar (props) {
  const { state, toggleDrawer, anchor } = props
  const { t } = useTranslation()

  const handleApplicantsClick = () => {
    props.setMain('students', fakeStudentsService({ count: 200 }))
  }

  const listItems = [
    {label: 'Admission Officer', icons: [ArrowForwardIosIcon, AccountCircle]},
    {divider: true},
    {label: 'Applicants', icons: [Group], onClick: handleApplicantsClick},
    {label: 'Dates', icons: [EventNote]},
    {label: 'Sign Out', icons: [ExitToApp]},
  ]

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      <div
        style={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {listItems.map((item, key) => {
            if (item.divider) return <Divider key={key+1} style={{margin: '8px 0'}} /> 
            const icons = item.icons.map( Icon => <Icon style={{color: controls['sidebar-color']}} /> )

            return <ListItem button key={key+1} onClick={item.onClick || ''}>
              <ListItemIcon>{icons}</ListItemIcon>
                <ListItemText primary={t(item.label)} disableTypography className='sidebar'/>
              </ListItem>
          })}
        </List>
      </div>
    </SwipeableDrawer>
  )
}

export default connect(null, mapDispatchToProps)(Sidebar)
