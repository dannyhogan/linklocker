import React from 'react';
import './LinkItem.scss';
import lockLogo from '../../assets/locklogo.svg'
// import { handleRedirect } from '../../services/link'

const LinkItem = ({ link, setActiveLink, selfProfile }) => {

  const handleLinkClick = () => {
    console.log('clicked', link)

  }

  return (
    <li className="LinkItem">

      <div className="link-container" onClick={handleLinkClick} href={link.url}>
        <p>{link.title}</p>
      </div>
      <img
        src={lockLogo}
        alt="lock logo"
        className={`lock ${link.isLocked ? 'locked' : 'unlocked'}`}
      />
    </li>
  );
}

export default LinkItem;
