import React, { Fragment, useContext } from 'react';
import AuthContext from './components/Context/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const AuthCtx = useContext(AuthContext)

  return (
    < Fragment>
         <MainHeader  />
      <main>
        {!AuthCtx.isLoggedIn && <Login  />}
        {AuthCtx.isLoggedIn && <Home  />}
      </main>
    </Fragment>
     
    
  );
}

export default App;
