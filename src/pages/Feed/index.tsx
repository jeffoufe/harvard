import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingPrint, Print } from '../../components';
import { fetchFeed } from '../../reducers/feed/actions';
import { FeedState, Print as PrintType } from '../../reducers/feed/types';
import useStyles from './styles';
import InfiniteScroll from 'react-infinite-scroll-component'; 

const LoadingPrints = [...Array(4).keys()].map((index: number) => <LoadingPrint key={`loading-print-${index}`} />)

const Feed = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { prints, loading, nextUrl } = useSelector((state: FeedState) => state);

    useEffect(() => {
        dispatch(fetchFeed())
    }, [dispatch]);

    return (
        <div className={classes.grid}>
                {/* 
                // @ts-ignore */}
                <InfiniteScroll
                    className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3'
                    dataLength={prints.length}
                    next={() => dispatch(fetchFeed())}
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
    );
}

Feed.displayName = 'Feed';
export default Feed;