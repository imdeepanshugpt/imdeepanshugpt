import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import style from './social.module.css';

const Social = () => {
    return (
        <div className="socialMediaIcons">
            {/* <span className={style.title}>Follow me </span> */}
            <a href="https://twitter.com/imdeepanshugpt" className={style.socialLink}>
                <FontAwesomeIcon icon={faTwitter} className={style.twitter} />
            </a>
            <a href="https://facebook.com/imdeepanshugpt" className={style.socialLink}>
                <FontAwesomeIcon icon={faFacebook} className={style.facebook} />
            </a>
            <a href="https://instagram.com/imdeepanshugpt" className={style.socialLink}>
                <FontAwesomeIcon icon={faInstagram} className={style.instagram} />
            </a>
            <a href="https://medium.com/@imdeepanshugpt" className={style.socialLink}>
                <FontAwesomeIcon icon={faMedium} className={style.medium} />
            </a>
            <a href="https://www.linkedin.com/in/imdeepanshugpt/" className={style.socialLink}>
                <FontAwesomeIcon icon={faLinkedin} className={style.linkedin} />
            </a>
        </div>
    );
}

export default Social;