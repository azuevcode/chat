import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import { useAvatarAreaStyles } from './styles';

const AvatarArea = () => {
  const classes = useAvatarAreaStyles();

  return (
    <Grid container justify="space-between" alignItems="center" className={classes.avatarContainer}>
      <Avatar className={classes.avatar}>I</Avatar>
      <Avatar className={classes.avatar}>U</Avatar>
    </Grid>
  );
};

export default AvatarArea;
