// AppContext.js
import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const AppContext = createContext();

// 2. Provider Component
export const AppProvider = ({ children }) => {

    const [count, setCount] = useState(5); // global state

    return (
        <AppContext.Provider value={{ count, setCount }}>
            {children}
        </AppContext.Provider>
    );
};

// 3. Custom Hook

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => useContext(AppContext);