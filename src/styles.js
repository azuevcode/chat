import { makeStyles } from '@material-ui/core/styles';

export const useGlobalStyles = makeStyles({
  '@global': {
    'html': {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    'body': {
      overflow: 'hidden',
    },
    '#root': {
      maxWidth: 800,
      minHeight: '100vh',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

export const useAppStyles = makeStyles({
    container: {
      boxShadow: '0px 1px 2px rgba(0,0,0, 0.2)',
      padding: 40,
    },
});

