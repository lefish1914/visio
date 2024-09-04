import React, {creatContext, useState, useEffect} from 'react';
import axios from 'axios';

const AuthContext = creatContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token')|| null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(token){
            localStorage.setItem('token', token);
            axios.defaults.headers.common['x-acess-token'] = token;
        }else{
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['x-access-token'];
        }
    }, [token]);

    const login = async (username, password) =>{
        try{
            const response = await axios.post('http://127.0.0.1:5000/api/login', { username, password });
            setToken(response.data.token);
            return true;
        }catch (error){
            console.error ('erro no login', error);
            return false;
        }

    };
    const logout = () => {
        setToken(null);
        setUser(null);
    };

    return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
    );
};

export default AuthContext;