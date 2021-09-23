import React, { createContext, useCallback, useEffect, useState } from 'react';

const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = useCallback((theme) => {
        document.body.className = theme;
        setTheme(theme);
        window.localStorage.setItem("theme", theme);
    },[]);

    useEffect(() => {
        document.body.className = window.localStorage.getItem('theme');
        setTheme(window.localStorage.getItem('theme'));
    },[]);

    return (
        <ThemeContext.Provider value={{theme, setTheme: toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider, ThemeContext};

export default ThemeProvider;