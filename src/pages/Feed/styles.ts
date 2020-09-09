import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        initialLoading: {
            position: 'absolute',
            left: 'calc(50vw - 25px)',
            top: 'calc(50vh)',
            transition: theme.transitions.create(['left'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        initialLoadingShift: {
            left: 'calc(50vw - 25px + 120px)',
        },
        grid: {
            flexGrow: 1
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            marginBottom: 10
        },
        printImage: {
            maxHeight: 200,
            maxWidth: '100%'
        }
    })
)