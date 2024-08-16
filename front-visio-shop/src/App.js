import logo from './logo.svg';
import './App.css';
import OrderSearch from './OrderSearch/OrderSearch';
import Login from './Login/Login';
import { useState } from 'react';

function App() {

  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleLogin = () =>{
    setAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ?(
        <OrderSearch/>
      ):(
        <Login onLogin={handleLogin}/>
      )}
    </div>
  );
}

export default App;
