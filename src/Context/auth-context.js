import React , { useState, useEffect } from "react"

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => { 
    const [isLoggedIn, setIsLoggedIn] = useState()

    //// useEffect() is usefull for any change detection
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }

    const loggedInHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true)
    }

    return <AuthContext.Provider value ={{
        isLoggedIn : isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loggedInHandler}}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;