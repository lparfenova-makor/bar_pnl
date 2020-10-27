import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels () {
  const [state, setState] = React.useState({
    checked2020: true,
    checked2019: false,
    checked2018: false

  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checked2020} onChange={handleChange} name='checked2020' color='primary' />}
        label='2020'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked2019}
            onChange={handleChange}
            name='checked2019'
            color='primary'
          />
        }
        label='2019'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked2018}
            onChange={handleChange}
            name='checked2018'
            color='primary'
          />
        }
        label='2018'
      />
    </FormGroup>
  );
}
