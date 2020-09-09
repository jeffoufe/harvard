import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MissingImage } from '../../components';
import { fetchFeed } from '../../reducers/feed/actions';
import { FeedState, Print } from '../../reducers/feed/types';
import { CircularProgress, Grid, Paper } from '@material-ui/core';
import useStyles from './styles';
import Context from '../../Context';
import clsx from 'clsx';

const Feed = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isMenuOpen] = useContext(Context);
    const { prints, loading } = useSelector((state: FeedState) => state);

    useEffect(() => {
        dispatch(fetchFeed())
    }, [dispatch]);

    return <>
        {loading && !prints && (
            <div className={clsx(classes.initialLoading, isMenuOpen && classes.initialLoadingShift)}>
                <CircularProgress />
            </div>
        )}
        {!!prints.length && (
            <div className={classes.grid}>
                <Grid container spacing={3}>
                    {prints.map((print: Print) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} direction={"row"}>
                            <Paper className={classes.paper}>
                                {!print.images.length 
                                    ? <MissingImage />
                                    : (
                                        <img 
                                            alt={print.title}
                                            src={(print.images[0] || {}).baseimageurl}
                                            className={classes.printImage}
                                        />
                                    )
                                }
                                <div>{print.title}</div>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )}
    </>
}

Feed.displayName = 'Feed';
export default Feed;