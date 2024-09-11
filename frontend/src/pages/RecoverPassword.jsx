import { useState } from 'react';
import { setRecoverPasswordService } from '../service/setRecoverPasswordService';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/form.module.css';

export const RecoverPassword = () => {
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await setRecoverPasswordService(email);

      navigate('/user/password/reset');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        <h2>Recuperar contraseña</h2>

        <form onSubmit={handleSubmit} id='form'>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.submit}>
            <button className={styles.enviar} type='submit'>
              Enviar
            </button>
          </div>
          {error ? <p>{error}</p> : null}
        </form>
      </div>
    </section>
  );
};
