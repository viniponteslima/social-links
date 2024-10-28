import { useEffect, useState } from 'react';
import Button from './Button';
import styles from './SocialLinks.module.css';
import * as mdi from '@mdi/js' 
import data from '../data/user.json'

export default function SocialLinks() {

  const [socialLinks, setSocialLinks] = useState()

  useEffect(() => {
    setSocialLinks(data.user.socialLinks)
  },[])

  return (
    <main className={styles.socialLinks}>
      {
        socialLinks && 
          socialLinks.map((social, index) => (
            <Button 
              key={index}
              name={social.name} 
              icon={mdi[social.icon]} 
              link={social.link} 
              iconBg={social.iconBg}
            />
          ))
        
      }
    </main>
  );
}
