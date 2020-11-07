import React, { useState } from 'react';
import LinkItem from '../LinkItem/LinkItem';
import './LinksDisplay.scss'
import Loading from '../Loading/Loading'
import LinkPasswordForm from '../LinkPasswordForm/LinkPasswordForm'

const LinksDisplay = ({ username, links, loading, selfProfile }) => {

  const [activeLink, setActiveLink] = useState(null);
  const [formOpen, toggleFormOpen] = useState(false);
  const [password, setPassword] = useState(false);

  const linkItems = links.map((link, i) => {
    return <LinkItem setActiveLink={setActiveLink} key={i} link={link} selfProfile={selfProfile} />
  })


  return (
    <div className="LinksDisplay">
      <LinkPasswordForm
        password={password}
        toggleOpen={toggleFormOpen}
        isOpen={formOpen}
        setPassword={setPassword}
        link={activeLink}
      />
      <ul>{loading ? <Loading /> : linkItems}</ul>
    </div>
  );
}

export default LinksDisplay;
