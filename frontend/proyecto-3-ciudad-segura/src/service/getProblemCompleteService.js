export const getProblemCompleteService = async () => {
    const url = `${
      import.meta.env.VITE_API_URL
    }/problems/list`;
    const response = await fetch(url);
  
    const json = await response.json();
  
    return json.data;
  };