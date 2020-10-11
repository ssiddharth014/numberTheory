import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import TextFieldsTwoToneIcon from '@material-ui/icons/TextFieldsTwoTone';

import MenuIcon from '@material-ui/icons/Menu';
import { TextFieldsTwoTone } from '@material-ui/icons';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Dashboard'].map((text, index) => (

          <ListItem button key={text}>
              
              <ListItem button key={text}>
                  <Link to="/">
                  <DashboardIcon/>
                  {text}
                  </Link>

          </ListItem>
            
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Form'].map((text, index) => (
          <ListItem button key={text}>
              
              <Link to="/Form">
              <TextFieldsTwoToneIcon/>
                  {text}
                  </Link>
            
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button  onClick={toggleDrawer(anchor, true)}><MenuIcon color="primary"/></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}