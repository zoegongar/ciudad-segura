export const getproblemsByIdDisctrictService = async (id_district) => {
  const url = `${
    import.meta.env.VITE_API_URL
  }/problems/districts/${id_district}`;

  const response = await fetch(url);

  const json = await response.json();

  return json.data;
};
