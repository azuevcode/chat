import { makeStyles } from '@material-ui/core/styles';
import { randomColor } from './utils';

export const useAvatarAreaStyles = makeStyles({
  avatar: {
    backgroundColor: '#3f51b5',
    width: 80,
    height: 80,
    boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.3)',
  },
});
