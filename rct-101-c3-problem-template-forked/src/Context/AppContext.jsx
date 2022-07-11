import React, { createContext, useReducer } from "react";

// dont change the name

export const AppContext = createContext();

// dont change the name
export const appReducer = () => {
  // write code
};

function AppContextProvider({ children }) {
  // you need to use context
  // fix code here
  const [state, setState] = useReducer({
    isAuth: false,
    token: null
  });

  function handleLogin(token) {
    setState({
      ...state,
      isAuth: true,
      token: token
    });
  }

  function handleLogout() {
    setState({
      ...state,
      isAuth: false,
      token: null
    });
  }

  return (
    <AppContext.Provider value={(state, handleLogin, handleLogout)}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
