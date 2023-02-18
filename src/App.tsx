import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import styled from "styled-components";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { WindowContextProvider } from "./context/WindowContextProvider";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { Home } from "./pages/Home";
import { Vehicles } from "./pages/Vehicles";
const Wrapper = styled.section`
  display: flex;
  min-height: 100vh;
`;
const MainContainer = styled.section`
  flex-grow: 1;
  padding: 20px 16px 30px 16px;
`;
export const Themes = {
  DARK: 'dark',
  LIGHT: 'light'
}
const darkThemeMui = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightThemeMui = createTheme({
  palette: {
    mode: 'light',
  },
});
export const App = () => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('prefferDarkMode') === "1" ? Themes.DARK : Themes.LIGHT);
  const themeToggler = () => {
    theme === Themes.LIGHT ? setTheme(Themes.DARK) : setTheme(Themes.LIGHT);
  };
  console.log(theme, "THEME");
  useEffect(() => {
    localStorage.setItem('prefferDarkMode', (theme === Themes.DARK ?  1 : 0).toString())
  }, [theme])
  return (
    <ThemeProvider theme={theme === Themes.LIGHT ? lightTheme : darkTheme}>
      <MuiThemeProvider theme={theme === Themes.DARK ? darkThemeMui : lightThemeMui}>
      <>
        <GlobalStyles />
        <Wrapper>
          <WindowContextProvider>
            <Sidebar theme={theme} themeToggler={themeToggler} />
            <MainContainer>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vehicles" element={<Vehicles />} />
              </Routes>
            </MainContainer>
          </WindowContextProvider>
        </Wrapper>
      </>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};
