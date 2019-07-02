import React from 'react';

import { useMessageAreaStyles } from './styles';

import Message from './Message';

const MessageArea = ({ messages }) => {
  const classes = useMessageAreaStyles();

  return (
    <div className={classes.messageAreaContainer}>
      {messages.map(({ message, isMine }) => <Message text={message} isMine={isMine} />)}
    </div>
  );
};

export default MessageArea;
