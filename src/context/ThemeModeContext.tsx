import React, { createContext, useState } from 'react';

interface ThemeModeContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);

export const ThemeModeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

