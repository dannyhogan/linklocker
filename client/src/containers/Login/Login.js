import React, { useState, useEffect } from 'react';
import { loginUser } from '../../services/auth.js'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import './Login.scss'
import { Button, TextField } from '@material-ui/core';

const Login = () => {

  const history = useHistory();
  const { updateAuth, auth } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    if(auth.isAuthenticated) {
      history.push(`/${auth.user.username}`)
    }
  }, [auth, history]);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await loginUser(formData);

    if(res.username) {
      updateAuth({ user: res, isAuthenticated: true })
    }
  }

  const handleChange = ({ target }) => {
    setFormData(prevFormData => ({ ...prevFormData, [target.name]: target.value }))
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <TextField inputProps={{ autoCapitalize: "none" }} className="input" variant="outlined" onChange={handleChange} name="username" value={formData.username} />
        </label>
        <label>
          Password:
          <TextField type="password" className="input"  variant="outlined" onChange={handleChange} name="password" value={formData.password} />
        </label>
        <Button className="submit" variant="outlined" type="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login;
