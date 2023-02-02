import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeRootVariables } from '../model/ChangeRootVariables';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  function changeTheme(theme: Theme) {
    setTheme(theme);
    changeRootVariables(theme);
  }
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
