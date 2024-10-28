import styles from './UserCard.module.css';
import data from '../data/user.json'
import { useEffect, useState } from 'react';

export default function UserCard() {

  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(data.user)
  },[])

  
  return (
    <header className={styles.userCard}>
      <img src={user.image && user.image} alt='User' />
      {user.name && ( <h1>{user.name}</h1> )}
      {user.carrer && ( <h2>{user.carrer}</h2> )}
      {user.about && ( <p>{user.about}</p> )}
    </header>
  );
}