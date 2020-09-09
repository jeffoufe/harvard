import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingPrint, Print } from '../../components';
import { fetchFeed } from '../../reducers/feed/actions';
import { FeedState, Print as PrintType } from '../../reducers/feed/types';
import useStyles from './styles';
import InfiniteScroll from 'react-infinite-scroll-component'; 
import { Alert } from '@material-ui/lab';

const LoadingPrints = [...Array(4).keys()].map((index: number) => <LoadingPrint key={`loading-print-${index}`} />)

const Feed = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const fetchPrints = () => dispatch(fetchFeed());
    const { prints, loading, nextUrl, error } = useSelector((state: FeedState) => state);

    useEffect(fetchPrints, [dispatch]);

    return (
        <>
            {error && <Alert severity="error" variant="filled">
                {error}
            </Alert>}
            <div className={classes.grid}>
                    {/* 
                    // @ts-ignore */}
                    <InfiniteScroll
                        className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3'
                        dataLength={prints.length}
                        next={fetchPrints}
                        hasMore={!!nextUrl}
                        pullDownToRefresh={false}
                        loader={LoadingPrints}
                    >
                        {loading && !prints.length && LoadingPrints}
                        {prints.map((print: PrintType, index: number) => (
                            <Print print={print} key={`print-${index}`} />
                        ))}
                    </InfiniteScroll>
            </div>
        </>
    );
}

Feed.displayName = 'Feed';
export default Feed;