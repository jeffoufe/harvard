import React, { useState } from 'react';
import { Feed } from './pages';
import { Provider } from 'react-redux';
import store from './store';
import { TopBar, Drawer } from './components';
import Context from './Context';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import useDrawerStyles from './components/Drawer/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    },
  })
)

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();
  const drawerClasses = useDrawerStyles();
  return (
    <Provider store={store}>
      <Context.Provider value={[isMenuOpen, setMenuOpen]}>
        <div className={classes.root}>
          <CssBaseline />
          <TopBar />
          <Drawer />
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: isMenuOpen,
            })}
          >
            <div className={drawerClasses.drawerHeader} />
            <Feed />
          </main>
        </div>
      </Context.Provider>
    </Provider>
  );
}

App.displayName = 'App';

export default App;
