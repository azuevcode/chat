import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    bar: {
      display: 'flex',
      margin: '10px 0',
      borderRadius: 17,
      padding: 5,
      width: '100%',
    },
    input: {
      padding: '0 10px',
      flex: 1,
      maxHeight: 150,
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    button: {
      alignItems: 'flex-start',
    },
    sendIcon: {
      marginRight: 5,
      transform: 'rotate(-45deg)',
    },
});
