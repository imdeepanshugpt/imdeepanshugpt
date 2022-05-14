import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faMedium,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import style from './social.module.css';

const Social = () => {
  return (
    <div className="socialMediaIcons">
      <a
        href="https://twitter.com/imdeepanshugpt"
        target="_blank"
        rel="noopener noreferrer"
        className={style.socialLink}
      >
        <FontAwesomeIcon icon={faTwitter} className={style.twitter + ' ' + style.animation} />
      </a>
      <a
        href="https://facebook.com/imdeepanshugpt"
        target="_blank"
        rel="noopener noreferrer"
        className={style.socialLink}
      >
        <FontAwesomeIcon icon={faFacebook} className={style.facebook + ' ' + style.animation} />
      </a>
      <a
        href="https://instagram.com/imdeepanshugpt"
        target="_blank"
        rel="noopener noreferrer"
        className={style.socialLink}
      >
        <FontAwesomeIcon icon={faInstagram} className={style.instagram + ' ' + style.animation} />
      </a>
      <a
        href="https://medium.com/@imdeepanshugpt"
        target="_blank"
        rel="noopener noreferrer"
        className={style.socialLink}
      >
        <FontAwesomeIcon icon={faMedium} className={style.medium + ' ' + style.animation} />
      </a>
      <a
        href="https://www.linkedin.com/in/imdeepanshugpt/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.socialLink}
      >
        <FontAwesomeIcon icon={faLinkedin} className={style.linkedin + ' ' + style.animation} />
      </a>
      <a
        href="https://github.com/imdeepanshugpt"
        target="_blank"
        rel="noopener noreferrer"
        className={style.socialLink}
      >
        <FontAwesomeIcon icon={faGithub} className={style.github + ' ' + style.animation} />
      </a>
    </div>
  );
};

export default Social;
