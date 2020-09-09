import React, { useContext } from 'react';
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import BrushIcon from '@material-ui/icons/Brush';
import useStyles from './styles';
import Context from '../../Context';

const LeftDrawer = () => {
    const classes = useStyles();
    const { isMenuOpen, setMenuOpen } = useContext(Context);
    const handleDrawerClose = () => setMenuOpen(false);

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={isMenuOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div>
                <IconButton onClick={handleDrawerClose} className={classes.homeButton}>
                    <ChevronLeftIcon />
                    Harvard
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem>
                        <ListItemIcon>
                            <BrushIcon />
                        </ListItemIcon>
                        <ListItemText primary='Prints' />
                </ListItem>
            </List>
        </Drawer>
    )
}

LeftDrawer.displayName = 'Drawer';
export default LeftDrawer;