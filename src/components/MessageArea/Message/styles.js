import { makeStyles } from '@material-ui/core/styles';

export const useMessageStyles = makeStyles({
  messageContainer: {
    display: 'flex',
    justifyContent: props => props.isMine ? 'flex-start' : 'flex-end',
    marginBottom: 20,
    wordBreak: 'break-word',
  },
  message: ({ isMine }) => ({
    padding: '10px 20px',
    position: 'relative',
    boxShadow: '0px 1px 4px rgba(0,0,0, .2)',
    borderRadius: 10,
    borderTopRightRadius: isMine ? 'auto' : 0,
    borderTopLeftRadius: isMine ? 0 : 'auto',
    backgroundColor: isMine ? '#fff' : '#3f51b5',
    color: isMine ? '#000' : '#fff',
    // '&:before': {
    //   width: 0,
    //   left: isMine ? 5 : 'unset',
    //   right: isMine ? 0 : 5,
    //   border: `5px solid ${isMine ? '#fff' : '#3f51b5'}`,
    //   height: 0,
    //   content: '""',
    //   position: 'absolute',
    //   transform: `rotate(${isMine ? -50 : -40}deg)`,
    //   top: -3,
    //   boxShadow: '1px -1px 2px 0px rgba(0, 0, 0, 0.1)',
    // },
  }),
});
