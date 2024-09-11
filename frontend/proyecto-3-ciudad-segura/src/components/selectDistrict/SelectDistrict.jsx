import { Link } from 'react-router-dom';
import style from './selectDistrict.module.css';

export const SelectDistrict = () => {
  return (
    <>
      <section className={style.section}>
        <Link className={style.link} to={'/problems/districts/1'}>
          Bosque de los árboles conversadores
        </Link>
        <Link className={style.link} to={'/problems/districts/2'}>
          Cair Paravel
        </Link>
        <Link className={style.link} to={'/problems/districts/3'}>
          Archenland
        </Link>
        <Link className={style.link} to={'/problems/districts/4'}>
          Montañas del León
        </Link>
        <Link className={style.link} to={'/problems/districts/5'}>
          Islas solitarias
        </Link>
      </section>
    </>
  );
};
