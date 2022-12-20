import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme}/>
      </>
    </ThemeProvider>
  );
}

export default App;
