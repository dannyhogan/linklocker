import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './EditProfile.scss'

const EditProfile = () => {

  const [formData, setFormData] = useState({
    'socialLinkOne': 'Youtube',
    'socialLinkTwo': 'Facebook',
    'socialLinkThree': 'Twitter',
    'socialLinkOneUrl': '',
    'socialLinkTwoUrl': '',
    'socialLinkThreeUrl': '',
    'tagline': ''
  })

  const handleChange = ({ target }) => {
    setFormData(prevData => ({
      ...prevData,
      [target.name]: target.value
    }))
  }

  const options = ['Twitch', 'Discord', 'Youtube', 'Facebook', 'Snapchat', 'Twitter']
  const selectOptions = options.map((item, i) => {
    return (
      <option key={i} value={item}>{item}</option>
    )
  })

  const handleSubmit = e => {
    e.preventDefault();

    
  }

  const {
    socialLinkOne,
    socialLinkTwo,
    socialLinkThree,
    socialLinkOneUrl,
    socialLinkTwoUrl,
    socialLinkThreeUrl
  } = formData;

  return (
    <section className="EditProfile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Social Link 1:
          <select name="socialLinkOne" value={socialLinkOne} onChange={handleChange}>
            {selectOptions}
          </select>
          <TextField className="text-input" variant="outlined" name="socialLinkOneUrl" value={socialLinkOneUrl} onChange={handleChange} />
        </label>
        <label>
          Social Link 2:
          <select name="socialLinkTwo" value={socialLinkTwo} onChange={handleChange}>
            {selectOptions}
          </select>
          <TextField className="text-input" variant="outlined" name="socialLinkTwoUrl" value={socialLinkTwoUrl} onChange={handleChange} />
        </label>
        <label>
          Social Link 3:
          <select name="socialLinkThree" value={socialLinkThree} onChange={handleChange}>
            {selectOptions}
          </select>
          <TextField className="text-input" variant="outlined" name="socialLinkThreeUrl" value={socialLinkThreeUrl} onChange={handleChange} />
        </label>
        <Button type="submit" variant="outlined" className="submit-button">
          Update Profile
        </Button>
      </form>
    </section>
  );
}

export default EditProfile;
