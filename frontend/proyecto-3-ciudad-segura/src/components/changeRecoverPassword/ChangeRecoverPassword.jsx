import { useState } from 'react';
import { changeRecoverPasswordService } from '../../service/changeRecoverPasswordService';
import { Link } from 'react-router-dom';
import styles from '../../styles/form.module.css';

export const ChangeRecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [recovery_code, setRecovery_code] = useState('');
  const [newPass, setNewPass] = useState('');
  const [error, setError] = useState('');
  const [confirmarPassword, setConfirmPassword] = useState('');
  const [rta, setRta] = useState({});
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPass !== confirmarPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const r = await changeRecoverPasswordService({
        email,
        recovery_code,
        newPass,
        confirmarPassword,
      });
      setRta(r);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2>Recuperación de contraseña</h2>
        <p>Revise su email para obtener el código de recuperación</p>
        <form onSubmit={handleSubmit} id='form'>
          <div className={styles.field}>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label>Código de recuperación:</label>
            <input
              type='text'
              name='recovery_code'
              value={recovery_code}
              required
              onChange={(e) => setRecovery_code(e.target.value)}
            />
          </div>
          {
            <div className={styles.field}>
              <label>Nueva contraseña:</label>
              <input
                type={showPass ? 'text' : 'password'}
                name='newPass'
                value={newPass}
                required
                onChange={(e) => setNewPass(e.target.value)}
              />
              <div
                className={styles.ojo}
                onClick={() => setShowPass(!showPass)}
              >
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
          }
          <div className={styles.field}>
            <label>Repita contraseña:</label>
            <input
              type={showPass ? 'text' : 'password'}
              name='confirmarPassword'
              value={confirmarPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <button className={styles.enviar} type='submit'>
              Confirmar
            </button>
          </div>
          {error ? <p>{error}</p> : null}

          {rta.status == 'ok' ? (
            <div className={styles.submit}>
              <p>{rta.message}</p>
              <Link to={'/login'}>
                <button>Login</button>
              </Link>
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
    </section>
  );
};
