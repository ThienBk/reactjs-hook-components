import React, { useState, createContext } from "react";
import Context_child from "./context_child";
import { ThemeProvider } from "./ThemeContextProvider";

export const ThemeContext = createContext();

// Context
// CompA => CompB => CompC

// 1.Create context
// 2.Provider
// 3.Consumer

console.log(ThemeContext);
export default function Context() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <button>Toggle theme</button>
        <Context_child/>
      </div>
    </ThemeProvider>
  );
}
