import React, { useState, createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider({childrent}) {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={theme}>
            {childrent}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }