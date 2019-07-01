import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import { useStyles } from './styles';

const Typebar = ({
  placeholder,
  buttonTitle,
  value,
  onChange,
  onSubmit,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.bar}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        multiline
        fullWidth
        onKeyPress={e => e.key === 'Enter' && onSubmit(e)}
        onChange={onChange}
        value={value}
      />
      <Fab
        variant="extended"
        size="small"
        color="primary"
        className={classes.button}
        onClick={onSubmit}
      >
        <Icon fontSize='small' className={classes.sendIcon}>send</Icon>
        <span>{buttonTitle}</span>
      </Fab>
    </Paper>
  );
};

export default Typebar;
