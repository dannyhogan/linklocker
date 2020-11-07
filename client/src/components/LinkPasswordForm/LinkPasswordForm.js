import { Button } from '@material-ui/core';
import React from 'react';
// import { handleRedirect } from '../../services/link';
import './LinkPasswordForm.scss'

const LinkPasswordForm = ({ toggleOpen, setPassword, password, isOpen, link }) => {

  const handleClose = () => {
    toggleOpen(open => !open);
  }
  // const handleChange = ({ target }) => {
  //   setPassword(target.value);
  // }
  // const handleSubmit = () => {
  //   handleRedirect(link, password);
  // }

  return (
    <form className={`LinkPasswordForm ${!isOpen && 'closed'}`}>
      <Button onClick={handleClose}>X</Button>
      <h3>This link is protected, please enter the password.</h3>
      <label>
        Password:
        <input />
      </label>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default LinkPasswordForm;
