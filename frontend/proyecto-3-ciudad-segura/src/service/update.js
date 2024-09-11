/* Función que sirve para cambiar el estado de los problemas de pendientes a resueltos. */
export const update = async (problem, token) => {
  const url = `${import.meta.env.VITE_API_URL}/problems/${problem}`;
  const dataStatus = {
  problem_status: "Resuelto",
  };

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataStatus),
  });

  const json = await response.json();

  return json;
};
