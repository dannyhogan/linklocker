import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { handleLinkClick } from '../../services/link';
import './LinkPasswordForm.scss'

const LinkPasswordForm = ({ toggleOpen, isOpen, link }) => {
  const [password, setPassword] = useState('');

  const handleClose = () => {
    toggleOpen(open => !open);
  }

  const handleChange = ({ target }) => {
    setPassword(target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleLinkClick(link, password);
  }

  return (
    <form onSubmit={handleSubmit} className={`LinkPasswordForm ${!isOpen && 'closed'}`}>
      <Button variant="outlined" className="close-form-button" onClick={handleClose}>X</Button>
      <h3>This link is protected, please enter the password.</h3>
      <label>
        Password:
        <TextField onChange={handleChange} value={password} type="password" variant="outlined" />
      </label>
      <Button className="submit-button" type="submit">Submit</Button>
    </form>
  );
}

export default LinkPasswordForm;
