import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const LandingPageForm = () => {

  const [signUpInput, setSignUpInput] = useState('');
  const history = useHistory();

  const handleSignUpChange = ({ target }) => {
    setSignUpInput(target.value);
  }

  const handleSignUpSubmit = (event) => {
    event.preventDefault();

    history.push({ pathname: '/signup', state: { username: signUpInput } })
  }

  return (
    <form onSubmit={handleSignUpSubmit} className="landing-page-form">
      <label className="form-label">Create a free account today!
      <TextField
          inputProps={{ maxLength: 20 }}
          label="linklocker.io/"
          variant="outlined"
          onChange={handleSignUpChange}
          value={signUpInput} />
      </label>
      <Button type="submit" variant="outlined">Go</Button>
    </form>
  );
}

export default LandingPageForm;
