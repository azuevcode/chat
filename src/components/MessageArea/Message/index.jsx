import React from 'react';
import { useMessageStyles } from './styles';

const Message = ({ text, isMine }) => {
  const classes = useMessageStyles({ isMine });

  return (
    <div className={classes.messageContainer}>
      <div className={classes.message}>{text}</div>
    </div>
  );
};

export default Message;
