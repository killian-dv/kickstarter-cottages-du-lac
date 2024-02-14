// AppContext.jsx
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [exampleState, setExampleState] = useState("Initial State");

  const updateExampleState = (newState) => {
    setExampleState(newState);
  };

  const showCard = () => {
    setCardVisible(true);
  };

  const hideCard = () => {
    setCardVisible(false);
  };

  const contextValues = {
    exampleState,
    updateExampleState,
    isCardVisible,
    showCard,
    hideCard,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export { AppContext };
