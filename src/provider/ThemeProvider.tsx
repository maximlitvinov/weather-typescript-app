import { ReactNode, useState } from 'react';

import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeRootVariables } from '../model/ChangeRootVariables';
import { storage } from '../model/Storage';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);
  changeRootVariables(theme);

  function changeTheme(theme: Theme) {
    storage.setItem('theme', theme);
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
