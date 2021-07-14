import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
    selectContainer: {
        maxWidth: 200,
        margin: '0 auto'
    },
    btnGroupContainer: {
        position: 'relative',
        margin: '10px auto',
        maxWidth: 300
    },
    additionalFormContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: -5
    },
    input: {
        flex: '50%',
        padding: 5
    },
    select: {
        width: '100%'
    }
}));
