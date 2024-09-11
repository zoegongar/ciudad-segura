export const registerService = async ({ user_name, email, pass }) => {
  const url = `${import.meta.env.VITE_API_URL}/user/register`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_name, email, pass }),
  });

  const json = await response.json();

  if (!response.ok) throw new Error(json.message);

  return json;
};
