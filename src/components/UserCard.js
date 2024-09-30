import styles from './UserCard.module.css';
import image from '../images/user.png'

export default function UserCard() {
  const user = {
    name: 'Vinícius Pontes Lima',
    carrer: 'Front-End Developer',
  }

  return (
    <header className={styles.userCard}>
      <img src={image} alt='User' />
      {user.name && ( <h1>{user.name}</h1> )}
      {user.carrer && ( <h2>{user.carrer}</h2> )}
      {user.about && ( <p>{user.about}</p> )}
    </header>
  );
}