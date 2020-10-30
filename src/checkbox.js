import React, { useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    2020: true,
    2019: false,
    2018: false
  });

  const handleChange = (event) => {
    const params = { ...state, [event.target.name]: event.target.checked };
    setState(params);
    props.updateYears(params, false);

  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state['2020']}
          onChange={handleChange} name='2020' color='primary' />}
        label='2020'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state['2019']}

            onChange={handleChange}
            name='2019'
            color='primary'
          />
        }
        label='2019'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state['2018']}

            onChange={handleChange}
            name='2018'
            color='primary'
          />
        }
        label='2018'
      />
    </FormGroup>
  );
}
