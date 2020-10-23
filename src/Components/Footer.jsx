import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  return (
    // <footer className={styles.container}>
    <footer className="footer">
    <a
      href="https://github.com/dindean"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/mengting-chiang/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </footer>
    // <div>
    //   <button>LinkedIn</button>
    //   <button>Github</button>
    //   <button>Email</button>
    // </div>
  )
}

export default Footer;