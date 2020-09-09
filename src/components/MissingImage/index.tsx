import React from 'react';
import useStyles from './styles';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

const MissingImage = () => {
    const classes = useStyles();
    return (
        <div className={classes.missingImageContainer}>
            <BrokenImageIcon className={classes.missingImageIcon} fontSize='large' />
        </div>
    )
}

MissingImage.displayName = 'MissingImage';
export default MissingImage;