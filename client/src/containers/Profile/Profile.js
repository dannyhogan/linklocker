import React, { useEffect, useState } from 'react';
import './Profile.scss'
import profilePhoto from '../../assets/profile.jpg';
import LinksDisplay from '../LinksDisplay/LinksDisplay';
import { useParams } from 'react-router-dom';
import { getUserLinks } from '../../services/link'
import { useAuth } from '../../context/auth'
import LinkForm from '../LinkForm/LinkForm';
import { Button } from '@material-ui/core';
import SocialLinks from '../SocialLinks/SocialLinks';


const Profile = () => {
  const { username } = useParams();
  const { auth } = useAuth();
  const [links, setLinks] = useState([]);
  const [profileErrror, setProfileError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selfProfile, setSelfProfile] = useState(false);
  const [formOpen, toggleFormOpen] = useState(false);


  useEffect(() => {
    setLoading(true);

    if(auth.isAuthenticated && username === auth.user.username) {
      setSelfProfile(true)
    } else {
      setSelfProfile(false)
    }

    getUserLinks(username)
      .then(links => {
        console.log(links)
        setLinks(links);
      })
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        setProfileError(err.message)
      })

  }, [username, auth])

  if(profileErrror) return (
    <div className="Profile error">
      <h1>{profileErrror}</h1>
    </div>
  )

  return (

    <div className="Profile">

      <img className="profile-photo" src={profilePhoto} alt="User avatar" />
      <h2>
        <span>@</span>
        {username}
      </h2>
      <SocialLinks />
      <LinksDisplay
        loading={loading}
        username={username}
        links={links}
        selfProfile={selfProfile} />

      {selfProfile && (
        <>
          <Button
            variant="outlined"
            className="add-link-button"
            onClick={() => toggleFormOpen(!formOpen)}>Add Link</Button>
          <LinkForm

            setLinks={setLinks}
            isOpen={formOpen}
            toggleOpen={toggleFormOpen} />
        </>
      )}
    </div>
  );
}

export default Profile;
