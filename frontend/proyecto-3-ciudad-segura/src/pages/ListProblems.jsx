//import { useParams } from 'react-router-dom';
import { useProblems } from '../hook/useProblems';
import style from '../styles/ListProblemsByIdDistrict.module.css';
import { update } from '../service/update';
import { AuthContext } from '../context/AuthContextProvider';
import { useContext } from 'react';
import noimg from '../img/noimg.jpg';
/* función que lista todos los problemas */
export const ListProblems = () => {
  const { token, user } = useContext(AuthContext);
  const { problems, error, updateProblems } = useProblems();

  const { VITE_API_URL } = import.meta.env;

  const handleUpdate = async (problemId) => {
    try {
      await update(problemId, token);
      const problem = problems.find((p) => p.id_problem === problemId);
      problem.problem_status = 'Resuelto';
      updateProblems();
    } catch (error) {
      console.error('error');
    }
  };

  /* Elemento que muestra el array de los problemas */
  return (
    <>
      <h1 className={style.titulo}>Lista de problemas</h1>
      <div className={style.div}>
        {problems &&
          problems?.map((problem) => {
            return (
              <>
                <section className={style.section1} key={problem.id_problem}>
                  <ul>
                    <div className={style.contentimgs}>
                      <li>
                        {problem.photo ? (
                          <img
                            className={style.image}
                            src={`${VITE_API_URL}/uploads/${problem.photo}`}
                            alt='foto_problema'
                          />
                        ) : (
                          <img
                            className={style.noimage}
                            src={noimg}
                            alt='no contiene imagen'
                          ></img>
                        )}
                      </li>
                    </div>
                    <div className={style.info}>
                      <li>
                        <p>
                          <h3> Título: {problem.title}</h3>
                        </p>
                      </li>
                      <li>
                        <p>
                          {' '}
                          <span className={style.destacado}>Descripción: </span>
                          {problem.description}
                        </p>
                      </li>
                      <li>
                        <p>
                          {' '}
                          <span className={style.destacado}>
                            Fecha creación:{' '}
                          </span>
                          {new Date(problem.create_date).toLocaleString()}
                        </p>
                      </li>

                      <div>
                        <li>
                          <p>
                            {' '}
                            <span className={style.destacado}>
                              Estado:
                            </span>{' '}
                            {problem.problem_status}
                          </p>
                        </li>
                        {user ? (
                          <button
                            className={style.bu}
                            onClick={() => handleUpdate(problem.id_problem)}
                          >
                            {' '}
                            Marcar como Resuelto{' '}
                          </button>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </ul>
                </section>
              </>
            );
          })}
        {error ? <p>{error}</p> : ''}
      </div>
    </>
  );
};