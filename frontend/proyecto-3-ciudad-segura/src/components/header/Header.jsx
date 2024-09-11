import styles from './header.module.css';
import { Link } from 'react-router-dom';
import logo2 from '../../img/logo2.png';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo2} alt='imagen logo' />
      <nav className={styles.nav}>
        <ul>
          <li className={styles.li}>
            <Link className={styles.link} to={'/'}>
              HOME
            </Link>{' '}
          </li>
          {!user ? (
            <li className={styles.li}>
              <Link className={styles.link} to={'/login'}>
                LOGIN
              </Link>
            </li>
          ) : (
            <li className={styles.li}>
              <Link className={styles.link} to={'/AdminPage'}>
                INICIO
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
