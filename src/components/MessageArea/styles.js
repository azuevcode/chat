import { makeStyles } from '@material-ui/core/styles';

export const useMessageAreaStyles = makeStyles({
  messageAreaContainer: {
    width: '100%',
    margin: '10px 0 20px',
    padding: '10px 5px 0',
    height: 400,
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
