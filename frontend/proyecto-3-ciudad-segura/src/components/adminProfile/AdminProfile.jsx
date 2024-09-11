import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import iconlogout from '../../img/iconlogout.png';
import styles from './adminProfile.module.css';

export const AdminProfile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div className={styles.divprofile}>
          <h3>Bienvenid@: {user.user_name} </h3>

          <button className={styles.button} onClick={() => logout()}>
            <img className={styles.img} src={iconlogout} alt='logout'></img>
            Salir
          </button>
        </div>
      ) : (
        <p>No hay ningun usuario conectado</p>
      )}
    </div>
  );
};
