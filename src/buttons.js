import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import dataService from './data/data.service';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding: '0 30px'

    }
  }
}));

export default function OutlinedButtons (prop) {
  const classes = useStyles();
  const handleClick = () => {
    prop.parent(dataService.query());
  };

  return (
    <div className={classes.root}>
      <Button variant='outlined' onClick={handleClick}>Income</Button>
      <Button variant='outlined' color='primary'>
                Outcome
      </Button>
      <Button variant='outlined' color='secondary'>
                Difference
      </Button>
    </div>
  );
}
