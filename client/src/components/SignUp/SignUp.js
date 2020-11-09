import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { signUpUser } from '../../services/auth';
import { TextField, Button } from '@material-ui/core';
import './SignUp.scss'

const SignUp = () => {
  const { auth } = useAuth()
  const { state } = useLocation()
  const [formData, setFormData] = useState({
    username: state ? state.username : '',
    password: '',
    verifiedPassword: ''
  });
  const [signUpError, setSignUpError] = useState(null)

  if(auth.isAuthenticated) {
    return <Redirect to={`/${auth.user.username}`} />
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, verifiedPassword } = formData;

    if(verifiedPassword !== password) {
      setSignUpError('Password do not match, please try again.')

      return;
    }

    const res = await signUpUser(formData);

    console.log(res)
    window.location.reload();
  }

  const handleChange = ({ target }) => {
    setFormData(prevFormData => ({ ...prevFormData, [target.name]: target.value }))
  }

  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <TextField
            inputProps={{ autoCapitalize: "none" }}
            variant="outlined"
            onChange={handleChange}
            name="username"
            value={formData.username} />
        </label>
        <label>
          Password:
          <TextField
            type="password"
            variant="outlined"
            onChange={handleChange}
            name="password"
            value={formData.password} />
        </label>
        <label>
          Verify Password:
          <TextField
            type="password"
            variant="outlined"
            onChange={handleChange}
            name="verifiedPassword"
            value={formData.verifiedPassword} />
        </label>
        <Button
          className="submit"
          variant="outlined"
          type="submit">
          Sign Up
        </Button>
      </form>
      {signUpError && <p className="sign-up-error">{signUpError}</p>}
    </div>
  );
}

export default SignUp;
