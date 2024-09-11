import { createContext, useState, useEffect } from 'react';
import { getDataUserLoggedService } from '../service/getDataUserLoggedService';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('token', token);
   }, [token]);



  useEffect(() => {
    const getDataUserLogged = async () => {
      try {
        const data = await getDataUserLoggedService({ token });
        setUser(data);
      } catch (error) {
        logout();
      }

    };


    getDataUserLogged();
  }, [token]);

  const logout = () => {
    setToken('');
    setUser(null); 
    navigate('/');
   };


  return (
    <AuthContext.Provider value={{ token, user, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// Valido con propTypes para que no siga marcando en rojo...
AuthContextProvider.propTypes = { children: PropTypes.node.isRequired };
