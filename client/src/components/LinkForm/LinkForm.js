import React, { useState } from 'react';
import { createNewLink } from '../../services/link';
import './LinkForm.scss'
import { Checkbox, TextField, Button } from '@material-ui/core'
import { AiFillEye } from 'react-icons/ai';

const LinkForm = ({ setLinks, isOpen, toggleOpen }) => {

  const [formData, updateFormData] = useState({
    url: '',
    title: '',
    isLocked: false,
    password: ''
  })
  const [showLinkPassword, toggleShowLinkPassword] = useState(false);

  const handleChange = ({ target }) => {

    if(target.name === 'isLocked') {

      if(!target.checked) {
        updateFormData(prevState => ({
          ...prevState,
          password: ''
        }))
      }

      updateFormData(prevState => ({
        ...prevState,
        [target.name]: target.checked
      }))

    } else {

      updateFormData(prevState => ({
        ...prevState,
        [target.name]: target.value.trim()
      }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    createNewLink(formData)
      .then(newLink => {
        setLinks(prevLinks => ([...prevLinks, newLink]));
        toggleOpen(false);
      })
  }

  const { password, url, isLocked, title } = formData;

  return (
    <div className={`LinkForm ${isOpen ? 'open' : 'closed'}`}>

      <Button
        variant="outlined"
        className="close-form-button"
        onClick={() => toggleOpen(!isOpen)}>
        X
      </Button>

      <h2>Add Link:</h2>
      <form onSubmit={handleSubmit}>

        <label>
          Link Title:
          <TextField
            required
            onChange={handleChange}
            name="title"
            variant="filled"
            value={title} />
        </label>

        <label>
          Link URL:
          <TextField
            required
            onChange={handleChange}
            variant="filled"
            type="url"
            name="url"
            value={url} />
        </label>


        <label className="checkbox">
          Password Protected:
          <Checkbox
            onChange={handleChange}
            name="isLocked"
            type="checkbox"
            color="primary"
            value={isLocked} />
        </label>

        <label className={`password ${!isLocked && 'disabled'}`}>
          Password:
          <TextField
            minLength={5}
            maxLength={25}
            variant="filled"
            onChange={handleChange}
            name="password"
            type={showLinkPassword ? 'text' : 'password'}
            value={password}
            disabled={!isLocked} />
          <Button
            className="toggle"
            variant="outlined"
            onClick={() => toggleShowLinkPassword(state => !state)}
          ><AiFillEye /></Button>
        </label>


        <Button
          className="submit-button"
          type="submit"
          variant="outlined"
        >
          Create Link
        </Button>
      </form>
    </div>
  );
}

export default LinkForm;
