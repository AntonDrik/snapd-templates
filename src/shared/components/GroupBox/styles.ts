import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
    root: {
        padding: 15,
        border: '1px solid #d1d1d1',
        borderRadius: '.25rem',
        position: 'relative'
    },
    caption: {
        position: 'absolute',
        top: -13,
        left: 13,
        backgroundColor: 'inherit',
        padding: '0 5px'
    }
}));
