import React from 'react';
import {Link} from 'react-router';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import styles from '../../../styles/ButtonLink.scss';

const ButtonLink = ({ text, to }) => (
  <Link to={to} className={styles.linkAsButton}>
    <span>{text}</span>
    <span><KeyboardArrowRight/></span>
  </Link>
);

export default ButtonLink;
