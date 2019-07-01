import React from 'react';

import { useMessageAreaStyles } from './styles';

const MessageArea = () => {
  const classes = useMessageAreaStyles();

  return (
      <div className={classes.container}></div>
  );
};

export default MessageArea;
