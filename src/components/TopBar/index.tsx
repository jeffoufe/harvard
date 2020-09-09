import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import clsx from 'clsx';
import Context from "../../Context";

const TopBar = () => {
    const classes = useStyles();
    const { isMenuOpen, setMenuOpen } = useContext(Context);
    const handleDrawerOpen = () => setMenuOpen(true);
    
    return (
        <AppBar 
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: isMenuOpen,
            })}
        >
            <Toolbar>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu" 
                    className={clsx(classes.menuButton, isMenuOpen && classes.hide)}
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Prints
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

TopBar.displayName = 'TopName';
export default TopBar;