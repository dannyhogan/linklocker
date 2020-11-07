import React from 'react';
import './SocialLinks.scss'
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { FaSnapchatGhost } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';
import { AiFillSlackCircle } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaTwitch } from 'react-icons/fa';


const SocialLinks = () => {

  const imageMap = {
    youtube: AiFillYoutube,
    instagram: AiFillInstagram,
    facebook: FaFacebookSquare,
    twitch: FaTwitch,
    snapchat: FaSnapchatGhost,
    discord: FaDiscord,
    tiktok: SiTiktok,
    github: AiFillGithub,
    slack: AiFillSlackCircle,
    twitter: AiFillTwitterCircle
  }

  const links = [
    {
      url: 'http://www.youtube.com',
      name: 'facebook'
    },
    {
      url: 'http://www.youtube.com',
      name: 'twitch'
    },
    {
      url: 'http://www.youtube.com',
      name: 'youtube'
    },
  ]

  const socialLinkItems = links.map((link, i) => {
    const SocialImage = imageMap[link.name];
    
    return <li key={i}>
      <a href={link.url}>
        <SocialImage />
      </a>
    </li>
  })

  return (
    <ul className="SocialLinks">
      {socialLinkItems}
    </ul>
  );
}

export default SocialLinks;
