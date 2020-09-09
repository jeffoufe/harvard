import React from 'react';
import { MissingImage } from '..';
import { Grid, Paper } from '@material-ui/core';
import useStyles from './styles';
import { Print as PrintType, People } from '../../reducers/feed/types';

interface PrintProps {
    print: PrintType,
}

const Print = ({ print }: PrintProps) => {
    const classes = useStyles();

    const artist = (print.people || []).find((people: People) => people.role === 'Artist');

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
                <div className={classes.legend}>
                    <div>{print.title}</div>
                    {!!artist && !!artist.displayname && <div>{artist.displayname}</div>}
                    <div>{print.dated}</div>
                </div>
            </Paper>
        </Grid>
    );
}

Print.displayName = 'Print';
export default Print;