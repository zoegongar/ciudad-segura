
export const newProblemService = async ({data, token}) => {
    const url = `${import.meta.env.VITE_API_URL}/problems`;

    const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers:{
            authorization: token
        }
    });

    const json = await response.json();

    if(!response.ok) throw new Error(json.message);

    return json.data.entry;
    
}

export default newProblemService