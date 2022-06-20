import React, { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './dark';

const DEFAULT_THEME = dark;
const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export const ThemeContextProvider = React.memo(({ children }) => {
  const getCurrentTheme = () => {
    return DEFAULT_THEME;
  };

  const [theme, setTheme] = useState(getCurrentTheme());

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
});
