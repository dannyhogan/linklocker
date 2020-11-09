import React from 'react';
import './LinkItem.scss';
import lockLogo from '../../assets/locklogo.svg'
import { handleLinkClick } from '../../services/link'

const LinkItem = ({ link, setActiveLink, formOpen, toggleFormOpen, selfProfile }) => {


  const handleClick = () => {

    if(link.isLocked && !formOpen) {
      setActiveLink(link);
      toggleFormOpen(true);
    } else {
      handleLinkClick(link)
    }

  }

  return (
    <li className="LinkItem">

      <div className="link-container" onClick={() => handleClick()} href={link.url}>
        <p>{link.title}</p>
      </div>

      {link.isLocked && (
        <img
          src={lockLogo}
          alt="lock logo"
          className={`lock`}
        />
      )}
    </li>
  );
}

export default LinkItem;
