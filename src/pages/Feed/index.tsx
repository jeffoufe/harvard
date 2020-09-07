import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFeed } from '../../reducers/feed/actions';

const Feed = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFeed())
    }, []);

    return <div />
}

Feed.displayName = 'Feed';
export default Feed;