import makeStyles from '@material-ui/core/styles/makeStyles';
import {Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
    cardHeader: {
        backgroundColor: theme.palette.grey[100]
    },
    action: {
        margin: 0
    },
    successStatus: {
        color: theme.palette.success.main
    },
    errorStatus: {
        color: theme.palette.error.dark
    },
    notInitStatus: {
        color: theme.palette.info.light
    },
    warningStatus: {
        color: theme.palette.warning.light
    }
}));
