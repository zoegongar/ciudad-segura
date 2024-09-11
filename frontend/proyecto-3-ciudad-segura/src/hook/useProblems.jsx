import { useState, useEffect } from 'react';
import { getproblemsByIdDisctrictService } from '../service/getproblemsByIdDisctrictService';
import { getProblemCompleteService } from '../service/getProblemCompleteService';

export const useProblems = (id_district) => {
  const [problems, setProblems] = useState([]);
  const [error, setError] = useState('');

function updateProblems(){
  setProblems([...problems])
} 

  useEffect(() => {
    const getproblemsByIdDisctrict = async () => {
      try {
        let problems   
        if(id_district){
          problems = await getproblemsByIdDisctrictService(id_district);
        } else {
          problems = await getProblemCompleteService();
        }

        setProblems(problems.problems);
      } catch (error) {
        setError(error);
      }
    };

    getproblemsByIdDisctrict();
  }, [id_district]);

  return { problems, error, updateProblems };
};
