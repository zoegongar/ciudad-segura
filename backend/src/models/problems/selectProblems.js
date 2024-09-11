// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

const selectProblems = async () => {
  const pool = await getPool();

  const [problems] = await pool.query(
    `
                SELECT 
                    P.id_problem,
                    P.title,
                    P.description, 
                    P.create_date,
                    P.photo,
                    P.place_detail,
                    P.problem_status
                FROM problem P 
            `,
  );

  return problems;
};

export default selectProblems;