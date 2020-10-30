import React, { useState } from 'react';
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

export default function OutlinedButtons(prop) {
  const classes = useStyles();


  const handleClick = (e) => {
    const value = e.currentTarget.value
    console.log('value', value)
    // prop.parent(dataService.query(value), value);
    prop.parent(dataService.query(value), value);

  };



  return (
    <div className={classes.root}>
      <Button variant='outlined' value='income' onClick={(e) => handleClick(e)}>Income</Button>
      <Button variant='outlined' value='outcome' onClick={(e) => handleClick(e)} color='primary'>
        Outcome
      </Button>
      <Button variant='outlined' value='difference' onClick={(e) => handleClick(e)} color='secondary'>
        Difference
      </Button>
    </div>
  );
}
