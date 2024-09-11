import { AuthContext } from '../../context/AuthContextProvider';
import { useContext, useState } from 'react';
import { newProblemService } from '../../service/newProblemService';
import styles from '../../styles/form.module.css';

export const FormNewProblem = () => {
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [Image, setImage] = useState(null);
  const [reply, setReply] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData(e.target);

      const newTitle = data.get('title'); // Obtener el valor del título

      const newProblem = await newProblemService({ data, token });
      setTitle(newTitle); // Almacenar el valor del título en la variable de estado

      setReply(newProblem);
      setError('');
    } catch (error) {
      setError(error.message);
      setReply('');
    }
  };

  return (
    <section className={styles.main}>
      {error ? <p className={styles.error}>{error}</p> : ''}
      {reply ? (
        <p className={styles.error}>
          Has registrado el problema {title} con éxito.
        </p>
      ) : (
        ''
      )}
      <div className={styles.content}>
        <h2>Nuevo problema</h2>{' '}
        <form onSubmit={handleSubmit} id='form'>
          <div className={styles.field}>
            <label>Titulo:</label>
            <input type='text' name='title' />
          </div>
          <div className={styles.field}>
            <label>Lugar:</label>
            <input type='text' name='place_detail' />
          </div>
          <div className={styles.field}>
            <label>Barrio:</label>
            <select name='id_district'>
              <option value='1'>Bosque de los Árboles Conversadores</option>
              <option value='2'>Cair Paravel</option>
              <option value='3'>Archenland</option>
              <option value='4'>Montañas del León</option>
              <option value='5'>Islas Solitarias</option>
            </select>
          </div>
          <div className={styles.field}>
            <label>Descripción:</label>
            <textarea name='description'></textarea>
          </div>
          <div className={styles.field}>
            <label>Imagen:</label>
            <input
              type='file'
              name='photo'
              accept='image/*'
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className={styles.imgprevi}>
            {Image ? (
              <img src={URL.createObjectURL(Image)} alt='image' />
            ) : null}
          </div>
          <div className={styles.submit}>
            <button className={styles.enviar} type='submit'>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormNewProblem;
