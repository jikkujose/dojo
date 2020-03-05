import React from 'react';
import Diamonds from '../../icons/Diamonds';
import './Footer.scss';
import Folder from '../../icons/Folder';
import Inbox from '../../icons/Inbox';
import User from '../../icons/User';
const Footer = () => {
  return (
    <footer>
      <div className="Footer-contianer">
        <Diamonds />
        <Folder />
        <Inbox />
        <User />
      </div>
    </footer>
  );
};
export default Footer;
