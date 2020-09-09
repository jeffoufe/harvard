import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            marginBottom: 10
        },
        printImage: {
            maxHeight: 200,
            minHeight: 200,
            maxWidth: '100%'
        },
        imageSkeleton: {
            height: 200
        },
        legend: {
            marginTop: 10
        }
    })
)