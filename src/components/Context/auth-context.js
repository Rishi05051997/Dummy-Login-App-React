import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn : false,
    LoggedOut: () => {},
    LoggedIn : () => {}
});


export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    useEffect(() => {
        const loggedUserDetails = localStorage.getItem('loggedUser');
        if(loggedUserDetails === '1'){
          setIsLoggedIn(true);
        }
      }, [])
      const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('loggedUser', '1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        setIsLoggedIn(false);
      };

    return (
        < AuthContext.Provider value={{
            loggedIn: loginHandler,
            loggedOut: logoutHandler,
            isLoggedIn: isLoggedIn
        }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;