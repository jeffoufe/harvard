import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles(() =>
    createStyles({
        missingImageContainer: {
            position: 'relative',
            width: '100%',
            height: 200,
        },
        missingImageIcon: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    })
)