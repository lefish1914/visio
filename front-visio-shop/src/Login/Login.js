import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //Mock para teste de login com usuário e senha
  const mockUser = {
    username: 'admin',
    password: '123456'
  };

  //função para uso de login, essa vai chamar a função de login do backend
  //recomenda-se que as autenticações e validações sejam feitas por backend

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === mockUser.username && password === mockUser.password) {
      setLoading(true);
      setTimeout(() =>{
        setLoading(false);
        onLogin();
      }, 3000); // tempo estimado de 3 segundos de loading
      
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <div className='login-box'>
      <img src='visio-logo.png' alt='Animated' className='animated-image'/>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? (
            <FontAwesomeIcon icon = {faSpinner} spin />
          ): (
            'Entrar'
          )} 
          </button>
      </form>
      </div>
    </div>
  );
};

export default Login;