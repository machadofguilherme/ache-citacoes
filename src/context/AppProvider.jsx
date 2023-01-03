import React, { useState, useEffect } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [isChoice, setIsChoice] = useState(false);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('data'));
    
    if (getData) {
      setIsChoice(true);
    }
  }, []);

  const setupChoice = (choice) => {
    setIsChoice(choice);
  };

  const saveData = (data) => {
    localStorage.setItem('data', JSON.stringify(data));
  }

  const data = {
    isChoice,
    setupChoice,
    saveData,
  }

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;