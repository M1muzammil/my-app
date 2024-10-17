
// import React, { createContext, useReducer } from "react";
// import { reducer } from "./reducer";

// export const GlobalContext = createContext(); // Remove "Initial Value" from createContext

// let data = {
//   user: {}, // { firstName: "John", lastName: "Doe", email: "XXXXXXXXXXXXXX" }
//   isLogin: null, // null || true || false
//   isAdmin: null, // null || true || false
//   darkTheme: localStorage.getItem("weAppDarkTheme") || false,
// };

// export default function ContextProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, data);

//   return (
//     <GlobalContext.Provider value={{ state, dispatch }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// }
// context/context.js
import React, { createContext, useReducer, useEffect, useState } from "react";
import { reducer } from "./reducer";

export const GlobalContext = createContext();

const initialData = {
  user: {},
  isLogin: null,
  isAdmin: null,
  darkTheme: false, // Default value before checking localStorage
};

const ContextProvider = ({ children }) => {



  return (
    <GlobalContext.Provider value={ dispatch }>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
