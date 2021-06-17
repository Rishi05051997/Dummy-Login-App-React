import React, { useState, useEffect } from 'react';
import AuthContext from './Context/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //// useEffect() is usefull for any change detection
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    
      <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler
      }}>
        <MainHeader  />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    
  );
}

export default App;
