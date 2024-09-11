import { useContext, useState } from 'react';
import { loginUserService } from '../../service/loginUserService';
import { AuthContext } from '../../context/AuthContextProvider';
import { useNavigate, Link } from 'react-router-dom';
import styles from './formLogin.module.css';

export const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPasswd] = useState('');
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const rta = await loginUserService({ email, pass });

      setToken(rta);

      navigate('/AdminPage'); //redirigir en forma automática a una det ruta
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.main}>
      {error ? <p className={styles.error}>{error}</p> : null}
      <div className={styles.content}>
        <h2>Login</h2>

        <form onSubmit={handleSubmit} id='form'>
          <div className={styles.field}>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label>Contraseña:</label>
            <input
              type={showPass ? 'text' : 'password'}
              name='pass'
              onChange={(e) => setPasswd(e.target.value)}
            />
            <div className={styles.ojo} onClick={() => setShowPass(!showPass)}>
              {showPass ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                  />
                </svg>
              )}
            </div>
          </div>
          <div className={styles.enviar}>
            <button className={styles.login}>Login</button>
          </div>
          <div className={styles.recuperarpass}>
            <Link className={styles.link} to={'/user/password/recover'}>
              <p>Recuperar contraseña</p>
            </Link>
          </div>
          {/* {error ? <p>{error}</p> : null} */}
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
