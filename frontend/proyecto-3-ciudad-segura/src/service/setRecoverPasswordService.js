export const setRecoverPasswordService = async (email) => {

    const url = `${import.meta.env.VITE_API_URL}/user/password/recover`;

    const data = {
        email
    };

    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const json = await response.json();

    if(!response.ok) throw new Error(json.message);

    return json;
}
