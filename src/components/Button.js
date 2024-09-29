import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import Icon from '@mdi/react';

export default function Button({ name, link, icon, iconBg }) {
  return (
    <Link to={link} className={styles.btn} target='_blank'>
      <div style={{background: iconBg}}>
        <Icon path={icon} />
      </div>
      <h3>{name}</h3>
    </Link>
  );
}