import Button from './Button';
import styles from './SocialLinks.module.css';
import { mdiGithub, mdiInstagram, mdiLinkedin } from '@mdi/js';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: mdiGithub,
      iconBg: '#000000',
      link: 'https://github.com/viniponteslima',

    },
    {
      name: 'LinkedIn',
      icon: mdiLinkedin,
      iconBg: `#0A66C2 `,
      link: 'https://www.linkedin.com/in/viniciusponteslima/'
    },
    {
      name: 'Instagram',
      icon: mdiInstagram,
      iconBg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
      link: 'https://www.instagram.com/viniciuslima.dev/'
    }
  ];

  return (
    <main className={styles.socialLinks}>
      {
        socialLinks.map((social, index) => (
          <Button 
            key={index}
            name={social.name} 
            icon={social.icon} 
            link={social.link} 
            iconBg={social.iconBg}
          />
        ))
      }
    </main>
  );
}
