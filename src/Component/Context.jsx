import React, { createContext, useContext, useState } from "react";


const AuthContext = createContext(null);

export const Authprovider = ({ children }) => {
    const [theme, setTheme] = useState({
       isClick:false
    });

    return (
        <AuthContext.Provider value={{ theme, setTheme }}>
            {children}
        </AuthContext.Provider>
    );
};

// use context
export const useAuth = () => useContext(AuthContext);
