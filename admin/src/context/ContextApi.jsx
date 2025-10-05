import React, { createContext, useState } from "react";
import axios from "axios";
import { useContext } from "react";

// 1️⃣ Create the context
export const GlobalContext = createContext();

// 2️⃣ Create a provider component
export const GlobalProvider = ({ children }) => {

  const [user, setUser] = useState(null); // example: user state
  const [theme, setTheme] = useState("light"); // example: theme state

  // any functions you want to share globally
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


 const GetProducts = async () => {
  try {
    const response = await axios.get("https://api.kazoma.co.in/api/products");
    // Return the actual products array
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // return empty array on error to avoid crashes
  }
};


  return (
    <GlobalContext.Provider value={{ user, setUser, theme, toggleTheme,GetProducts}}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useApi=()=>useContext(GlobalContext)