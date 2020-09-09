import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import useStyles from '../Print/styles';
import { Skeleton } from '@material-ui/lab';

const LoadingPrint = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
                <Skeleton variant='rect' height={200} />
                <Skeleton variant='text' className={classes.legend} />
                <Skeleton variant='text' />
                <Skeleton variant='text' />
            </Paper>
        </Grid>
    );
}

LoadingPrint.displayName = 'LoadingPrint';
export default LoadingPrint;