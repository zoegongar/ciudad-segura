import { AdminProfile } from '../components/adminProfile/AdminProfile';
import { Link } from 'react-router-dom';
import styles from '../styles/adminPage.module.css';

export const AdminPage = () => {
  return (
    <div className={styles.div}>
      <AdminProfile />
      <nav>
        <ul className={styles.menuAdmin}>
          <li>
            <Link to={'/NewProblem'}>Crear problema</Link>
          </li>

          <li>
            <Link to={'/ListProblems'}>Editar/Listar todos los problemas</Link>
          </li>

          <li>
            <Link to={'/'}>Editar/Listar por barrio</Link>
          </li>

          <li>
            <Link to={'/Register'}>Crear otro usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
