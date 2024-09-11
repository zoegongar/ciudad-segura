export const changeRecoverPasswordService = async ({
  email,
  recovery_code,
  newPass,
}) => {
  const url = `${import.meta.env.VITE_API_URL}/user/password/reset`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, recovery_code, newPass }),
  });

  const json = await response.json();

  if (!response.ok) throw new Error(json.message);

  return json;
};
